var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

describe('Relationship', function () {

	beforeAll(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
      legisDocDisplayPage.get(testData.legislation.sections.relationShip.add_wrong_relationships.marginal_id);
      relationshippage.urlLoad();
        
	});

    /*
      The add button is disabled. The error message will only display upon the add button is clicked. 
Test script is automated to check for the Unit box being marked with red and add button being disabled
    */
  it('add_wrong_relationships', function () {
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickAddButtonOnTop();
      relationshippage.addRelationType(7);
      relationshippage.enterRelationType(testData.legislation.sections.relationShip.add_wrong_relationships.rel_type,9);
      relationshippage.addTextsInCombo(10,testData.legislation.sections.relationShip.add_wrong_relationships.code_name);
      relationshippage.addYearNo(1,testData.legislation.sections.relationShip.add_wrong_relationships.year);
      relationshippage.addN_No(1,testData.legislation.sections.relationShip.add_wrong_relationships.n_no);
      var req=relationshippage.getAttributeValueOfElement('model[property]',11,'ng-required');
      expect(req).toBe('isRequired');
  });
 });    
     