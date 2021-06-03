var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2388';
var jiraNum1='GCMSQABANG-2552';
var testData = require('../../../../test-data/Jira_TestData/product-workbench/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
//GCMSQABANG-2388 Collections
describe('Product Workbench', function () {

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

        //02-Add the first manual collections

    it('should add a first manual collection.'+jiraNum+'.'+jiraNum1, function () {
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(2000);
       
        globalpo.expandSectionInLeftPanel(loaded.prodcollec);
        browser.sleep(2000);
        globalpo.dropdownValueSelect(loaded.collections,loaded.collecvalue);
        browser.sleep(1000);
        //check for the counters increased to 1 in manual collections
        var manualelementtext=globalpo.gettingTextofelement(loaded.manualelement,loaded.text);
        expect(manualelementtext).toEqual(true);

        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(2000);
        globalpo.clickSaveorCancel(loaded.savebutton);
        browser.sleep(2000);

        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(2000);
       
        globalpo.expandSectionInLeftPanel(loaded.prodcollec);
        browser.sleep(2000);
        collectiveAgreementSection.toDeletetheFeilds(loaded.collections);
        browser.sleep(1000);
        //check for the counters reduced to 0 in manual collections
        var manualcollecpresent=globalpo.isElementDisplayed(loaded.manualelement);
        expect(manualcollecpresent).toEqual(false);

        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(2000);
        globalpo.clickSaveorCancel(loaded.savebutton);
        browser.sleep(2000);

         
                   
        });
    });
       

   












