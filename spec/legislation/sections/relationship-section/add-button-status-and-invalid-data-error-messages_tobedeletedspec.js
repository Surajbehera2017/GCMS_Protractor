var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

var spectestdata=testData.legislation.sections.relationShip;





describe('Relationship', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(spectestdata.verifyerrormessages.marginalid);
        relationshippage.urlLoad();
        
	});
    
    	
 it('Add button status after openning popup ', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.clickAddRelationship();
       browser.waitForAngular();
       var addbuttonstatus  = relationshippage.isAddButtonEnaled();
       expect(addbuttonstatus).toEqual(false);
      
      });
    
    it('Add button status after entering relationshiptype only', function () {
        
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.clickAddRelationship();
       browser.waitForAngular();

       relationshippage.clickTypeFieldRelationshipPopup();
       relationshippage.sendKeystoTypeinRelationshipTab(spectestdata.verifyerrormessages.relationshiptype);
       relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
       browser.waitForAngular();
       var addbuttonstatus  = relationshippage.isAddButtonEnaled();
       expect(addbuttonstatus).toEqual(false);
      
      });

   
   it('Add button status after entering target document only ', function () {
       
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.clickAddRelationship();
       browser.waitForAngular();
      relationshippage.clickCodeDropdownTarget();
      relationshippage.sendKeystoCodeinRelationshipPopupTarget(spectestdata.verifyerrormessages.code);
      relationshippage.clickSearchBtnPartTextFieldTarget(); 
      relationshippage.sendKeysinYearFieldRelationshipPopupTarget(spectestdata.verifyerrormessages.year);
      relationshippage.sendKeystoNumberinRelationshipPopupTarget(spectestdata.verifyerrormessages.number);
       browser.waitForAngular();
       var addbuttonstatus  = relationshippage.isAddButtonEnaled();
       expect(addbuttonstatus).toEqual(false);
      
      });    
    
    
    it('Add button status after incomplete target document', function () {
       
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.clickAddRelationship();
       browser.waitForAngular();
       relationshippage.clickTypeFieldRelationshipPopup();
       relationshippage.sendKeystoTypeinRelationshipTab(spectestdata.verifyerrormessages.relationshiptype);
       relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
       browser.waitForAngular();
       relationshippage.clickCodeDropdownTarget();
       relationshippage.sendKeystoCodeinRelationshipPopupTarget(spectestdata.verifyerrormessages.code);
       relationshippage.clickSearchBtnPartTextFieldTarget(); 
       relationshippage.sendKeysinYearFieldRelationshipPopupTarget(spectestdata.verifyerrormessages.year);
       
       browser.waitForAngular();
       var addbuttonstatus  = relationshippage.isAddButtonEnaled();
       expect(addbuttonstatus).toEqual(false);
      
      });    
    
    it('Add button status after wrong target document', function () {
       
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.clickAddRelationship();
       browser.waitForAngular();
       relationshippage.clickTypeFieldRelationshipPopup();
       relationshippage.sendKeystoTypeinRelationshipTab(spectestdata.verifyerrormessages.relationshiptype);
       relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
       browser.waitForAngular();
       relationshippage.clickCodeDropdownTarget();
       relationshippage.sendKeystoCodeinRelationshipPopupTarget(spectestdata.verifyerrormessages.code);
       relationshippage.clickSearchBtnPartTextFieldTarget(); 
       relationshippage.sendKeysinYearFieldRelationshipPopupTarget(spectestdata.verifyerrormessages.year);
       relationshippage.sendKeystoNumberinRelationshipPopupTarget(spectestdata.verifyerrormessages.wrongnumer);
       browser.waitForAngular();
       relationshippage.clickAddonpopup();
       browser.waitForAngular();
        var errorpopup = relationshippage.iserrorpopupexist();
       expect(errorpopup).toEqual(true);
      
        
     });
    
    it('Add button status after wrong unit', function () {
       
       
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.clickAddRelationship();
       browser.waitForAngular();
        relationshippage.selectUnitDropdown();
        relationshippage.enterRelationType(spectestdata.verifyerrormessages.wrongunit, 4);
        relationshippage.sendKeystoUnitInRelationshipPopupTarget(spectestdata.verifyerrormessages.wrongunit);

        relationshippage.clickTypeFieldRelationshipPopup();
        relationshippage.sendKeystoTypeinRelationshipTab(spectestdata.verifyerrormessages.relationshiptype);
        relationshippage.clickSearchButtoninTypeFieldRelationshipTab();
        browser.waitForAngular();
        relationshippage.clickCodeDropdownTarget();
        relationshippage.sendKeystoCodeinRelationshipPopupTarget(spectestdata.verifyerrormessages.code);
        relationshippage.clickSearchBtnPartTextFieldTarget(); 
        relationshippage.sendKeysinYearFieldRelationshipPopupTarget(spectestdata.verifyerrormessages.year);
        relationshippage.sendKeystoNumberinRelationshipPopupTarget(spectestdata.verifyerrormessages.number);
        browser.waitForAngular();
        relationshippage.clickAddonpopup();
        browser.waitForAngular();
        var errorpopup = relationshippage.iserrorpopupexist();
       expect(errorpopup).toEqual(true);
     });     
      

 });   