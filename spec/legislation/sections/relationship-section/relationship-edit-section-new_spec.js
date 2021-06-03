var params = browser.params;
var jiraNumber ='GCMSQABANG-1897';

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
     * 02 - Edit Section
     */

    it('Edit Section.'+jiraNumber, function () {
     
      // search for  rel type in relationship table
      globalpage.clickOnSectionButton(loadedData.Relationships,loadedData.view);
      globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);
      browser.waitForAngular();
  
            relationshippage.filterbyRelType(loadedData.cita);
            relationshippage.filterbyConsolidation(loadedData.no);
            browser.waitForAngular();
            // click on edit action
          relationshippage.clickactionOnRelationshipTable(loadedData.edit);
          browser.waitForAngular();
          
          //change section of source
          browser.waitForAngular();
         
          relationshippage.clickandSelect(loadedData.unitlevel,loadedData.data_new);
      
      globalpage.clickOnButtonForGlobal(loadedData.save);
      expect(relationshippage.isModalPresent(loadedData.EditModal)).toBe(true);
      browser.sleep(3000);
   
   relationshippage.closeAddorEditRelationshipPopup();
   // verify if changes reflected in table or not
   expect(relationshippage.isTextFieldpresentSource(loadedData.data_new)).toBe(true);

        // change back to previous value
relationshippage.clickactionOnRelationshipTable(loadedData.edit);
relationshippage.clickandSelect(loadedData.unitlevel,loadedData.data_old);
globalpage.clickOnButtonForGlobal(loadedData.save);
relationshippage.closeAddorEditRelationshipPopup();
browser.waitForAngular();
globalpage.clickOnNavigationOrCloseButton('close');
        
     }); 
    
  });