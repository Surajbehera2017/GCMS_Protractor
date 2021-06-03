var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
describe('Relationship', function () {

	beforeAll(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        
      legisDocDisplayPage.get(testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.marginal_id);
      relationshippage.urlLoad(params.valid_username,params.valid_password);
        
	});

  it('add_duplicate_and_empty_relationships', function () {
       var x= [1,4,7,9,10,34];
       var y= x.filter((value ,index ,array)=>  value>5);
        console.log(y);
        console.log(x);
     var z=    x.map((value ,index ,array)=>value<9?0:1);

      console.log(z);
      console.log(x);
      console.log(x.slice(2,5));




       



      
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      globalpage.clickOnSectionButton('Relationships' ,'viewalllink');
      browser.waitForAngular();
     // globalpage.clickActioninTable();
      globalpage.clickOnbuttonInsideSectionTable('Add');
      // relationshippage.clickandSelect('type','cita')
      

      // relationshippage.clickandSelect('depth','discutida')
      //relationshippage.clickandSelect('unitLevel','')
      
       // relationshippage.addRelationType();
      //  browser.sleep(2000);
      //  relationshippage.enterRelationType(testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.rel_type);
      
       browser.sleep(2000);
          //     relationshippage.addTextsInCombo(9,testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.code_name);
      // relationshippage.addYearNo(1,testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.year);
      // relationshippage.addN_No(1,testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.n_no);
      // relationshippage.addTextsInCombo(10,testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.unit);
      // relationshippage.addTextsInCombo(11,testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.part);
      // relationshippage.clickAddonpopup();
      // relationshippage.clickERRORInfoLink();
      // var err_msg=relationshippage.verifyErrorInfoDialog();
      // expect(err_msg).toEqual(testData.legislation.sections.relationShip.add_duplicate_and_wrong_relationships.err);
      // relationshippage.errorInfoOKButton();
      // relationshippage.clearAllFields(2);
     // var req=relationshippage.getAttributeValueOfElement('model[property]',10,'ng-required');
      //expect(req).toBe('isRequired');
  });
 });    
     