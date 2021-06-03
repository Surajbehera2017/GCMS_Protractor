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
        
      legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id2);
      relationshippage.urlLoad();
        
	});
    
    	//03-Add a relationship duplicate
  xit('Copy Duplicate with Structure GCMSQABANG-2076', function () {
     
      browser.waitForAngular();
       browser.driver.manage().window().maximize();
      relationshippage.expandRelationshipTable();
      relationshippage.selectFirstcheckbox1();
      relationshippage.clickExpanEDitCopyPaste();
      relationshippage.clickCopyRelationship();
      browser.waitForAngular();
      relationshippage.clickexpandPopup();
      relationshippage.enterStructurePopup();
      relationshippage.clickAddonpopup();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      browser.waitForAngular();
      relationshippage.selectcheckbox3();
      relationshippage.clickDeleteRelationShip();
      relationshippage.clickOkpopup();
      browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      });
    
    
    xit('Copy Duplicate Error', function () {
     
      browser.waitForAngular();
       browser.driver.manage().window().maximize();
      relationshippage.expandRelationshipTable();
      relationshippage.selectFirstcheckbox1();
      relationshippage.clickExpanEDitCopyPaste();
      relationshippage.clickCopyRelationship();
      browser.waitForAngular();
      relationshippage.clickAddonpopup();
      browser.waitForAngular();
      relationshippage.isPopupDisplayed();
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        browser.waitForAngular();
       relationshippage.closeRelationshipFilter();
       browser.waitForAngular();
      });  
           
      
});
    