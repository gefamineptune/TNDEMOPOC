sap.ui.getCore().attachInit(function(startParams) {

    // data = startParameters from Cockpit Tile application settings (action tab)
    // Do your Stuff

    // Some stuff needs to be timed later. Run them inside a timeout
    setTimeout(function() {
        //  Do something
    }, 200);

});

// Only for View - Custom beforeDisplay - Trigger everytime the view is started
if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function(startParams) {
        // Do your Stuff
    });
}