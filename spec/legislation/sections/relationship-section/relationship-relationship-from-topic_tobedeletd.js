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
        
      legisDocDisplayPage.get(testData.legislation.sections.relationShip.marginal_id1);
      relationshippage.urlLoad();
        
	});

	
  it('check with right data Relation in topic', function () {
     
      browser.waitForAngular();
      relationshippage.clickonViewAlllinkTopic();
      relationshippage.clickOnShowFilterTopic();
      relationshippage.enterdatainTopic();
      var tcode= relationshippage.verifyTopicfilter();
       if(tcode='2000')
            {
                expect(tcode).toEqual('2000');
            }
      relationshippage.clickOncloseFilter();
      
      
      
      
      });  
           
          
  it('check with wrong data Relation in topic', function () {
     
      browser.waitForAngular();
      relationshippage.clickonViewAlllinkTopic();
      relationshippage.clickOnShowFilterTopic();
      relationshippage.enterwrongdatainTopic();
      var result = relationshippage.relationshipTopicfilter();
      if(result='0')
            {
                expect(result).toEqual('0');
            } 
      
      relationshippage.clickOncloseFilter();
      
      });    
     


 


});
    