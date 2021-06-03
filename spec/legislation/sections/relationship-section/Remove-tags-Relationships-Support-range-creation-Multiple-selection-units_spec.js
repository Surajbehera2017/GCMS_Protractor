var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber ='GCMSQABANG-2230';
var jiraNumber1 ='GCMSQABANG-2229';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber1 + '.js');
var loaded=testData[params.env][params.BU];
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

	beforeEach(function () {

		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
		legisDocDisplayPage.get(loaded.marginal_id);
		
		relationshippage.urlLoad(params.valid_username,params.valid_password);
		browser.driver.manage().window().maximize();

	});


	/*
	 * TC04 Relationships - Support relationship range creation - Multiple selection of units - Remove multple tags
	 */
	it('Relationships - Support relationship range creation - Multiple selection of units - remove multple tags.'+jiraNumber, function () {
	
          //click on add relationship button and then click on source structure	
 		globalpage.clickOnSectionButton('Relationships','Add');
		relationshippage.clickOnIcon('Source','openStructure');
	     // verify if source structure is opened or not
        expect(relationshippage.isModalPresent('Document Structure')).toEqual(true);
        // select multiple checkbox abd save
        relationshippage.clickMultipleCheckBoxDocumentStructure();
		globalpage.clickOnButtonForGlobal('Ok');
		// verify if selected checkbox values are displayed or not
	   expect(relationshippage.isMultipleTagsPresent()).toBe(true);
        
       //close all tags and verify if all tags are removed or not
       relationshippage.closeAllTagsinDocumentStructurePopup();
       expect(relationshippage.isMultipleTagsPresent()).toBe(false);
        
       
	});

});





       
            
        

        
		





