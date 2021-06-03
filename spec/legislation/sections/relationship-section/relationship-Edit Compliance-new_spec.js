var params = browser.params;
var jiraNumber ='GCMSQABANG-3483';

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
     * 09 - Edit Compliance
     */

    it('Edit Compliance.'+jiraNumber, function () {
     
     	//Open annotations-target relations from relationship section
		globalpage.expandSectionInLeftPanel(loadedData.Relationships);
		browser.waitForAngular();
		relationshippage.clickOnSoureOrTargetOf(loadedData.Annotation,loadedData.Source);
    
  
    relationshippage.clickactionOnRelationshipTable(loadedData.EditButton);
    expect(relationshippage.isModalPresent(loadedData.EditModal)).toBe(true);
    relationshippage.clickOnTab(loadedData.PURSUANT);
    relationshippage.clickandSelect(loadedData.relationshipdropdown,loadedData.application);
    globalpage.clickOnButtonForGlobal(loadedData.savebutton);
    browser.sleep(2000);
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(2000);
  relationshippage.clickOnLensIcon();
  browser.sleep(2000);
       // expect(relationshippage.isTextFieldpresentTarget(loadedData.compliment)).toBe(false);

        //change BACK TO PREVOIUS VALUE
        relationshippage.clickactionOnRelationshipTable(loadedData.EditButton);
        expect(relationshippage.isModalPresent(loadedData.EditModal)).toBe(true);
        relationshippage.clickOnTab(loadedData.PURSUANT);
        relationshippage.clickandSelect(loadedData.relationshipdropdown,loadedData.compliment);
        globalpage.clickOnButtonForGlobal(loadedData.savebutton);
       
        browser.sleep(2000);
        relationshippage.closeAddorEditRelationshipPopup();
        browser.sleep(2000);
          relationshippage.clickOnLensIcon();
          browser.sleep(2000);
          //  expect(relationshippage.isTextFieldpresentSource(loadedData.compliment)).toBe(true);
            globalpage.clickOnNavigationOrCloseButton('close');

     }); 
    
  });