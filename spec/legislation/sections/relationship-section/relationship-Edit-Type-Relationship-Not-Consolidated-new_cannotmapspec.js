var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var loadedata = testData.legislation.sections.relationShip;


describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedata.marginal_id10);
        relationshippage.urlLoad();
        
	});

	/*
     * Edit Type of Relationship - Not Consolidated
     */

    it('Edit Type of Relationship - Not Consolidated', function () {
     
      browser.waitForAngular();
      var relation = relationshippage.isRalationshipViewAllPresent();
      expect(relation).toEqual(true);
      var expand = relationshippage.isRelationshipCollapseButtonDisplayed();
      expect(expand).toEqual(true);
      relationshippage.clickRelationshipCollapseButtonDisplayed();
      browser.waitForAngular();
      relationshippage.clickConsolidationLinkRelationship();
      browser.waitForAngular();
      
      relationshippage.clearFiltersInRelationshipTable();  
      relationshippage.clickShowFilters();
      var select = element(by.id('spread'));
      select.$('[value="N"]').click();
      browser.waitForAngular();  
      relationshippage.sendKeysRelationShipFieldViewAll(loadedata.edit_relation.relation_text);
      browser.waitForAngular();
      relationshippage.clickBlankFieldinViewAllTableCell();
      relationshippage.clickonFirstCheckboxViewAll();
        relationshippage.clickDropdownViewAllTableFirst();
        var edit = relationshippage.isEditOptionPresentDropdownViewAllFirst();
        expect(edit).toEqual(true);
        relationshippage.clickEditOptionPresentDropdownViewAllFirst();
        browser.waitForAngular();
        
        var type = relationshippage.isTypeFieldPresentRelationshipPopup();
        expect(type).toEqual(true);
        relationshippage.clickTypeFieldRelationshipPopup();
        browser.sleep(4000);
        relationshippage.sendKeystoTypeinRelationshipTab(loadedata.edit_relation.text_type);
        browser.waitForAngular();
        relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
        browser.waitForAngular();
        relationshippage.clickCloseButtonEditRelationshipPopup();
        
      }); 
    
  });