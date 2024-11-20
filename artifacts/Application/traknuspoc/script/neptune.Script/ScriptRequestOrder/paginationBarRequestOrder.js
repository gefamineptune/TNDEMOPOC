let paginationBarRequestOrder = {
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

        if (!keepIndex) paginationBarRequestOrder.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarRequestOrder.pagination.take,
            skip: paginationBarRequestOrder.pagination.take * paginationBarRequestOrder.pagination.index
        }


        //Example
        //MultiModel with all the data

        // paginationBarRequestOrder.pagination.count= modelYour_MultiModel.getData().length;
        // modelYour_Object.setData( modelYour_MultiModel.getData().slice( paginationBarRequestOrder.pagination.take *paginationBarRequestOrder.pagination.index , 
        //                                   paginationBarRequestOrder.pagination.take +( paginationBarRequestOrder.pagination.index *paginationBarRequestOrder.pagination.take)))

        //OR
        //Api Call with restriction 

        // let opts = {
        //     parameters: {
        //         take: paginationBarRequestOrder.pagination.take,
        //         skip: paginationBarRequestOrder.pagination.take * paginationBarRequestOrder.pagination.index
        //     }
        // }

        let options = {
            data: {
                "offsetValue": paginationBarRequestOrder.pagination.take * paginationBarRequestOrder.pagination.index,
                "limitValue": paginationBarRequestOrder.pagination.take
            }
        };

        // console.log(options.data.offsetValue); //offset
        // console.log(options.data.limitValue); //value

        apiGetRequestOrdersCustomersProducts(options);

    },
    handlePagination() {

        let maxIndex = (paginationBarRequestOrder.pagination.count / paginationBarRequestOrder.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarRequestOrder.pagination.count <= paginationBarRequestOrder.pagination.take) maxIndex = 1;

        toolPaginationFirstRequestOrder.setEnabled(true);
        toolPaginationPrevRequestOrder.setEnabled(true);
        toolPaginationNextRequestOrder.setEnabled(true);
        toolPaginationLastRequestOrder.setEnabled(true);

        if (paginationBarRequestOrder.pagination.index < 0) paginationBarRequestOrder.pagination.index = 0;

        if (paginationBarRequestOrder.pagination.index === 0) {
            toolPaginationFirstRequestOrder.setEnabled(false);
            toolPaginationPrevRequestOrder.setEnabled(false);
        }

        if ((paginationBarRequestOrder.pagination.index + 1) >= maxIndex) {
            toolPaginationNextRequestOrder.setEnabled(false);
            toolPaginationLastRequestOrder.setEnabled(false);
        }

        toolPaginationPagesRequestOrder.destroyItems();

        let numItems = 0;
        let maxItems = paginationBarRequestOrder.configuration.maxNumberOfButtons - 1;
        let startItem = Number.parseInt(paginationBarRequestOrder.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (let i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) toolPaginationPagesRequestOrder.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        toolPaginationPagesRequestOrder.setSelectedKey(paginationBarRequestOrder.pagination.index);
        toolPaginationTitleRequestOrder.setNumber((paginationBarRequestOrder.pagination.index + 1) + "/" + maxIndex);

    }
}
