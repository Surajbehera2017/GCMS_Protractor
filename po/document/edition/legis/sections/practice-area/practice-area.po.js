//var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

var practiceAreaDocEdition = function () {
    
	//Logging in with given username and password
	this.urlLoad = function (user, password) {
        
                var loginpopup = element(by.model('credentials.username'));
                loginpopup.isPresent().then(function (result) {
        
                    if (result) {
        
                        element(by.model('credentials.username')).sendKeys(user);
                        element(by.model('credentials.password')).sendKeys(password);
                        element(by.buttonText('Login')).click();
        
                    }
                    else {
        
                    }
                });
                
            };
        
    //selecting the practice area from the dropdown upon entering the edit mode and adding practice area

      this.selectPracticeAreaFromDropdown = function(value){
        var clickdropdown=element(by.xpath("(//span[contains(text(),'Practice Area')]//..//following-sibling::div//*[@class='search-dropdown-c dropdown-toggle ng-binding'])[3]")).click();
        var textbox= element(by.xpath("(//span[contains(text(),'Practice Area')]//..//following-sibling::div/div//input[@name='txtdropdownsearch'])[3]"));
        return textbox.isPresent().then(function(result){
            if(result==true){
               browser.actions().sendKeys(value).perform();
               browser.actions().sendKeys(protractor.Key.ENTER).perform();
               browser.sleep(2000);
               var selectvalue=element(by.xpath("//a[contains(text(),'"+value+"')]"));
               browser.sleep(2000);
               selectvalue.click();
               return result;
        }
    
           else{
          console.log("element is not present");
            }
        },
             function  (error) {
             console.log("error in selectPracticeAreaFromDropdown:", error);
             return false;

    });

};

//selecting the analyst name from the dropdoown
this.selectPracticeAreaAnalystDropdown = function(value,analystname){
    var clickdropdown = element(by.xpath("//div[@class='row row-detail row-margin-bottom ng-scope']//a[@name='lnkSearchDropdown']")).click();
    var textbox = element(by.xpath("(//input[@name='txtdropdownsearch'])[10]"));
    return textbox.isPresent().then(function(result){
        if(result==true){
           browser.actions().sendKeys(value).perform();
           browser.actions().sendKeys(protractor.Key.ENTER).perform();
           var selectvalue=element(by.xpath("//a[contains(text(),'"+analystname+"')]"));
           selectvalue.click();
           return result;
    }

       else{
      console.log("element is not present");
        }
    },
         function  (error) {
         console.log("error in selectPracticeAreaAnalystDropdown:", error);
         return false;

});
    

}

//clicking the Save button in the pop up after clicking Save button in edit mode

//this.clickToSaveNewPracticeArea = function(){
//    var loc = element(by.xpath('//button[@ng-click="ok()"]'));
//    return loc.isPresent().then(function(result){
//        if(result==true){
//            console.log('Element is Present');
//            browser.actions().click(loc).perform;

//        }else{
//            console.log('Error in clickToSaveNewPracticeArea');
//            return false;
//        }

//    });
//};



};	
        
      
	


module.exports = new practiceAreaDocEdition();