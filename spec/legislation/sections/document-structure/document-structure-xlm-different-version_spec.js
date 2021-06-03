var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1861';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_text;
var loadedData = testData[params.env][params.BU]

describe('Document-structure', function () {

	beforeEach(function () {

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

	//GCMSQABANG-1861 :07 - Document with xml - Display different version.
      it('Document with xml Display different version.'+jiraNumber, function () {

        //Verify Document text tab is visible
		var docTextDisplayed = rightpanelpage.isRightPanelTabDisplayed('DOCUMENT TEXT');
        expect(docTextDisplayed).toEqual(true);
        rightpanelpage.clickOnRightPanelTab('DOCUMENT TEXT');
        
        // select version and referesh and verify if selected verion is expected one
        rightpanelpage.selectversion(loadedData.version_value);
        rightpanelpage.clickOnApplyOrCloseButton('rightPanel.refreshText');
        expect(rightpanelpage.isSelectverionDisplayed(loadedData.version_value)).toEqual(true);

        // select version and referesh and verify if selected verion is expected one
        rightpanelpage.selectversion(loadedData.version_value1);
        rightpanelpage.clickOnApplyOrCloseButton('rightPanel.refreshText');
        expect(rightpanelpage.isSelectverionDisplayed(loadedData.version_value1)).toEqual(true);

        // select version and referesh and verify if selected verion is expected one
        rightpanelpage.selectversion(loadedData.version_value2);
        rightpanelpage.clickOnApplyOrCloseButton('rightPanel.refreshText');
        expect(rightpanelpage.isSelectverionDisplayed(loadedData.version_value2)).toEqual(true);

        // select version and referesh and verify if selected verion is expected one
        rightpanelpage.selectversion(loadedData.version_value3);
        rightpanelpage.clickOnApplyOrCloseButton('rightPanel.refreshText');
        expect(rightpanelpage.isSelectverionDisplayed(loadedData.version_value3)).toEqual(true);
        
        // select version and referesh and verify if selected verion is expected one
        rightpanelpage.selectversion(loadedData.version_value4);
        rightpanelpage.clickOnApplyOrCloseButton('rightPanel.refreshText');
        expect(rightpanelpage.isSelectverionDisplayed(loadedData.version_value4)).toEqual(true);
          
    
	});
	
});
