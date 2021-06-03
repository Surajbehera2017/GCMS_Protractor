
var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber ='GCMSQABANG-2232';
var jiraNumber1 ='GCMSQABANG-2231';
var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber1 + '.js');
var loadedData=testData[params.env][params.BU];
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


    describe('Relationship', function () {
        beforeEach(function () {
    
            var legisDocDisplayPage = new LegislationDocumentDisplayPage();
            legisDocDisplayPage.get(loadedData.marginal_id);
            
            relationshippage.urlLoad(params.valid_username,params.valid_password);
            browser.driver.manage().window().maximize();
    
        });

       /* afterEach(function(){
   
            for(var i=0;i<3;i++){
               relationshippage.clickOnIcon('collector','deleteRela');}

             });*\
          
              /*
               * TC06 - Relationships - Support relationship range creation - Multiple selection 
               * of units - Relationship creation - Range of units from target layer
               */
	it('Relationships - Support relationship range creation - Multiple selection of units - Target layer.'+jiraNumber, function () {
      
         //click on add relationship button and then click on source structure	
 		 globalpage.clickOnSectionButton('Relationships','Add');
        
        // add relationship type 
        relationshippage.clickandSelect('type',loadedData.relation_type);

        // add document marginal id
        relationshippage.sendValueTo('Target','code',loadedData.code);
        relationshippage.sendValueTo('Target','year',loadedData.year);
        relationshippage.sendValueTo('Target','num',loadedData.number);

        // verify if source structure is opened or not 
        relationshippage.clickOnIcon('Target','openStructure');
       expect(relationshippage.isModalPresent('Document Structure')).toEqual(true);

       //add multiple structure from target doc
       relationshippage.clickMultipleCheckBoxDocumentStructure();
       globalpage.clickOnButtonForGlobal('Ok');

       // verify if selected checkbox values are displayed or not
       expect(relationshippage.isMultipleTagsPresent()).toBe(true);
        
        relationshippage.clickOnRelPopUpButtons('Add');
        
        // verify if relationship added to collector or not
       expect(relationshippage.isRelationshipAddedInCollector()).toBe(true);

       //delete the relationships 
       for(var i=0;i<3;i++){
        relationshippage.clickOnIcon('collector','deleteRela');
       }
        
       
	
        
       
		
	});

});












	

        
		





	


	








