function filterROpending(){
    let options = {
    data: {
        "status": "Pending"
    }
};

apiCountRequestOrderFilterPending(options);

let optionsShipping = {
    data: {
        "status": "Shipping"
    }
};

apiCountRequestOrderFilterShipping(optionsShipping);

let optionsInProgress = {
    data: {
        "status": "In Progress"
    }
};

apiCountRequestOrderFilterInProgress(optionsInProgress);

let optionsComplete = {
    data: {
        "status": "Complete"
    }
};

apiCountRequestOrderFilterCompleted(optionsComplete);
}

function limitRequestOrder(){
    let options = {
    data: {
        "offsetValue": "0",
        "limitValue": "5"
    }
};

apiGetRequestOrdersCustomersProductsForDashboard(options);
}