var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var generaldataDisplayPage = require('../../../../po/document/display/legis/sections/general-data/general-data.po.js');
var generaldataEditPage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2589';
var testData = require('../../../../test-data/Jira_TestData/General-data/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');




describe('General-data', function () {

	// beforeAll(function () {
       
        // browser.ignoreSynchronization = false;
        // var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        // legisDocDisplayPage.get(testData.legislation.sections.generaldata.marginal_idcont1);
        // generaldataDisplayPage.urlLoad();
        // });
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

	
  it('change official language.'+jiraNum, function () {
     
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(1000);
        globalpo.expandSectionInLeftPanel(loaded.modulename1);
        browser.sleep(3000);
        globalpo.clickPlusOrWorldicon(loaded.language);
        browser.sleep(1000);
        globalpo.selectValueDropdown(loaded.language,loaded.langname);
        browser.sleep(4000);
       // global.clickOnElement(loaded.officialcheck);
       // browser.sleep(1000);
        // collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        // browser.sleep(1000);
        // global.clickSaveorCancel(loaded.savebutton);
        // browser.sleep(4000);
        // browser.waitForAngular();
        // rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        // browser.sleep(1000);
        // globalpo.expandSectionInLeftPanel(loaded.modulename1);
        // browser.sleep(3000);
        // globalpo.clickPlusOrWorldicon(loaded.language);
        // browser.sleep(1000);
      //  globalpo.clickOnElement(loaded.deletelangauge);
      //  browser.sleep(2000);
        // collectiveAgreementSection.clickSaveExitEdit(loaded.savebutton);
        // browser.sleep(1000);
        // global.clickSaveorCancel(loaded.savebutton);
        // browser.sleep(4000);
    //    collectiveAgreementSection.clickSaveExitEdit('Exit edition mode');
    //    browser.sleep(2000);

    //    globalpo.clickOnButtonForGlobal(loaded.yesbutton);  
    //    browser.sleep(2000);



 });
          
          
    
     });
    