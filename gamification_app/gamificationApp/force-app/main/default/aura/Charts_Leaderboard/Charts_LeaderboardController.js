({
	doInit : function(component, event, helper) {
        var service = component.find("service");

        service.getLeaders($A.getCallback(function(error, data) {
            if (error) {
				alert('An error occurred');
            } else {
                
                component.set("v.performersListObjects", data.cardObjectList);
                component.set("v.performersObject", data.cardObject);
				
                 for (var i = 0; i < data.cardObjectList.length; i++) {
                    
                     data.cardObjectList[i].Title = data.cardObjectList[i].Title.toLowerCase();
                     if(!data.cardObjectList[i].ImageUrl){
                     	data.cardObjectList[i].PerfFirstChar = data.cardObjectList[i].FullName.toUpperCase().substring(0, 1);                     
                        data.cardObjectList[i].ImageUrlCSS="";
                     }else{
						data.cardObjectList[i].ImageUrlCSS = "background-image : url('"+data.cardObjectList[i].ImageUrl+"');";
                     }
                     
                    if (data.cardObjectList[i].Rating < 81) {
                        data.cardObjectList[i].ColorClass = 'red';
                        data.cardObjectList[i].Rating = data.cardObjectList[i].Rating + ' points';
                    }else if (parseInt(data.cardObjectList[i].Rating) < 91) {
                        data.cardObjectList[i].ColorClass = 'yellow';
                        data.cardObjectList[i].Rating = data.cardObjectList[i].Rating + ' points';
                    } else {
                        data.cardObjectList[i].ColorClass = 'green';
                        data.cardObjectList[i].Rating = data.cardObjectList[i].Rating + ' points';
                    }
                     
                     
                    data.cardObjectList[i].LineBreakClass = 'line_break_bottom';
                    if (i == data.cardObjectList.length - 1) {
                        //remove last item
                        data.cardObjectList[i].LineBreakClass = '';
                    }                                  
                 }
            }
        }));		
	}
})