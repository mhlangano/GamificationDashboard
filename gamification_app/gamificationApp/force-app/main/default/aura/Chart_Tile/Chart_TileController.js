({
    doInit: function(component, event, helper) {
        var cmpName = "c:" + component.get("v.cmpName"); 
        var cmpData = ''; //Can hold record id if using force:hasRecordId
        
        $A.createComponent(
            cmpName,
            cmpData,
            function(cmp) {
               var cardContainer = component.find("tile_container");
               cardContainer.set("v.body", cmp);
            }
        );
        
    },
   
})