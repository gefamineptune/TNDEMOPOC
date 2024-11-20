function createStockOpnameDetail(data) {

    var options = {
        data: {
            "session_id": data.sessionId,
            "product_id": data.productId,
            "scanned_by": data.scannedBy,
            "scanned_at": data.scannedAt,
            "scanned_quantity": data.scannedQuantity,
            "system_quantity": data.systemQuantity,
            "difference": data.difference,
        }
    };

    apiCreateStockOpnameDetail(options);    
}