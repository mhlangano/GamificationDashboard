({
	doInit : function(component, event, helper) {
        var service = component.find("service");

        service.getProducts($A.getCallback(function (error, data) {
            if (error) {
                alert('Error occurred');
            }else{

				var chartType = 'radar';
                
                var chartData = {
                    labels: [       
                        "Premium",
                        "Transact", 
                        "Gold",
                        "Platinum",
                        "Black"
                    ],                      
                                        
                    datasets: [{
                        label: "2019",
                        backgroundColor: "rgba(200, 50, 255, 0.5)", 
                        pointBackgroundColor: "rgba(200, 50, 255, 1)",  
                        borderColor: "rgba(200, 50, 255, 1)", 
                        borderWidth: "1", 
                        pointStyle : "line", 
                        data: [
                             data.cardDataMap.Premium2019,
                             data.cardDataMap.Transact2019,
                             data.cardDataMap.Gold2019,
                             data.cardDataMap.Platinum2019,
                             data.cardDataMap.Black2019]
                      }, {
                        label: "2018",
                        backgroundColor: "rgb(255,215,0,0.5)",
                        pointBackgroundColor: "rgb(255,215,0)", 
                        pointStyle : "line",     
                        borderWidth: "1", 
                        borderColor: "rgb(255,215,0)",                           
                        data: [
                             data.cardDataMap.Premium2018,
                             data.cardDataMap.Transact2018,
                             data.cardDataMap.Gold2018,
                             data.cardDataMap.Platinum2018,
                             data.cardDataMap.Black2018]
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
                        var chartContainer = component.find("products_sold");
                        chartContainer.set("v.body", cmp);
                    }
                );            
            
            }
        }));
        
	}
})