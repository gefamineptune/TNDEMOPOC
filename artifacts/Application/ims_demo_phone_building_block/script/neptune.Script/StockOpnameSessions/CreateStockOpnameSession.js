function createStockOpnameSession(data) {

    var options = {
        data: {
            "warehouseId": data.warehouseId,
            "areaId": data.areaId,
            "conductedBy": data.conductedBy,
            "sessionDate": data.sessionDate,
            "status": data.status,
            "createdBy": data.createdBy,
            "updatedBy": data.updatedBy
        }
    };

    apiCreateStockOpnameSession(options);  

}