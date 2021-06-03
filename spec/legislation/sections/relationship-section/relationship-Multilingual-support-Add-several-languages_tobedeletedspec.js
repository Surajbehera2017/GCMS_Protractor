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
        
      legisDocDisplayPage.get(testData.legislation.sections.relationship.Add_several_languages.marginal_id);
      relationshippage.urlLoad();
        
  });
  
  /*
  TC04 - Relationships - Multilingual support - Add several languages
*/
    
    it('Multilingual support - Add several languages', function(){
      
      browser.waitForAngular();
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      relationshippage.clickOnAddRelationship();
      relationshippage.clickOnPencilButton();
        relationshippage.selectfirstlanguagefromdropdownlist();
        relationshippage.selectsecondlanguagefromdropdownlist();
       browser.waitForAngular();
        relationshippage.clickOnXbuttonOfIdiomaspopup();
    });
});
