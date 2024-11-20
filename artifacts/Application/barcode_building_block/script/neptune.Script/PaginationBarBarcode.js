let paginationBarBarcode = {
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

        if (!keepIndex) paginationBarBarcode.pagination.index = 0;

        // Records to Get
        pagination = {
            take: paginationBarBarcode.pagination.take,
            skip: paginationBarBarcode.pagination.take * paginationBarBarcode.pagination.index
        }


        //Example
        //MultiModel with all the data

        // paginationBarBarcode.pagination.count= modelYour_MultiModel.getData().length;
        // modelYour_Object.setData( modelYour_MultiModel.getData().slice( paginationBarBarcode.pagination.take *paginationBarBarcode.pagination.index , 
        //                                   paginationBarBarcode.pagination.take +( paginationBarBarcode.pagination.index *paginationBarBarcode.pagination.take)))

        //OR
        //Api Call with restriction 
      
    
    //let opts = {
    //        parameters: {
     //           take: paginationBarBarcode.pagination.take,
     //           skip: paginationBarBarcode.pagination.take * paginationBarBarcode.pagination.index
    //        }
     //   }

     //   apiGET_Barcode(opts);
let options = {
    data: {
        "offsetValue": paginationBarBarcode.pagination.take * paginationBarBarcode.pagination.index,
        "limitValue": paginationBarBarcode.pagination.take
    }
};

apiGetBarcodeJoinProduct(options);      
    
    },
    handlePagination() {

        let maxIndex = (paginationBarBarcode.pagination.count / paginationBarBarcode.pagination.take);
        maxIndex = Math.ceil(maxIndex);

        if (paginationBarBarcode.pagination.count <= paginationBarBarcode.pagination.take) maxIndex = 1;

        toolPaginationFirstBarcode.setEnabled(true);
        toolPaginationPrevBarcode.setEnabled(true);
        toolPaginationNextBarcode.setEnabled(true);
        toolPaginationLastBarcode.setEnabled(true);

        if (paginationBarBarcode.pagination.index < 0) paginationBarBarcode.pagination.index = 0;

        if (paginationBarBarcode.pagination.index === 0) {
            toolPaginationFirstBarcode.setEnabled(false);
            toolPaginationPrevBarcode.setEnabled(false);
        }

        if ((paginationBarBarcode.pagination.index + 1) >= maxIndex) {
            toolPaginationNextBarcode.setEnabled(false);
            toolPaginationLastBarcode.setEnabled(false);
        }

        toolPaginationPagesBarcode.destroyItems();

        let numItems = 0;
        let maxItems = paginationBarBarcode.configuration.maxNumberOfButtons - 1;
        let startItem = Number.parseInt(paginationBarBarcode.pagination.index - (maxItems / 2));

        if (startItem < 0) startItem = 0;

        for (let i = startItem; i < maxIndex; i++) {
            if (numItems <= maxItems) toolPaginationPagesBarcode.addItem(new sap.m.SegmentedButtonItem({ text: i + 1, key: i }));
            numItems++;
        }

        toolPaginationPagesBarcode.setSelectedKey(paginationBarBarcode.pagination.index);
        toolPaginationTitleBarcode.setNumber((paginationBarBarcode.pagination.index + 1) + "/" + maxIndex);

    }
}
