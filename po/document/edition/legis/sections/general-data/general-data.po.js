var ExpandableToggle = require('../../../../display/legis/sections/expandable-toggle.po.js');

var generaldataeditpage = function() {

	this.expandableEdit = new ExpandableToggle('linkUncollapseGeneralDataSection', 'linkCollapseGeneralDataSection');

	this.urlLoad=function(){

		var loginpopup =  element(by.model('credentials.username'));
		loginpopup.isPresent().then(function(result) {

			if ( result ) {

				element(by.model('credentials.username')).sendKeys('UX001254');
				element(by.model('credentials.password')).sendKeys('Naveen#92');
				element(by.buttonText('Login')).click();

			}
			else{

			}
		});
	};



	this.clickUncollaspedGeneraldata= function() {
		element(by.id('linkUncollapseGeneralDataSection')).click(); 
	};


	this.getSelectedLanguage= function() {

		var _selectedsecondLang = element.all(by.css('select[ng-change="generalDataController.fillLangValues(language)"]>option[selected="selected"]')).get(0);
		return _selectedsecondLang.getText().then(function(result){
		return result.trim();
		});

	};


	this.SelectedanotherLanguage= function() {
		element.all(by.model('language.idLang')).get(1).value='Gallego';
	};


	this.SelectedsameLanguage= function() {
		element.all(by.model('language.idLang')).get(1).value='Catalán';
	};

    //click on '+' button
     this.clickOnPlusButton= function() {
	
        browser.executeScript("arguments[0].click();", element(by.id('btn-plus')).getWebElement());
	
    };

    var _selectLanguageType=element.all(by.model('language.idLang')).get(1); 

	
	this.selectLanguageFromDropdown =  function (positionNum){
	
			if (positionNum) {
	
				_selectLanguageType.click().then(function(result){   
	
					_selectLanguageType.all(protractor.By.tagName('option')).then(function (options) {
	
						options[positionNum].click();
					});
				});
			}
	
		};
	
//click on x button to remove language
this.clickOnXButton= function(){
	
	  element(by.css('[ng-click="generalDataController.removeLanguage(language)"]')).click();
  };



	this.clickSave= function() {
		//element.all(by.model('language.idLang')).get(1).value='Catalán';
		element.all(by.id('btnSaveDocument')).get(1).click();
	};


	this.clickSaveonpopup= function(){
		element(by.css('[ng-click="ok()"]')).click();
	};

	this.clickChangeOfficial= function(){
		element.all(by.css('.borde-checkbox')).get(0).click();
	};

	this.clickOnOfficialCheckBox= function(){
		element.all(by.css('.borde-checkbox')).get(1).click();
	};
	this.clickChangeOfficialAgain= function(){
		element.all(by.model('language.oficial')).get(0).click();
	};

	this.clickDeleteLanguage= function(){
		element.all(by.css('[ng-click="generalDataController.removeLanguage(language)"]')).get(0).click();
	};

	this.clickUncollaspedStatueData= function(){
		element(by.id('collapsed-legislation-link')).click();
	};

	//click on global icon next to main keyword section in statue data

	var _globeButton=element(by.css('.right.ng-scope.ng-isolate-scope'));//.click();

	this.clickOnGlobalIconOfStatueData= function () {
		browser.executeScript("arguments[0].scrollIntoView();",_globeButton.getWebElement());
		return _globeButton.click();
};


	/*this.clickOnGlobalIconOfStatueData= function(){
		element.all(by.css('.glyphicons.global.colorblue')).get(2).click();
	};*/

	this.enterMainKeywordForCatalan=function(text,i){
		element.all(by.css('[name="txtdropdownsearch"]')).get(i).click();
        element.all(by.css('[name="txtdropdownsearch"]')).get(i).sendKeys(text);
       
	};





	
	this.clickOnApplyButton= function(){
		element(by.id('freeTextBtn-apply-Main-Keyword')).click();
	};


	this.clickAdddeletedLanguage= function(){
		element.all(by.id('btn-plus')).click();
	};

	this.selectlanguageagain= function(){
		element.all(by.model('language.idLang')).get(3).value='Latin';
	};

	this.selectDocumentSubtypelegis= function(){
		var select= element(by.model('generalDataController.model.data.document.tipoDisposicion.code'));
		select.$('[value="4"]').click();
	};


	this.selectBaseSubtypeCatalan= function(){
		var select= element(by.model('generalDataController.model.data.document.baseLanguage.code'));
		select.$('[value="4"]').click();
	};


	


	/*  this.getSelectedLanguage= function() {
       //var e = element(by.selectedOption('language.idLang')).getText();

      //  var x = element(by.model('language.idLang'));
        var x =element.all(by.model('language.idLang')).get(0);
        var e = x.all(by.tagName('option'));
        console.log(e);
        var i;
        for(i in e)
            {
                if(i.getAttribute('selected').contains('selected'))
                   {
                      return i.getText();
                   }
            }

      //  var e = x.options.getAttribute('selected');

       // console.log("The language selected x:" + e.getText());


        return "data not found";


     // var strUser = e.options[e.selectedIndex].value;
      // return strUser;
   }; 
	 */



	this.selectOfficialLanguage= function(){
		var select= element(by.model('language.idLang'));
		select.$('[value="1"]').click();
	};

	this.jurisdictionSelect= function(){
		element(by.css('[name="lnkSearchDropdown"]')).click();

	};

	this.jurisdictionSelectOption= function(data){
		element.all(by.model('searchtext')).get(0).sendKeys(data);
		element.all(by.model('searchtext')).get(0).sendKeys(protractor.Key.ENTER);
		element(by.cssContainingText('[ng-click="select(item)"]',data)).click();
	};




	this.selectDocumentTypeFromComboBox = function (Doctype) {
		var selectDocumentType = element(by.model('generalDataController.model.data.document.tipoDisposicion.code'));
		
			selectDocumentType.click().then(function(result){   
				var options =element(by.xpath("//option[contains(text(),'"+Doctype+"')]"));
				
			    options.isDisplayed().then(()=>{
					options.click();

				});
				
				
				
			
			
			});
		
	};


};

module.exports = new  generaldataeditpage();