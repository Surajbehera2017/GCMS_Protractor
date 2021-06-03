var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var LoginPage = require('../../../../po/login.po.js');
//var LoginPage = require('../../po/login.po.js');

var section;
var legisDocDisplayPage;

describe('Legislation Document Display - Right Panel - Document Structure', function () {

	beforeEach(function () {
        
       /*browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var loginPage = new LoginPage();

		loginPage.get().then(function () {
			loginPage.setLanguage(params.language).then(function (loginPage) {
				loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {
                    
                    
                       
				});
			});
		}); */
        browser.ignoreSynchronization = false;
        
		legisDocDisplayPage = new LegislationDocumentDisplayPage();
		
        legisDocDisplayPage.get(testData.legislation.sections.load_text.marginal_id_duplicate_structure_date);
var loginpopup =  element(by.model('credentials.username'));
    loginpopup.isPresent().then(function(result) {
    if ( result ) {
       element(by.model('credentials.username')).sendKeys(params.valid_username);
       element(by.model('credentials.password')).sendKeys(params.valid_password);
       element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
        browser.waitForAngular();
        } else {
        
    }
                          
       
	});
     });

	it('should verduplicate date structure using new date', function () {
        legisDocDisplayPage = new LegislationDocumentDisplayPage();
        section = legisDocDisplayPage.sections.loadText;
        
        //section.clickOnOriginalTextTab.then(function(){
            section.clickOnDocumentStructureTab.then(function(){
                section.clickFirstUnitRow.then(function(){
                    section.clickOnStructureActions.then(function(){
                        section.clickOnDuplicateStructure.then(function(){
                           var today = new Date();
                            var dd = today.getDate();
                            var mm = today.getMonth()+1; //January is 0!

                            var yyyy = today.getFullYear();
                            if(dd<10){
                                dd='0'+dd
                            } 
                            if(mm<10){
                                mm='0'+mm
                            } 
                            var today = dd+'/'+mm+'/'+yyyy; section.enterNextStructureDateField(today).then(function(){
                               section.clickOnOkBtnOnDuplicateStrucPopup.then(function(){
                                   expect(section.getErrorMessageOnDuplicateStructure).toEqual('Operation carried out successfully');
                               }); 
                            });
                        });
                    });
                });
            });
            
        //});
		
		
	});
});