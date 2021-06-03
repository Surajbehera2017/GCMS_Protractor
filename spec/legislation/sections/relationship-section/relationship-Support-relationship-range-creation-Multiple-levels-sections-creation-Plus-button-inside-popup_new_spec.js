var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber ='GCMSQABANG-2289';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');
var loadedData=testData[params.env][params.BU];
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
	 * TC09 - Relationships - Support relationship range creation - Multiple levels-sections - Relationship creation -  Plus button
	 */
	it('Multiple levels-sections - Relationship creation -  Plus button.'+jiraNumber, function () {

		globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.AddButton);
        // add relationship type 
       // relationshippage.clickandSelect(loadedData.TypeField,loadedData.relation_type);
		
        browser.waitForAngular();
        
     

       
		//select unit of target document
	   relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.UnitField,loadedData.UnitValue);
	   relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.PartField,loadedData.PartValue);
	 
		
		
		//Click on + button next to anchor image
		   relationshippage.clickOnIcon(loadedData.SourcePanel,loadedData.PlusIcon);
		   
		// verify if popup appears after clicking plus icon or not
		let modalPresent =relationshippage.isModalPresent(loadedData.PlusModal);
		expect(modalPresent).toBe(true);
        
        //Click + button in popup & verify the row is increased by 1
        var initialCount = relationshippage.getNumberOfLevelIncisoRowsInParagraphIdPopup();
		relationshippage.clickPlusImageInParagraphIdPopup();
		browser.sleep(3000);
        var increasedCount = relationshippage.getNumberOfLevelIncisoRowsInParagraphIdPopup();
        initialCount.then(function(previousCount){//Resolve promise to make the expect
            expect(increasedCount).toEqual(previousCount+1);
        });
		
		//Close popup
		globalpage.clickOnButtonForGlobal('Ok');

		

	
	});

});



	
