var params = browser.params;
var jiraNumber ='GCMSQABANG-2130';

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
    //TC02 - Relationships - Edition of an existing one - Edit source unit
    it('Edition of an existing one - Edit source unit.'+jiraNumber, function(){
       // search for  rel type in relationship table
       globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.view);
       globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
       globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
       browser.waitForAngular();
      
             relationshippage.filterbyRelType(loadedData.acepta);
             relationshippage.filterbyConsolidation('No');
        
             browser.waitForAngular();
             // click on edit action
           relationshippage.clickactionOnRelationshipTable(loadedData.edit);
           // edit source unit 
           relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.Unitfield,loadedData.unit);
           relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.Partfield,loadedData.part_new);
        
           globalpage.clickOnButtonForGlobal(loadedData.save);
        //    expect(relationshippage.isModalPresent(loadedData.EditModal)).toBe(true);
           browser.sleep(3000);
        
        relationshippage.closeAddorEditRelationshipPopup();
        // verify if changes reflected in table or not
        expect(relationshippage.isTextFieldpresentSource(loadedData.changeval)).toBe(true);

        relationshippage.clickactionOnRelationshipTable(loadedData.edit);
        relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.Unitfield,loadedData.unit);
        relationshippage.sendValueTo(loadedData.SourcePanel,loadedData.Partfield,loadedData.part_old);
    
        globalpage.clickOnButtonForGlobal(loadedData.save);
        relationshippage.closeAddorEditRelationshipPopup();
        browser.waitForAngular();
        globalpage.clickOnNavigationOrCloseButton('close');
    });
});
