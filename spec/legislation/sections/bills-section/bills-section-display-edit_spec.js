var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LoginPage = require('../../../../po/login.po.js');
var billSection = require('../../../../po/document/display/legis/sections/bills-section/bills-new.po.js');

describe('Bill Section', function () {

    beforeEach(function () {
        
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.bills.marginal_id_having_bills);
        billSection.urlLoad(params.valid_username,params.valid_password);
               
    });

    it('should verify display edit', function () {
		
	    expect(billSection.isBillsSectionDisplayed()).toBeTruthy();
        billSection.expandSection();
        billSection.clickBillsAddButton();
        browser.ignoreSynchronization = true;
        billSection.enterNumber();
        billSection.clickProcedure();
                	
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                billSection.enterPopupProcedure();
                billSection.clickFilter();
                billSection.clickFilterButton();
                browser.switchTo().window(handles[0]).then(function(){
                            
                });
                });
                	    
            });
        });

    afterEach(function(){//Close additional tab
	browser.getAllWindowHandles().then(function(handles) {
	browser.switchTo().window(handles[0]);
	for(var i=1;i<handles.length;i++){
	browser.switchTo().window(handles[i]).then(function () {
	browser.close();
	},function(error){
	browser.switchTo().window(handles[0]);
	});
	}
	browser.switchTo().window(handles[0]);
	});
	});
});
               