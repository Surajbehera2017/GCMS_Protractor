var params = browser.params;
var jiraNumber ='GCMSQABANG-1977';


var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var authorNotesPage = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');



describe('Relationship', function () {

beforeAll(function () {
    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username,params.valid_password);

});
	/*
	 * 03 - Remove several Products from several Relationships
	 * Note: Implementing for 3 relationships & multiple products
	 */
	it('Remove several Products from several Relationships.'+jiraNumber, function () {
// click on viewall link on relationship section 

globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.viewAllLink);

//Select first three  check box in relationship table from 1st page
   globalpage.selectNoOfRows('3'); 

//Click add product button

// globalpage.clickOnButtonForGlobal(loadedData.AddProductButton);
authorNotesPage.clickOnbuttonInsideSectionTable(loadedData.AddProductButton);


//Verify add product popup is displayed
expect(relationshippage.isModalPresent(loadedData.AddProductModal)).toEqual(true);


//Select first  three value from drop down & verify
for (var row = 0; row < loadedData.expectedproducts.length; row++) {
		//Select value from drop down
		relationshippage.clickDropDownArrowInAddProductFormPopUp('table');
		relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('table',loadedData.expectedproducts[row]);
		relationshippage.clickDropDownArrowInAddProductFormPopUp();
		relationshippage.selectValueDisplayedInProductDropDownInRelationshipLayer('table',loadedData.expectedproducts[row]);
		browser.waitForAngular();
}
//Click accept & verify operation is successful
globalpage.clickOnButtonForGlobal(loadedData.AcceptButton);
var infoMessage = relationshippage.getMessageFromInfoDialogueBox();
expect(infoMessage).toEqual(loadedData.msg);
globalpage.clickOnButtonForGlobal(loadedData.ok);

		
		//Select first three  check box in relationship table from 1st page
		globalpage.selectNoOfRows('3'); 

		//Click Modify product button
		
		globalpage.clickOnButtonForGlobal(loadedData.ModifyButton);
		expect(relationshippage.isModalPresent(loadedData.RemoveModal)).toEqual(true);
		
		//Remove all added products
		for (var row = 0; row < loadedData.expectedproducts.length; row++) {
			relationshippage.removeExistingProductInModifyPopUp(loadedData.expectedproducts[row]);
			browser.waitForAngular();
		}
		globalpage.clickOnButtonForGlobal(loadedData.AcceptButton);
		// var infoMessage = relationshippage.getMessageFromInfoDialogueBox();
		// expect(infoMessage).toEqual(I18n.relationshipsection.adddocumentsuccess);
		relationshippage.clickOkpopup();
		browser.waitForAngular();
		
		//Click glass view icon & verify the value removed from publication data
		for (var i = 0; i < 3; i++) {
			relationshippage.clickGlassButtonAtPosition(i);
			for (var row = 0; row < loadedData.expectedproducts.length; row++) {
				var publicationDataFound = 
					relationshippage.isValueDisplayedInPublicationData(loadedData.expectedproducts.length[row]);
				expect(publicationDataFound).toEqual(false);
			}
			browser.waitForAngular();
			relationshippage.clickGlassButtonAtPosition(i);
			browser.waitForAngular();
		}
		
		
	});
	
});




