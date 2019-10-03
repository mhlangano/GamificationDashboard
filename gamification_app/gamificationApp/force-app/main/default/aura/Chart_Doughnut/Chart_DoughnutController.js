({
	doInit : function(component, event, helper) {
        var service = component.find("service");

        service.getActivities($A.getCallback(function (error, data) {
            if (error) {
                alert('Error occurred');
            }else{

				var chartType = 'doughnut';
                
                var chartData = {
                    labels: [       
                        data.cardDataMap.onReady+"% Ready",
                        data.cardDataMap.onBreak+"% On break",
                        data.cardDataMap.onMeeting+"% Meeting",
                        data.cardDataMap.onCall+"% On call",
                        data.cardDataMap.onHold+"% On hold"
                    ],
                    datasets: [
                        {
                            data: [
                                data.cardDataMap.onReady,
                                data.cardDataMap.onBreak,
                                data.cardDataMap.onMeeting,
                                data.cardDataMap.onCall,
                                data.cardDataMap.onHold
                            ],
                            backgroundColor: [
                                "orange",
                                "rgb(0, 191, 255)",
                                "yellow", 
                                "rgb(124, 252, 0)",
                                "rgb(255, 0, 255)"
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
                    animation: { 
                        onComplete: function (animation) {
                            if (animation) {
                                var width = animation.chartInstance.chart.width,
                                    height = animation.chartInstance.chart.height,
                                    ctx = animation.chartInstance.chart.ctx;
    
                                    var fontSize = 3;
     
                                    ctx.textBaseline = "top";
    
                                    var text = 'hours',
                                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                                        textY = height / 2;
                                	

                                    ctx.fillStyle = "#999999"; 
                                    ctx.fillText(text, textX+60, textY+15);
    								ctx.font ="bold "+ fontSize + "em sans-serif"; 
    
                                    ctx.textBaseline = "bottom";
    
                                    text = data.cardDataMap.totalHours;
                                    textX = Math.round((width - ctx.measureText(text).width) / 2);
                                    textY = height / 2;
    
                                    ctx.fillStyle = "#BE0028";
                                    ctx.fillText(text, textX+60, textY+15);
                                
                                    ctx.save();
                            }
                        }
                    }
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
                        var chartContainer = component.find("agent_states");
                        chartContainer.set("v.body", cmp);
                    }
                );            
            
            }
        }));
        
	}
})