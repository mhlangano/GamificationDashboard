({
    getLeaders: function (component, event, helper) {
        var action = component.get("c.getLeaderboardList");

        var params = event.getParam("arguments");

        action.setCallback(this, function (response) {
            helper.responseCallback(response, params.callback);
        });
        $A.enqueueAction(action);
    },
    getActivities: function (component, event, helper) {
        var action = component.get("c.getActivityBreakdown");
 
        var params = event.getParam("arguments");

        action.setCallback(this, function (response) {
            helper.responseCallback(response, params.callback);
        });
        $A.enqueueAction(action);
    },  
    getIncidents: function (component, event, helper) {
        var action = component.get("c.getIncidentsList"); 
 
        var params = event.getParam("arguments");

        action.setCallback(this, function (response) {
            helper.responseCallback(response, params.callback);
        });
        $A.enqueueAction(action);
    },  
    getProducts: function (component, event, helper) {
        var action = component.get("c.getProductsList");  
 
        var params = event.getParam("arguments");

        action.setCallback(this, function (response) {
            helper.responseCallback(response, params.callback);
        });
        $A.enqueueAction(action); 
    },     
    
    
})