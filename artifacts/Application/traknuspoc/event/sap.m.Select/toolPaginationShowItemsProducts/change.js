if (toolPaginationShowItemsProducts.getVisible()) {
    paginationBarProducts.pagination.take = parseInt(toolPaginationShowItemsProducts.getSelectedKey());
}

paginationBarProducts.pagination.index = 0;
paginationBarProducts.run(true); 
paginationBarProducts.handlePagination();