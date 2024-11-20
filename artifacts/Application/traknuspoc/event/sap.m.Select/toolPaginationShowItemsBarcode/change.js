if (toolPaginationShowItemsBarcode.getVisible()) {
    paginationBarBarcode.pagination.take = parseInt(toolPaginationShowItemsBarcode.getSelectedKey());
}

paginationBarBarcode.pagination.index = 0;
paginationBarBarcode.run(true); 
paginationBarBarcode.handlePagination();