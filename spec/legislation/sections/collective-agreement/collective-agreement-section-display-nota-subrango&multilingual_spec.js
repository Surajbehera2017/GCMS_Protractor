var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2981';
var jiraNum1='GCMSQABANG-2982';
var testData = require('../../../../test-data/Jira_TestData/collective-agreement/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

describe("Collective Agreements", function () {
       
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
    
	it('should Display Nota Subrango.'+jiraNum, function () {
        //span[contains(text(),'Subrango')]

        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(2000);
       
        globalpo.expandSectionInLeftPanel(loaded.modulename1);
        browser.sleep(1000);
        globalpo.clickPlusOrWorldicon('Language');
        browser.sleep(1000);
        globalpo.selectValueDropdown('Language','Árabe');
        browser.sleep(2000);
        globalpo.expandSectionInLeftPanel(loaded.modulename);
        browser.sleep(2000);
        globalpo.clickPlusOrWorldicon('Nota del subrango');
        browser.sleep(3000);
        var languagepresent=globalpo.isElementDisplayed('//label[contains(text(),"Árabe")]');
        expect(languagepresent).toEqual(true);
        globalpo.clickOnButtonForGlobal('Cancel');
        collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        browser.sleep(1000);
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
        browser.sleep(2000);


		});
        
             
	});
 


