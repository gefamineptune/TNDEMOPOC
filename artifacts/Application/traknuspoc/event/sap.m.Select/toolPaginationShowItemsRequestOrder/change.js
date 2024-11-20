if (toolPaginationShowItemsRequestOrder.getVisible()) {
    paginationBarRequestOrder.pagination.take = parseInt(toolPaginationShowItemsRequestOrder.getSelectedKey());
}

paginationBarRequestOrder.pagination.index = 0;
paginationBarRequestOrder.run(true); 
paginationBarRequestOrder.handlePagination();