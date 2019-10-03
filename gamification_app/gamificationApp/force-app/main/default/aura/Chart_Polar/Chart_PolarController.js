({
	doInit : function(component, event, helper) {
        var service = component.find("service");

        service.getIncidents($A.getCallback(function (error, data) {
            if (error) {
                alert('Error occurred');
            }else{

				var chartType = 'polarArea';
                
                var chartData = {
                    labels: [       
                        "New",
                        "Triage", 
                        "In Progress",
                        "Resolved",
                        "Closed"
                    ],
                    datasets: [
                        { 
                            data: [
                                data.cardDataMap.New,
                                data.cardDataMap.Triage,
                                data.cardDataMap.Inprogress,
                                data.cardDataMap.Resolved,
                                data.cardDataMap.Closed
                            ],
                            backgroundColor: [
                                "#FF6384",
                                "#4BC0C0",
                                "#FFCE56",
                                "#E7E9ED",
                                "#36A2EB"
                            ]
                        }]
                };   

                                 
                var chartOptions = {                  
                    responsive: true,
                    legend: {
                        display: true,
                        position:'left',
                        align: 'end'
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
                        var chartContainer = component.find("incidents");
                        chartContainer.set("v.body", cmp);
                    }
                );            
            
            }
        }));
        
	}
})