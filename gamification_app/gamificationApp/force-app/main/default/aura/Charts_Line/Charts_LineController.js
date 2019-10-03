({
    doInit: function (component, event, helper) {
                
        var chartOptions ={
            title:{
                display:false,
            },
            legend:{
                display: false, 
            },
            layout:{
                padding:{
                    left:100,
                    right:100,
                    bottom:100,
                    top:100
                }
            },
            scales: {
                yAxes: [{
                    stacked: false, 
                    ticks: {
                        callback: function(label, index, labels) {
                            return label+'%';
                        }
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Service level'
                    }
                }] ,
            }
        } 
		var months = ['Apr','May', 'Jun', 'Jul', 'Aug', 'Sep'];
        var chartDatasets = [];
        chartDatasets.push({
            data:[ 70, 75, 80, 86,89, 91],  
            backgroundColor: 'rgba(0, 136, 255, 0.3)',
            borderWidth: 2,
            borderColor: 'rgba(0, 136, 255, 1)',
            label: 'Me',
            lineTension: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: "rgba(0, 136, 255, 1)",
            pointBorderWidth: 0.1,             
        },
        {
            data:[76,78,85,89,86,85],  
            backgroundColor: 'rgba(255, 184, 34, 0.3)',
            borderWidth: 2,
            borderColor: 'rgba(255, 184, 34, 1)',
            label: 'Team',
            lineTension: 0.0, 
            borderJoinStyle: 'miter',
            pointBackgroundColor: "rgba(255, 184, 34, 1)",
            pointBorderWidth: 0.1,                        
        });   
        var chartType = 'line';

        var chartData = {
            labels: months,
            datasets: chartDatasets
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
                var chartContainer = component.find("service_levels");
                chartContainer.set("v.body", cmp);
            }
        );
  }
})