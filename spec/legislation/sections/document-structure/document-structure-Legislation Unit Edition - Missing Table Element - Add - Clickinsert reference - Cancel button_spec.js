var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1668';
var testData = require('../../../../test-data/Jira_TestData/'+jiraNumber+'.js');
var loadedData=testData[params.env][params.BU];



describe('Document-structure', function () {

    beforeAll(function () {
		browser.ignoreSynchronization = false;
                var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
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
    
    /*Edit an existing unit and add table
    * GCMSQABANG-1668 :TC06 -  Legislation Unit Edition - Missing Table Element - EDIT - Clicking insert reference - Cancel button
    */
    
    it('Legislation Unit Edition Missing Table Element Add Clicking insert reference Cancel button.'+jiraNumber, function () {

        
        browser.waitForAngular();

        rightpanelpage.clickDocumentStructure();
        rightpanelpage.ClickOnOriginalUnit(loadedData.unit_Name,loadedData.original);
        browser.waitForAngular();
        browser.sleep(2000);
        rightpanelpage.clickOnEditVisual();
        browser.sleep(2000);
        browser.switchTo().frame(loadedData.outside_frame); 
        browser.ignoreSynchronization = true; 
        browser.sleep(3000);
        rightpanelpage.clickCapatextoAndChildTabs(loadedData.capatexto);
        rightpanelpage.moveToInsertAndSelectElement(loadedData.faltatable);
        browser.sleep(1000);
      
        browser.switchTo().frame(loadedData.inside_frame); 
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.clickonSpecificDataType(loadedData.faltatable);        
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.switchTo().frame(loadedData.outside_frame);
        browser.ignoreSynchronization = true;
        rightpanelpage.selectAddOrCancelInInsertTable(loadedData.cancel_button);
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
           
  });
});
