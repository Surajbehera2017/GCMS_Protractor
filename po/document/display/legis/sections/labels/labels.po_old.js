var LegislationLabels = function () {

    var _userdropdown=element.all(by.css('.dropdown-icon.user-menu')).get(1);
    var _selectspainlang=element(by.xpath("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Spanish']"));

this.urlLoad=function(){
    
    var loginpopup =  element(by.model('credentials.username'));
    loginpopup.isPresent().then(function(result) {
    
    if ( result ) {
     
    element(by.model('credentials.username')).sendKeys('UX001254');
    element(by.model('credentials.password')).sendKeys('Naveen@trnet17');
    element(by.buttonText('Login')).click();

    }
    else{
        
    }
});
};
    this.clickUserDropDown=function(){
        _userdropdown.click();
    }

    this.selectSpainLang=function(){
        _selectspainlang.click();
    }


	this.isSectionHeaderDisplayed= function (value) {
            return element(by.xpath('.//*[@id=\'content-section\']/div[@class="ng-scope"]//*[normalize-space(text())="'+value+'"]')).isDisplayed();
            
           
	};

};

module.exports = new LegislationLabels;