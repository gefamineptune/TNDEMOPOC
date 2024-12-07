if (SelectStatus.getSelectedKey() === "-" || SelectStatus.getSelectedKey() === undefined ) {
    const binding = TableReportRequestOrder.getBinding("items");


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
} else {
    const binding = TableReportRequestOrder.getBinding("items");

// HANYA UNTUK SATU FIELD FILTER
const filter = new sap.ui.model.Filter("ro_status", "Contains", SelectStatus.getSelectedKey());
binding.filter([filter]);
    
// HANYA UNTUK SATU FIELD FILTER
// const filter = new sap.ui.model.Filter("Username", "Contains", this.getValue());
// binding.filter([filter]);
}
