const binding = TableRequestOrder.getBinding("items");


const filter = new sap.ui.model.Filter({
    filters: [
        
        new sap.ui.model.Filter("ro_status", "Contains","Pending"),
        new sap.ui.model.Filter("ro_status", "Contains","Shipping"),
        new sap.ui.model.Filter("ro_status", "Contains","In Progress"),
        new sap.ui.model.Filter("ro_status", "Contains","Complete")
    ],
    and: false
})
binding.filter([filter]);

SelectStatus.setSelectedKey("-");