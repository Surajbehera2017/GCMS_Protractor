var params = browser.params;
var jiraNumber ='GCMSQABANG-1924';
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
		legisDocDisplayPage.get(loadedData.marginal_id);
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});
    

	/*
	 * TC01  -Relationships -check the order data retrieved-Consolidations
	 */
	it('Relationships -check the order data retrieved-Consolidations.'+jiraNumber, function () {

		//click on view all link 
        globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.viewAllLink);
		
	 
		globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
		browser.waitForAngular();

		//Verify relationship table & order data is displayed
		expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
		expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);

		 //close relationship table

		 globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);
		 browser.sleep(3000);
		 browser.waitForAngular();
		//Open annotations relations from relationship section
		globalpage.expandSectionInLeftPanel(loadedData.Relationships);
		browser.sleep(3000);
	relationshippage.clickonLinkInsideRelationship(loadedData.consolidations);

				//Verify relationship table & order data is displayed
		expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
		expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);

	});

});




