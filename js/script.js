setInterval(function() {
  // getJson();
}, 2000);

function getJson() {
  $.getJSON("https://api.myjson.com/bins/1b0r31", function(data) {

  });

}

var temp;
var tempGauge, chartTemp;
var chartElementV;
var chart, label, data;
var index = 0;

gaugeMaker(27);

function gaugeMaker(temp) {

  tempGauge = new JustGage({
    id: "gauge1",
    value: temp,
    min: 0,
    max: 40,
    title: "coffee"
  });

}



chartTemp();

setInterval(function() {
  // addData(chartTemp, ["add" + index + ""], [index]);
  index += 20;
  if (index == 100) {
    index = 0;
  }
}, 500);

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

function chartTemp() {

  //CHART MAKER
  //========================================
  //temperatura

  chartElementV = document.getElementById('chartTemp').getContext('2d');
  // chartElementV.height = 300;
  chartTemp = new Chart(chartElementV, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", ],
      datasets: [{
        data: [65, 8, 90, 81, 56, 55, 40],
        backgroundColor: '#ffffff',
        borderColor: '#021247',
        pointBackgroundColor: '#005c99',
        pointBorderColor: '#fff',
        label: "temperatura"
      }]
    },
    options: {
      responsive: false,
      layout: {
        padding: {
          top: 12,
          left: 12,
          bottom: 12,
        },
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            // fontStyle: "bold",
            beginAtZero: false,
            maxTicksLimit: 12,
            // padding: 20
          },
          gridLines: {
            borderDash: [],
          },
        }],

        yAxes: [{
          ticks: {
            fontColor: "black",
            fontStyle: "bold",
            beginAtZero: false,
            // maxTicksLimit: 5,
            // padding: 20
          },
          gridLines: {
            borderDash: [],
          },
        }],
      },
      plugins: {
        datalabels: {
          display: true,
          font: {
            style: ' bold',
          },
        },
      },
      legend: {
        labels: {

          generateLabels: function(chart) {
            return chart.data.datasets.map(function(dataset, i) {
              return {
                text: dataset.label,
                lineCap: dataset.borderCapStyle,
                lineDash: [],
                lineDashOffset: 0,
                lineJoin: dataset.borderJoinStyle,
                fillStyle: dataset.backgroundColor,
                strokeStyle: dataset.borderColor,
                lineWidth: dataset.pointBorderWidth,
                lineDash: dataset.borderDash,
              }
            })
          },

        },
      },

      title: {
        display: false,
        text: 'Chart Title',
        fontColor: '#3498db',
        fontSize: 32,
        fontStyle: ' bold',
      },
      elements: {
        arc: {},
        point: {},
        line: {
          tension: 0.4,
        },
        rectangle: {},
      },
      tooltips: {},
      hover: {
        mode: 'nearest',
        animationDuration: 400,
      },
    }
  });

}