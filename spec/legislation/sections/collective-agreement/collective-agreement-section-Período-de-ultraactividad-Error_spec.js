var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2321';
var jiraNum1='GCMSQABANG-2972';
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
    
	it('should check the collective-agreement section Período de ultraactividad - Error.'+jiraNum+'.'+jiraNum1, function () {
     
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(2000);
       
        globalpo.expandSectionInLeftPanel(loaded.modulename);
        browser.sleep(1000);
        //to check the world icon at subrango feild
        var worldiconpresent=globalpo.isElementPresent('//*[text()="Nota del subrango"]//..//..//i');
        expect(worldiconpresent).toEqual(true);
        //to check the world icon at Fecha fin de ultraactividad feild
         var worldiconpresent=globalpo.isElementPresent('//*[text()="Fecha fin de ultraactividad"]//..//..//i');
         expect(worldiconpresent).toEqual(true);
         globalpo.clickPlusOrWorldicon('Fecha fin de ultraactividad');

       // collectiveAgreementSection.enterTextinFeilds('PeriodoUltraActividad','12');
        browser.sleep(3000);
        collectiveAgreementSection.enterTextLanguagepopup('Español','testing');
        browser.sleep(2000);
        collectiveAgreementSection.enterTextLanguagepopup('Inglés','language');
        browser.sleep(2000);
        globalpo.clickOnButtonForGlobal('Apply');
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        //: Invalid content was found starting with element 'workday'. One of '{end-ultra-activity-date}' is expected.
        var elemttext1=globalpo.gettingTextofelement('//div[@name="txtInfoDialog"]','Invalid content was found starting with element');
        expect(elemttext1).toEqual(true);
        globalpo.clickOnButtonForGlobal(loaded.okbutton);






        
	});
    

    
    
});


