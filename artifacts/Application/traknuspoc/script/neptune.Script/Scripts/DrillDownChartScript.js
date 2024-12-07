let chart;

let visitorsData = {
	"Request Orders of Product": [{
		click: visitorsChartDrilldownHandler,
		cursor: "pointer",
		explodeOnClick: false,
		innerRadius: "75%",
		legendMarkerType: "square",
		name: "Request Orders of Product",
		radius: "100%",
		showInLegend: true,
		startAngle: 90,
		type: "pie",
		dataPoints: [
			{ y: 5, name: "Compressor CM50", color: "#E7823A" },
			{ y: 12, name: "Drillbit", color: "#a269a8" },
			{ y: 12, name: "ELECTRIC 4-WHEEL CB - 8FBN25", color: "#0444ac" },
			{ y: 6, name: "Mini Excavator", color: "#30e9ee" },
			{ y: 20, name: "P2000-3 FG Wilson Genset", color: "#bed1cc" },
			{ y: 35, name: "Tower Light", color: "#ec30d1" },
			{ y: 20, name: "Truck", color: "#784791" },
			{ y: 11, name: "Truck Cane", color: "#906715" },
		]
	}],
	"Compressor CM50": [{
		color: "#E7823A",
		name: "Compressor CM50",
		type: "column",
		axisX:{
			labelFormatter: function(e){
				return  "x: " + e.value;
			}	
		},
		dataPoints: [
			{ y: 2, label : "Pending" },
			{ y: 2, label : "Shipping" },
			{ y: 1, label : "In Progress" },
			{ y: 1, label : "Complete" },
		]
	}],
	"Drillbit": [{
		color: "#a269a8",
		name: "Drillbit",
		type: "column",
		dataPoints: [
			{ y: 2, label : "Pending"},
			{ y: 2, label : "Shipping" },
			{ y: 5, label : "In Progress"},
			{ y: 3, label : "Complete"},
		]
	}],
	"ELECTRIC 4-WHEEL CB - 8FBN25": [{
		color: "#0444ac",
		name: "ELECTRIC 4-WHEEL CB - 8FBN25",
		type: "column",
		dataPoints: [
			{ y: 5, label : "Pending"},
			{ y: 3, label : "Shipping"},
			{ y: 2, label : "In Progress"},
			{ y: 2, label : "Complete"},
		]
	}],
	"Mini Excavator": [{
		color: "#30e9ee",
		name: "Mini Excavator",
		type: "column",
		dataPoints: [
			{ y: 1, label : "Pending"},
			{ y: 2, label : "Shipping"},
			{ y: 1, label : "In Progress"},
			{ y: 1, label : "Complete"},
		]
	}],
	"P2000-3 FG Wilson Genset": [{
		color: "#bed1cc",
		name: "P2000-3 FG Wilson Genset",
		type: "column",
		dataPoints: [
			{ y: 5, label : "Pending" },
			{ y: 2, label : "Shipping" },
			{ y: 7, label : "In Progress"},
			{ y: 6, label : "Complete"},
		]
	}],
	"Tower Light": [{
		color: "#ec30d1",
		name: "Tower Light",
		type: "column",
		dataPoints: [
			{ y: 7, label : "Pending" },
			{ y: 10, label : "Shipping"},
			{ y: 10, label : "In Progress"},
			{ y: 8, label : "Complete"},
		]
	}],
	"Truck": [{
		color: "#784791",
		name: "Truck",
		type: "column",
		dataPoints: [
			{ y: 10, label : "Pending" },
			{ y: 2, label : "Shipping"},
			{ y: 2, label : "In Progress"},
			{ y: 6, label : "Complete"},
		]
	}],
	"Truck Cane": [{
		color: "#906715",
		name: "Truck Cane",
		type: "column",
		dataPoints: [
			{ y: 10, label : "Pending" },
			{ y: 2, label : "Shipping"},
			{ y: 2, label : "In Progress"},
			{ y: 6, label : "Complete"},
		]
	}],
};

let totalProduct = 121;

let newVSReturningVisitorsOptions = {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Request Orders of Product"
	},
	subtitles: [{
		text: "Click on Any Segment to Drilldown",
		backgroundColor: "#2eacd1",
		fontSize: 16,
		fontColor: "white",
		padding: 5
	}],
	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalProduct * 100) + "%";  
		}
	},
	data: []
};

let visitorsDrilldownedChartOptions = {
	animationEnabled: true,
	theme: "light2",
	axisX: {
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2"
	},
	axisY: {
		gridThickness: 0,
		includeZero: true,
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2",
		lineThickness: 1
	},
	data: []
};

function visitorsChartDrilldownHandler(e) {
	chart = new CanvasJS.Chart(document.getElementById("DrillDownChart"), visitorsDrilldownedChartOptions);
	chart.options.data = visitorsData[e.dataPoint.name];
	chart.options.title = { text: e.dataPoint.name }
	chart.render();
	backButton.setVisible(true);
}

function renderDrillDownChart() {
    chart = new CanvasJS.Chart(document.getElementById("DrillDownChart"), newVSReturningVisitorsOptions);
    chart.options.data = visitorsData["Request Orders of Product"];
    chart.render();
}