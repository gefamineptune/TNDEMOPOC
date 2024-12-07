const context = oEvent.oSource.getBindingContext();  

const data = context.getObject();

console.log(data);

// Get Current User
let currentUserEmail = Text26.getText()
console.log(currentUserEmail)

 sap.m.MessageToast.show("Under maintenance")