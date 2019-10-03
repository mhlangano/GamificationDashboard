({
    doInit: function (component, event, helper) {
        
                var labels = [
                    "sunday",
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday"
                ];
                var revenues = [
                    200000,
                    140000,
                    120000,
                    150000,
                    180000,
                    190000,
                    220000
                ];
                var clients = [
                    201,
                    140,
                    80,
                    150,
                    190,
                    170,
                    202
                ];        
 
                var chartType = 'bar';

                var chartData = {                                        
                    labels: labels,
                    datasets: [{
                                    type: 'line',
                                    label: "Revenues",
                                    data: revenues,
                         		
                                    borderColor: 'rgba(0, 136, 255, 1)',
                        			borderStyle: 'rgba(0, 136, 255, 1)',                        
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    yAxisID: 'revenues',
                       			 	pointBackgroundColor: "rgba(0, 136, 255, 1)", 
                                },
                                {
                                    label: "Clients",
                                    data: clients,
                                    borderColor: 'rgba(0, 0, 0, 0)',
                                    backgroundColor: 'rgba(192, 75, 192, 0.5)',
                                    yAxisID: 'clients',
                                }
                            ]
                };

                var chartOptions = {
                    responsive: true,
                    legend: {
                        display: true
                    },
                    scales: {
                        yAxes: [
                            {
                                id: "revenues",
                                ticks: {
                                    beginAtZero: true,
                                    callback: function (value) {
                                        return value //apply y-axis formatting to numbers
                                    }                                    
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Revenues (ZAR)'
                                  }
                            },
                            {
                                id: "clients",
                                position: 'right',
                                ticks: {
                                    beginAtZero: true,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Clients'
                                  }
                            },
                        ]
                    },                     
                };

                var cmpData = {
                    chartType: chartType,
                    chartData: chartData,
                    chartOptions: chartOptions
                };

                var cmpName = 'c:Charts_Canvas';

                $A.createComponent(
                    cmpName,
                    cmpData,
                    function (cmp) {
                        var chartContainer = component.find("revenue");
                        chartContainer.set("v.body", cmp);
                    }
                );
  }
})