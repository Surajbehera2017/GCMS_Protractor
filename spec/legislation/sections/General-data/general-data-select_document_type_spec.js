var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2679';
//var jiraNum1='GCMSQABANG-2454';
//var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var testData = require('../../../../test-data/Jira_TestData/General-data/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
//GCMSQABANG-2983


//mrg:12088224
//2679
describe("General-data", function () {
      
      
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
    
	it('Add a document in General-data.'+jiraNum, function () {

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.addbutton);
        browser.sleep(1000);
        collectiveAgreementSection.enterMarginalIdImport(loaded.code,loaded.Code);
        browser.sleep(1000);
        collectiveAgreementSection.enterMarginalIdImport(loaded.year,loaded.Year);
        globalpo.clickOnButtonForGlobal(loaded.calculatebutton);
        browser.sleep(1000);
        collectiveAgreementSection.clickAddCopy('Add');
        browser.sleep(1000);
        globalpo.expandSectionInLeftPanel(loaded.modulename1);
        browser.sleep(1000);
        globalpo.selectValueDropdown(loaded.sectionname,loaded.docsubtype);
        browser.sleep(4000);
        
        
        //browser.sleep(1000);
        // globalpo.selectValueDropdown(loaded.sectionname,'Actos preparatorios');
        // browser.sleep(4000);
        // var elementpresent1=globalpo.isElementDisplayed('//strong[contains(text(),"Collective Agreements")]');
        // expect(elementpresent1).toEqual(false);


        collectiveAgreementSection.clickSaveExitEdit('Exit Adding mode');
        browser.sleep(1000);
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
        browser.sleep(2000);


             
         });
     
});
       
