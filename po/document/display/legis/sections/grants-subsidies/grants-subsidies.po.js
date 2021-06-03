var grantsAndSubsidiesSection = function() {


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

    //to click on world icon in the grants and subsides section
   // testdata: 'Subject of the grant' 'Beneficiaries'
    this.clickWorldicon=function(sectionname){
        var el=element(by.xpath("//*[text()='"+sectionname+"']//..//..//a"));
        return el.isPresent().then(function(result){
            if(result==true){
                el.click();
                return result;
            }
            else{
                console.log("error in clickPlusicon");
                return false;
            }
        },function(error){
            console.log(error);
        });
    };

    this.selectDateInForce = function(x)
{
    browser.sleep(3000);
element(by.xpath("//*[contains(text(),'Date in Force')]//..//..//datepickr//a")).click();
browser.sleep(3000);
element(by.xpath("(//*[contains(text(),'Date in Force')]//..//..//*[@class='dropdown-menu ng-pristine ng-valid ng-valid-date-disabled']//span[text()='"+x+"'])")).click();



}
   







































};
    
module.exports = new grantsAndSubsidiesSection;