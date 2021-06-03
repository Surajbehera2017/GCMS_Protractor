var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1829';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

                beforeAll(function () {

                browser.ignoreSynchronization = false;
                var legisDocDisplayPage = new LegislationDocumentDisplayPage();

                legisDocDisplayPage.get(loaded.marginal_id1_xml);
                rightpanelpage.urlLoad(params.valid_username,params.valid_password);

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

    //GCMSQABANG-1829 : 06- Delete OrderedList Element with Capatexto
        var jiraNum='GCMSQABANG-1829';
    it('Delete OrderedList Element with Capatexto.'+jiraNum, function () {

        
        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(2000);
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.unit2,loaded.Original);
        browser.waitForAngular();
        browser.sleep(4000);
        browser.switchTo().frame(loaded.out_frame_id); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(8000);
        rightpanelpage.clickCapatextoAndChildTabs(loaded.breadcrumb_tab_name_fst); //Click on Captexto tab
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.orderedlist);  // Always move the option into Insert element
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.sleep(3000);

        //Below code will take care of Deleteing all Breadcrumb which newly created through this spec.
       
        browser.sleep(3000);
        rightpanelpage.clickOnEditVisual();
        browser.sleep(3000);
        browser.switchTo().frame(loaded.out_frame_id);
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        browser.switchTo().frame(loaded.inside_frame_id);
        browser.ignoreSynchronization = true;
        rightpanelpage.rightClickonSpecificDataType(loaded.orderedlist);
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.sleep(3000);
        browser.switchTo().frame(loaded.out_frame_id);
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.selectDataTypeAndPerform(loaded.orderedlist,loaded.element_delete);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.sleep(1000);
       // browser.ignoreSynchronization = false;
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.sleep(2000);
                  
  });
});
