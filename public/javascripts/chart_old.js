// chart

var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var myNewChart = new Chart(ctx);

var chartData = [
    {
        value: 876,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Goals"
    },
    {
        value: 535,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Saves"
    },
    {
        value: 316,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Assists"
    }
]

var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#rgba(0,0,0,0)",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 60, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 50,

    //String - Animation easing effect
    animationEasing : "easeOutExpo",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx).Doughnut(chartData, options);
var legend = myDoughnutChart.generateLegend();

$(".charts").append(legend);