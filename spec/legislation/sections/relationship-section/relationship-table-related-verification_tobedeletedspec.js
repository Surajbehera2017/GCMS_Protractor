var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

var spectestdata=testData.legislation.sections.relationShip.tableverificationrelated;





describe('Relationship', function () {

	beforeAll(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(spectestdata.marginalid);
      relationshippage.urlLoad();
        
	});
    
    	
  it('Spectale button  functionality  ', function () {
     
       browser.waitForAngular();
       browser.driver.manage().window().maximize();
       relationshippage.expandRelationshipTable();
        browser.waitForAngular();
        relationshippage.clickSpectaleButton();
       var spectalebutton  = relationshippage.isSpectalebuttonverified();
		expect(spectalebutton).toEqual(true);
      
      });
    
    

  
    

      
      });
    
           
      

    