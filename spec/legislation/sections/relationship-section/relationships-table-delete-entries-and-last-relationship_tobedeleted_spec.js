var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id11);
        relationshippage.urlLoad();
        
	});

	/*
     * TC01 - Relationships - Actions in Relationships table - Delete Many Entries -  Last relationship

     */

    it('Relationships - Actions in Relationships table - Delete Many Entries -  Last relationship', function () {
     
      browser.waitForAngular();
      var relation = relationshippage.isRalationshipViewAllPresent();
      expect(relation).toEqual(true);
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickShowFilters();
        
        var select = element(by.id('spread'));
        select.$('[value="N"]').click();
        
        browser.waitForAngular();
        relationshippage.clickBlankFieldinViewAllTableCell();
        relationshippage.clickonFirstCheckboxViewAll();
        
        var del = relationshippage.isDeletebuttonDisbaled();
        expect(del).toEqual(true);
        
        relationshippage.clickonFirstCheckboxViewAll();
        var delDisable = relationshippage.isDeletebuttonDisbaled();
        
     }); 
    
    //TC02 - Relationships - Actions in Relationships table - Delete Many Entries - Delete  Multiple

    it('Relationships - Actions in Relationships table - Delete Many Entries - Delete  Multiple', function () {
     
      browser.waitForAngular();
      var relation = relationshippage.isRalationshipViewAllPresent();
      expect(relation).toEqual(true);
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickShowFilters();
        
        var select = element(by.id('spread'));
        select.$('[value="N"]').click();
        
        browser.waitForAngular();
        relationshippage.clickBlankFieldinViewAllTableCell();
        relationshippage.clickonFirstCheckboxViewAll();
        relationshippage.clickonSecondCheckboxViewAll();
        relationshippage.clickonThirdCheckboxViewAll();
        relationshippage.clickonFourthCheckboxViewAll();
        relationshippage.clickonFifthCheckboxViewAll();
        relationshippage.clickonSixthCheckboxViewAll();
        
        var delBtn = relationshippage.isDeleteButtonPresent();
        expect(delBtn).toEqual(true);
        
        relationshippage.clickDeleteRelationShip();
        browser.waitForAngular();
        var pop = relationshippage.isDeletePopupDisplayed();
        expect(pop).toEqual(true);
        relationshippage.clickCancelButtonDeletePopup();
        
   });
    
   //TC04 - Relationships - Actions in Relationships table - Delete One Entry -  Last relationship

     it('Relationships - Actions in Relationships table - Delete One Entry -  Last relationship', function () {
     
      browser.waitForAngular();
      var relation = relationshippage.isRalationshipViewAllPresent();
      expect(relation).toEqual(true);
      relationshippage.expandRelationshipTable();
      browser.waitForAngular();
      relationshippage.clickShowFilters();
        
        var select = element(by.id('spread'));
        select.$('[value="N"]').click();
        
        browser.waitForAngular();
        relationshippage.clickBlankFieldinViewAllTableCell();
        relationshippage.clickonFirstCheckboxViewAll();
        relationshippage.clickDropdownViewAllTableFirst();
         var delDropdown = relationshippage.isDeleteOptionPresentDropdownViewAll();
         expect(delDropdown).toEqual(true);
         relationshippage.clickDeleteOptionPresentDropdownViewAll();
         browser.waitForAngular();
          var pop = relationshippage.isDeletePopupDisplayed();
        expect(pop).toEqual(true);
        relationshippage.clickCancelButtonDeletePopup();
         
       
        
     }); 
    
});