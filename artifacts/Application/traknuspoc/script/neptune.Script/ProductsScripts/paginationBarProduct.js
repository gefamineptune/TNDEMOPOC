let paginationBarProducts = {
    configuration: {
        maxNumberOfButtons: 6 //number maximo of page buttons 
    },
    pagination: {
        take: 10,
        index: 0,
        count: 0
    },
    run: function (keepIndex) {

        // Pagination

        if (!keepIndex) paginationBarProducts.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarProducts.pagination.take,
            skip: paginationBarProducts.pagination.take * paginationBarProducts.pagination.index
        }


        //Example
        //MultiModel with all the data

        // paginationBarProducts.pagination.count= modelYour_MultiModel.getData().length;
        // modelYour_Object.setData( modelYour_MultiModel.getData().slice( paginationBarProducts.pagination.take *paginationBarProducts.pagination.index , 
        //                                   paginationBarProducts.pagination.take +( paginationBarProducts.pagination.index *paginationBarProducts.pagination.take)))

        //OR
        //Api Call with restriction 

        let opts = {
            parameters: {
                take: paginationBarProducts.pagination.take,
                skip: paginationBarProducts.pagination.take * paginationBarProducts.pagination.index
            }
        }

        apiGET_Products(opts);

    },
    handlePagination() {

        let maxIndex = (paginationBarProducts.pagination.count / paginationBarProducts.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarProducts.pagination.count <= paginationBarProducts.pagination.take) maxIndex = 1;

        toolPaginationFirstProducts.setEnabled(true);
        toolPaginationPrevProducts.setEnabled(true);
        toolPaginationNextProducts.setEnabled(true);
        toolPaginationLastProducts.setEnabled(true);

        if (paginationBarProducts.pagination.index < 0) paginationBarProducts.pagination.index = 0;

        if (paginationBarProducts.pagination.index === 0) {
            toolPaginationFirstProducts.setEnabled(false);
            toolPaginationPrevProducts.setEnabled(false);
        }

        if ((paginationBarProducts.pagination.index + 1) >= maxIndex) {
            toolPaginationNextProducts.setEnabled(false);
            toolPaginationLastProducts.setEnabled(false);
        }

        toolPaginationPagesProducts.destroyItems();

        let numItems = 0;
        let maxItems = paginationBarProducts.configuration.maxNumberOfButtons - 1;
        let startItem = Number.parseInt(paginationBarProducts.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (let i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) toolPaginationPagesProducts.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        toolPaginationPagesProducts.setSelectedKey(paginationBarProducts.pagination.index);
        toolPaginationTitleProducts.setNumber((paginationBarProducts.pagination.index + 1) + "/" + maxIndex);

    }
}
