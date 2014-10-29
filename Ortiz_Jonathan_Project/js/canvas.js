window.onload = function() {



    var ctx2 = document.getElementById("canvas2").getContext("2d");

    var data = {
    labels: ["Feature shirts", "Girl shirts","Boy shirts"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(99,105,254,0.2)",
            strokeColor: "rgba(75,91,254,0.5)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#1A93FE",
            pointHighlightFill: "#64E9FE",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [48, 20, 26, 6]
        },
           {
            label: "My First dataset",
            fillColor: "rgba(99,105,254,0.2)",
            strokeColor: "rgba(75,91,254,0.5)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#1A93FE",
            pointHighlightFill: "#64E9FE",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [80, 30, 20, 5]
        },
        
    ]
};


    var myLineChart = new Chart(ctx2).Line(data);



    var ctx4 = document.getElementById("canvas3").getContext("2d");

    var data = [

        {
            value: 30,
            color:"#3BA64D",
            highlight:"#51E56A",
            label: "Funny"
        },
        {
            value: 25,
            color: "#FE4741",
            highlight: "#FF6457",
            label: "quotes"
        },
        {
            value: 25,
            color: "#664C36",
            highlight: "#CFB468",
            label: "Art"
        },
        {
            value:20,
            color: "#241B13",
            highlight: "#3D3C3D",
            label: "memes"

        }
    ]

    var myPieChart = new Chart(ctx4).Pie(data);


}
