var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1666';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData[params.env][params.BU];


describe('Document-structure', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id_xml);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);

    });

    afterEach(function () {
		
		//Delete the Unit created for this test
		browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
	    //Delete the content
		legisDocDisplayPage.get(loadedData.marginal_id_xml);
        rightpanelpage.clickDocumentStructure();
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit,'Original');
        browser.waitForAngular();
        browser.sleep(5000)
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.selectAllAndDelete();
        browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        rightpanelpage.clickOnApplyOrCloseButton('editTextLayer');
        browser.sleep(3000);
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
		
	});

    /*
    * TC03 -  Legislation Unit Edition - Missing Image Element - Edit
    *
    */

    it('Legislation Unit Edition - Missing Image Element - Edit.'+jiraNumber, function () {

        browser.waitForAngular();
        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        
        rightpanelpage.rightClickOnOrignalVisualAndEditLayer(loadedData.unit,'Original');
        browser.waitForAngular();
        
        
        browser.sleep(9000);
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.clickonSpecificDataType(loadedData.datatype);
        browser.switchTo().defaultContent();
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;

        //paste external text
        rightpanelpage.clickOnPasteDropdown();
        rightpanelpage.selectOptionFromPasteDropdown('Paste external text');
        rightpanelpage.enterTextIntoPopup(loadedData.text);
        rightpanelpage.clickOnInsertorCancelInPastePopUpWindow('Insert');

        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.switchTo().defaultContent();

        //enter faltafigura element
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.clickCapatextoAndChildTabs(loadedData.cap_option);
        browser.sleep(2000);
        rightpanelpage.moveToInsertAndSelectElement(loadedData.insertelement);
        browser.sleep(2000);
        
        //click on save
        browser.switchTo().defaultContent();
        //browser.ignoreSynchronization = false;
        rightpanelpage.clickOnApplyOrCloseButton('editTextLayer');
        browser.sleep(3000);
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
       
        
    });
});
