var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2448';
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
    
	it('enter one digit seven digit and blank digit into codigo de convenio field.'+jiraNum, function () {
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(4000);
       
        globalpo.expandSectionInLeftPanel(loaded.modulename);
        browser.sleep(3000);
       
        collectiveAgreementSection.enterTextinFeilds(loaded.feildname,loaded.digits);
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        
        var elemttext=globalpo.gettingTextofelement(loaded.element1,loaded.text1);
        expect(elemttext).toEqual(true);
        globalpo.clickOnButtonForGlobal(loaded.okbutton);
        browser.sleep(1000);

        collectiveAgreementSection.enterTextinFeilds(loaded.feildname,'1234567');
        collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        browser.sleep(2000);

        var elemttext1=globalpo.gettingTextofelement(loaded.element2,'**El código de convenio tiene menos de 14 dígitos');
        expect(elemttext1).toEqual(true);
        globalpo.clickSaveorCancel(loaded.cancelbutton);
        browser.sleep(1000);

        collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        globalpo.clickOnButtonForGlobal(loaded.yesbutton);
        // collectiveAgreementSection.addComanyWorkcenter('Company');
        // collectiveAgreementSection.toDeletetheFeilds('Sector');
        //CollectiveAgreementSection.selectCompanySubrangeDropdown('Company','1994 Continental Distribución');
        // CollectiveAgreementSection.selectThesaurusTerm('Sector','Sectores','Agricultura');
        // globalpo.clickOnButtonForGlobal('Select');
        // CollectiveAgreementSection.selectThesaurusTerm('Subsector','Protección Civil','Brigadas rurales de');
     //globalpo.clickOnButtonForGlobal('Select');
       // CollectiveAgreementSection.deleteFeildValues('Acta');
        //CollectiveAgreementSection.enterDate('Fecha de Suscripción','15/12/2010');
        browser.sleep(2000);
    
        });
	
});


