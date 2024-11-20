//
let data = modelHBox1.getData();

data.startPage = data.startPage + 1;

//
let paginationData = modelModelObjectRentHistoryPagination.getData();

let options = {
    "page": data.startPage,
    "perPage": paginationData.perPage
};

apiRestAPIRentHistoryPagination(options);

//
modelHBox1.setData(data);