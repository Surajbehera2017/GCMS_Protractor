var params = browser.params;
var jiraNumber = 'GCMSQABANG-1823';
var defectId ='GCMSNXT-12227';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loadedata = testData.legislation.sections.document_structure;
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
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


	/*
	 *  GCMSQABANG-1823 26- Borrar numparaghap element with HR as a child
     * defect raised for HR element not present under numparagraph
	 */
    xit('Borrar numparaghap element with HR as a child.'+jiraNumber+'DefectId:'+'.'+defectId, function () {

        browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        browser.waitForAngular();
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit, 'Original');
        browser.waitForAngular();
        browser.sleep(9000);
        browser.switchTo().frame('legistext'); // give id of iframe1
        browser.switchTo().frame('ext-gen1132');// give id of frame 2
        browser.ignoreSynchronization = true; // this needs to be present as our iframe is not an angular
        browser.waitForAngular();
        

        //enter text
        //rightpanelpage.clickonSpecificDataType('parrafo');
        rightpanelpage.writeParagraphOneInAddUnitPopUpAndPressEnter('Paragraph1');
        rightpanelpage.selectAText();

        //select capatexto and numparagraph
        browser.switchTo().defaultContent();
        browser.waitForAngular();
        browser.sleep(7000);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        rightpanelpage.clickCapatextoAndChildTabs('capatexto');
        rightpanelpage.moveToInsertAndSelectElement('numparagraph');

        //click on save
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal('Save');

        browser.sleep(4000);

        rightpanelpage.clickOnEditVisual();

        browser.sleep(7000);
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.sleep(2000);
        browser.switchTo().frame('ext-gen1132');
        browser.sleep(2000);
        //rightpanelpage.clickonSpecificDataType('parrafo');
        rightpanelpage.selectAllAndDelete();

        //click on save
        browser.switchTo().defaultContent();
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal('Save');

        browser.sleep(1000);


        
    });

});







