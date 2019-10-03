public with sharing class Charts_Controller{  

     @AuraEnabled
     public static ResponseObj getLeaderboardList(){
          
        CardListObjectModel performers = new CardListObjectModel();
        performers.Description ='Performers List';

        Map<String, String> performersMap1 = new Map<String, String>{'FullName'=>'Kgomotso Zondi','Id'=>'0051r000009Yg45AAC','Title'=>'Consultant level 3','Rating'=>'92','Score'=>'5 badges','ImageUrl'=>'/servlet/servlet.ImageServer?id=0154I000004qxjB&oid=00D58000000t4DF&lastMod=1569227284000'};
        performers.cardObjectList.add(performersMap1);
         
        Map<String, String> performersMap2 = new Map<String, String>{'FullName'=>'Masie Masina','Id'=>'0051r000009YCObAAO','Title'=>'Consultant level 3','Rating'=>'91','Score'=>'5 badges','ImageUrl'=>'/servlet/servlet.FileDownload?file=0154I000004qxjV'}; 
        performers.cardObjectList.add(performersMap2);
         
        Map<String, String> performersMap3 = new Map<String, String>{'FullName'=>'Thuli Siweya','Id'=>'0051r000009E1r0AAC','Title'=>'Consultant level 2','Rating'=>'90','Score'=>'4 badges','ImageUrl'=>'/servlet/servlet.ImageServer?id=0154I000004qxjf&oid=00D58000000t4DF&lastMod=1569227599000'};
        performers.cardObjectList.add(performersMap3); 
         
        Map<String, String> performersMap4 = new Map<String, String>{'FullName'=>'Lusanda Mokoena','Id'=>'0051r000009Yg4VAAS','Title'=>'Consultant level 2','Rating'=>'89','Score'=>'4 badges','ImageUrl'=>'/servlet/servlet.FileDownload?file=0154I000004qxjL'};
        performers.cardObjectList.add(performersMap4); 
         
        Map<String, String> performersMap5 = new Map<String, String>{'FullName'=>'Lucky Litabe','Id'=>'0051r000009Yg4VAAS','Title'=>'Consultant level 1','Rating'=>'79','Score'=>'4 badges','ImageUrl'=>'/servlet/servlet.FileDownload?file=0154I000004qxjp'};
        performers.cardObjectList.add(performersMap5);    
       
        return new ResponseObj(performers);
     } 
     
    @AuraEnabled
    public static ResponseObj getActivityBreakdown() {   
        
        //List<Case> cs = [select id,Status from Case where ];
        CardMapModel cmm = new CardMapModel();
        cmm.cardDataMap.put('onReady', String.valueOf(20));
        cmm.cardDataMap.put('onBreak', String.valueOf(15));
        cmm.cardDataMap.put('onMeeting', String.valueOf(25));
        cmm.cardDataMap.put('onCall', String.valueOf(22));
        cmm.cardDataMap.put('onHold', String.valueOf(18));
        cmm.cardDataMap.put('totalHours', String.valueOf(40));
        
        System.debug(new ResponseObj(cmm));
        return new ResponseObj(cmm);        
    }
    
    @AuraEnabled
    public static ResponseObj getIncidentsList() {   
        
        //List<Case> cs = [select id,Status from Case where ];
        CardMapModel cmm = new CardMapModel();
        cmm.cardDataMap.put('New', String.valueOf(11));
        cmm.cardDataMap.put('Triage', String.valueOf(16));
        cmm.cardDataMap.put('Inprogress', String.valueOf(7));
        cmm.cardDataMap.put('Resolved', String.valueOf(3));
        cmm.cardDataMap.put('Closed', String.valueOf(14));       
        
        System.debug(new ResponseObj(cmm));
        return new ResponseObj(cmm);        
    }
    
    @AuraEnabled
    public static ResponseObj getProductsList() {   
        
        //List<Case> cs = [select id,Status from Case where ];
        CardMapModel cmm = new CardMapModel();
        cmm.cardDataMap.put('Premium2018', String.valueOf(75));
        cmm.cardDataMap.put('Premium2019', String.valueOf(65));
        
        cmm.cardDataMap.put('Transact2018', String.valueOf(70));
        cmm.cardDataMap.put('Transact2019', String.valueOf(60));
        
        cmm.cardDataMap.put('Gold2018', String.valueOf(80));
        cmm.cardDataMap.put('Gold2019', String.valueOf(70));
        
        cmm.cardDataMap.put('Platinum2018', String.valueOf(40));
        cmm.cardDataMap.put('Platinum2019', String.valueOf(70));
        
        cmm.cardDataMap.put('Black2018', String.valueOf(80)); 
        cmm.cardDataMap.put('Black2019', String.valueOf(75));      
        
        System.debug(new ResponseObj(cmm));
        return new ResponseObj(cmm);        
    }    
        
    public class CardMapModel {
        @AuraEnabled public string Description;
        @AuraEnabled public string Error;
        
        @AuraEnabled public Map <String, String> cardDataMap;
        public CardMapModel()
        {
            cardDataMap = new Map <String, String>();
        }
    }

    public class ResponseObj {
        @AuraEnabled public Boolean IsSuccess { get; set; }
        @AuraEnabled public String Message { get; set; }
        @AuraEnabled public Object Data { get; set; }
         
        public ResponseObj(Boolean isSuccess, String msg){
            this.IsSuccess = isSuccess;
            this.Message = msg;
            this.Data = null;
        }

        public ResponseObj(Object data){
            this.IsSuccess = true;
            this.Message = null;
            this.Data = data;
        }
    }
    
    public class CardListObjectModel {
        @AuraEnabled public string Description;
        @AuraEnabled public string Error;  
         
        @AuraEnabled public List <Object> cardObjectList;
        @AuraEnabled public Object cardObject;
        public CardListObjectModel()
        {   
            cardObjectList = new List <Object>();
        }
    }      
   
}