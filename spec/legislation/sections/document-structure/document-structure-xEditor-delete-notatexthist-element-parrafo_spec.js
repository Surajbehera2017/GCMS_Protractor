var params = browser.params;
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var jiraNum='GCMSQABANG-1801';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNum + '.js');
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
	
       
        //GCMSQABANG-1799 05- Delete Notatexthist  Element with Parrafo
        
        var jiraNumber= 'GCMSQABANG-1799';
    it('Delete Notatexthist with Parrafo.'+ jiraNumber, function () {

        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure); //DOCUMENT STRUCTURE
        browser.sleep(2000);
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loaded.unit1,loaded.Original); //right click on oroginal and select Edit visual
         browser.sleep(9000);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.clickCapatextoAndChildTabs(loaded.breadcrumb_tab_name_fst); //Click on Captexto tab
        browser.sleep(1000);
        rightpanelpage.moveToInsertAndSelectElement(loaded.notatextohist);// Always move the option into Insert element
        browser.sleep(1000);
        rightpanelpage.clickOnPasteDropdown(); //click on paste from external dropdown in the general tab
        rightpanelpage.selectOptionFromPasteDropdown(loaded.pasteExternalText);//select the option paste from external text
        //rightpanelpage.enteringTextUsingProtractor(loaded.text); //enter the xml in the paste from xml text box
        rightpanelpage.enterTextIntoPopup(loaded.text);
        browser.sleep(1000);
        rightpanelpage.clickOnInsertOrCancel('Insert');
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization=false;
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.sleep(8000);
        //below code deletes the notatextohist element
        rightpanelpage.clickOnEditVisual();
        browser.sleep(5000);
        rightpanelpage.clickonXEditorExpandButton();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.switchTo().frame('ext-gen1132'); 
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        rightpanelpage.rightClickonSpecificDataType(loaded.notatextohist);
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        rightpanelpage.selectDataTypeAndPerform(loaded.notatextohist,loaded.element_delete);
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        browser.sleep(2000);
        rightpanelpage.clickOnButtonForGlobal('Save');
       
        });
    
});
	








