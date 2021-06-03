var params = browser.params;
//i18n basic support
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var LegislationDocumentEditionPageObject = require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var legislativebody = require('../../../../po/document/display/legis/sections/legislation-body/legislation-body.po.js');
var legislativebodyEdition = require('../../../../po/document/edition/legis/sections/legislative-body/legislative-body.po.js');
var legislativebodyEditionNew = require('../../../../po/document/edition/legis/sections/legislative-body/new-legislative-body-po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2720';
var testData = require('../../../../test-data/Jira_TestData/Legislation_Body/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]
//var jiraNum='GCMSQABANG-2720';

describe('Legislation-Body', function () {

	beforeEach(function () {
        
		browser.ignoreSynchronization = false;
		 var legisDocEditPage = new LegislationDocumentEditionPage();
		 legisDocEditPage.get(loadedData.marginal_id);

	// 	var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    //    legisDocDisplayPage.get(loaded.marginal_id);
		legislativebodyEdition.urlLoad(params.valid_username,params.valid_password);
		   
	   });

	   afterEach(function () {//Close additional tab
		browser.getAllWindowHandles().then(function (handles) {
		browser.switchTo().window(handles[0]);
			for (var i = 1; i < handles.length; i++) {
			browser.switchTo().window(handles[i]).then(function () {
					browser.close();
			}, function (error) {
					browser.switchTo().window(handles[0]);
			});
			}
			browser.switchTo().window(handles[0]);
		});
		});
		 
	
	it ('should enter text  in the Statute Note and save the change.'+jiraNumber,function (){
	
		browser.waitForAngular();
	
        globalpo.expandSectionInLeftPanel(loadedData.modulename);
		browser.sleep(1000);
		
        var worldiconpresent=globalpo.isElementPresent('//*[text()="Statute Note"]//..//..//i');
        expect(worldiconpresent).toEqual(true);
         globalpo.clickPlusOrWorldicon('Statute Note');
		 browser.sleep(2000);
		 collectiveAgreementSection.enterTextLanguagepopup('Español','testing');
		 browser.sleep(2000);
		 collectiveAgreementSection.enterTextLanguagepopup('Gallego','language');
		 browser.sleep(2000);
		 globalpo.clickOnButtonForGlobal('Apply');
		 collectiveAgreementSection.clickSaveExitEdit(loadedData.savebutton);
		//global.expandSectionInLeftPanel('Statute Data');
		
	});

	
});
		












