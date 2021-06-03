// var params = browser.params;
// //i18n basic support
// var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// //test data support for various BU's
// var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
// var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
// var controldatasection = require('../../../../po/document/edition/legis/sections/control-data/control-data.po.js');
// var loadedData = testData.legislation.sections.control_data;
// var legisDocEditPage = new LegislationDocumentEditionPage();



var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2832';
var jiraNum1='GCMSQABANG-2831';
var jiraNum2='GCMSQABANG-2833';
var testData = require('../../../../test-data/Jira_TestData/Control Data/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');




describe('Control Data', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loaded.marginal_id);
		collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);
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


	//Method: TC02 - Control Data - Display last relevant change only for Arz and Gulf - ARZ - Edit
	it('Display last relevant change only for Arz and Gulf - ARZ - Edit.'+jiraNum+'.'+jiraNum1+'.'+jiraNum2, function () {
    	browser.waitForAngular();
		rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
		browser.sleep(2000);
		globalpo.expandSectionInLeftPanel(loaded.modulename);
        browser.sleep(1000);
        globalpo.selectValueDropdown(loaded.sectionname,loaded.docsubtype);
        browser.sleep(4000);
		global.expandSectionInLeftPanel(loaded.modulename1);
	    browser.sleep(3000);
		// rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        // browser.sleep(1000);
		global.clickOnElement(loaded.analyst);
		browser.sleep(1000);
		expect(global.isElementPresent(loaded.analystdropdown)).toEqual(true);
		browser.sleep(1000);
		collectiveAgreementSection.clickSaveExitEdit('Exit edition mode');
        browser.sleep(2000);
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
        browser.sleep(2000);


		});
	});


