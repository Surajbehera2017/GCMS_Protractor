
var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1797';
 var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

describe('Document-structure', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);
       
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
    
      /* GCMSQABANG-1797 : 02- Unwrapping Notatexhist List Element with Repro */
    it(' Unwrapping Notatexhist List Element with ReproAdd.'+jiraNumber, function () {
   
   
        browser.waitForAngular();
        browser.sleep(2000);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        browser.waitForAngular();
         rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.unit_Name,loaded.version);
        browser.waitForAngular();
       rightpanelpage.clickonXEditorExpandButton();
        browser.waitForAngular();
        browser.sleep(4000);
        browser.switchTo().frame(loaded.out_frame_id); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.clickCapatextoAndChildTabs(loaded.breadcrumb_tab_name_fst); //Click on Captexto tab
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.notatextohist);  // Always move the option into Insert element
        browser.sleep(1000);
        rightpanelpage.clickCapatextoAndChildTabs(loaded.breadcrumb_tab_name_second); // Select for NotaTexto from Captexto
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.repro);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal(loaded.save);
        browser.waitForAngular();
        browser.sleep(5000);

       // Below code will take care of Deleteing all Breadcrumb which newly created through this spec.
        rightpanelpage.clickOnEditVisual();
        browser.waitForAngular();
        rightpanelpage.clickonXEditorExpandButton();
        browser.sleep(3000); 
        browser.switchTo().frame(loaded.out_frame_id); // give id of iframe
        browser.ignoreSynchronization = true
        browser.switchTo().frame(loaded.inside_frame_id); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.rightClickonSpecificDataType(loaded.notatextohist);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.sleep(3000);
        browser.switchTo().frame(loaded.out_frame_id);
        browser.ignoreSynchronization = true;
        rightpanelpage.selectDataTypeAndPerform(loaded.notatextohist,loaded.element_delete);
     
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        rightpanelpage.clickOnButtonForGlobal(loaded.save);
    });



});