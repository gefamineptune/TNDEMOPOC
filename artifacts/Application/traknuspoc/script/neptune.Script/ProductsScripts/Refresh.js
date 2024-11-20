function refreshDataProducts() {

    // MENGAMBIL DATA PRODUCTS
    let options = {
        parameters: {offset : offsetVal, limit : limitVal, orderBy : orderByVal}
    };


    apiGET_Products(options);
    apiJumlahData();

    // MENGAMBIL JUMLAH PRODUCTS PAGE
   /* let options = {
        "perPage": perPage
    };*/

    //apiJumlahData();
}