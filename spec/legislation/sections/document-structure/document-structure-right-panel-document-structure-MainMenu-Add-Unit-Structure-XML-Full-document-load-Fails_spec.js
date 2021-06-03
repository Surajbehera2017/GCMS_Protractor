var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber='GCMSQABANG-1644';
var testData = require('../../../../test-data/Jira_TestData/'+jiraNumber+'.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var loadedData=testData[params.env][params.BU]


describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});
 

	/*
	 * GCMSQABANG-1644: TC03 - Right Panel - Document Structure - Main Menu - Add a Unit from Structure using XML - Full document load -  Fails	 * 
	 */
    
    it('Right Panel Document Structure Main Menu Add a Unit from Structure using XML Full document load Fails.'+jiraNumber, function () {

      browser.waitForAngular();
      rightpanelpage.clickOnbuttonInEditMode(loadedData.edit_button);
      var saveButtonDisplayed=rightpanelpage.buttonDisplayedInEditMode(loadedData.exit_button);//Exit edition mode , Save
      expect(saveButtonDisplayed).toEqual(true);
      var editButtonDisplayed=rightpanelpage.buttonDisplayedInEditMode(loadedData.save_doc);
      expect(editButtonDisplayed).toEqual(true);
      rightpanelpage.expandSectionInLeftPanel(loadedData.grants_and_Subsidies);
      rightpanelpage.worldIconImage(loadedData.subject_of_the_grant);
      rightpanelpage.editInLanguageWindow(loadedData.base_language,loadedData.base_language_value);
      browser.sleep(3000);
      rightpanelpage.clickOnApplyOrCloseButton(loadedData.apply_button);
      browser.sleep(3000);
      rightpanelpage.clickOnbuttonInEditMode(loadedData.save_doc);
      browser.sleep(3000);
      rightpanelpage.clickOnApplyOrCloseButton(loadedData.ok_button);
      browser.sleep(3000);

      rightpanelpage.expandSectionInLeftPanel(loadedData.grants_and_Subsidies);
      rightpanelpage.getTextFromSectionsField(loadedData.subject_of_the_grant);

       });
    
});
