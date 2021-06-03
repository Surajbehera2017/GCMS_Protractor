var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1795';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
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

    /* GCMSQABANG-1795  02- Borrar DirWeb element */
   
	it('Delete dir weblement.'+jiraNumber, function () {

        browser.waitForAngular();
		rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        browser.waitForAngular();
        rightpanelpage.ClickOnOriginalUnit(loaded.unit_name1,loaded.version);
        browser.waitForAngular();
        rightpanelpage.clickOnEditVisual();
        browser.sleep(1000);
        rightpanelpage.clickonXEditorExpandButton();
        browser.sleep(2000);
        browser.switchTo().frame(loaded.out_frame_id);
        browser.ignoreSynchronization = true; 
        browser.sleep(5000);
        rightpanelpage.clickCapatextoAndChildTabs(loaded.tabname_1);
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.elementname_1);
        browser.sleep(1000);
        rightpanelpage.clickCapatextoAndChildTabs(loaded.tabname_2);
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.elementname_2);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false; 
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.sleep(4000);
        
        //below code is used to delete the added elements

        rightpanelpage.clickOnEditVisual();
        browser.waitForAngular();
        rightpanelpage.clickonXEditorExpandButton();
        browser.waitForAngular();
        browser.switchTo().frame(loaded.out_frame_id);
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        browser.switchTo().frame(loaded.inside_frame_id);
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.rightClickonSpecificDataType(loaded.Dirweb);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.sleep(3000);
        browser.switchTo().frame(loaded.out_frame_id);
        browser.ignoreSynchronization = true;
        rightpanelpage.selectDataTypeAndPerform(loaded.Dirweb,loaded.element_delete);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        rightpanelpage.clickOnButtonForGlobal('Save');
        
     }); 
    
    
});