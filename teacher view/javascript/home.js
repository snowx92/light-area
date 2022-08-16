





//chart
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('chart', {
        chart: {
            type: 'areaspline',
           
          },
          title: {
            text: 'Total subscrptions'
          },

          xAxis: {
            categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
 
          },
          yAxis: {
            title: {
              text: 'count'
            }
          },
          tooltip: {
            shared: true,
            valueSuffix: ' Date'
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0
            }
          },
          series: [{
            name: 'Subscrptions',
            data: [3, 4, 3, 5, 4, 10, 12],
          }]
    });
});

