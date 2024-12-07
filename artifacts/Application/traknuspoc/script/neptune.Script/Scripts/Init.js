apiGetRequestOrdersCustomersProducts();
apiGetReportStockProduct();
function showModalWarehouseArea(modal) {
    modal.show();
}


limitRequestOrder();
filterROpending();

apiGetCountTotalQtyStocklevels();
apiGetTopFiveProducts();

// Global Functions

/**
 * Generates a QR Code based in a container (based on the ID) and with the corresponding
 * value provided
 */
function generateQr(id, value) {
    var typeNumber = 15;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(value);
    qr.make();
    document.getElementById(id).innerHTML = qr.createImgTag();
}

let isPDF = false;
let imagePdfData = [];