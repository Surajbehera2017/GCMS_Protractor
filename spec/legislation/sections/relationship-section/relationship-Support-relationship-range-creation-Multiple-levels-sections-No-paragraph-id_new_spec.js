var params = browser.params;
var jiraNumber ='GCMSQABANG-2283';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		
		//legisDocDisplayPage.get(loadedData.addmultiple_paragraph.marginal_id);
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});


	/*
	 * TC01 - Relationships - Support relationship range creation - Multiple levels-sections - No paragraph id
	 */
	it('Relationships - Support relationship range creation - Multiple levels-sections - No paragraph id.'+jiraNumber, function () {
		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
		 
		//select unit of source document
		relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.UnitField,loadedData.UnitValue);
		relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.ComplimentField,loadedData.ComplimentValue);
		
		expect(relationshippage.isHeaderDisplayedInDocStructurePopUp()).toEqual(false);
		
		//Click on + button next to anchor image 
		relationshippage.clickOnIcon(loadedData.SourcePanel,loadedData.PlusIcon);
		browser.sleep(2000);
		
		// verify if paragraphid is present of not by counting number of unit
		expect(relationshippage.getNumberOfUnitInParagraphIdPopup()).toEqual(0);
		
	
		
	});

});




