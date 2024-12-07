this.setVisible(false);

chart = new CanvasJS.Chart(document.getElementById("DrillDownChart"), newVSReturningVisitorsOptions);
chart.options.data = visitorsData["Request Orders of Product"];
chart.render();