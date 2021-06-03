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

    legisDocDisplayPage.get(testData.legislation.sections.relationship.Languages_dropdown.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);
    browser.driver.manage().window().maximize();

  });

  //TC02 - Relationships - Multilingual support - Languages dropdown

  it('Multilingual support - Languages dropdown', function () {

    browser.waitForAngular();
    browser.driver.manage().window().maximize();
    browser.waitForAngular();
    relationshippage.clickOnAddRelationship();

    relationshippage.clickOnPencilButton();
    relationshippage.clickondropdownlist();

    for (var i = 0; i <= 24; i++) {
      var languagedisplayed = relationshippage.isLanuagedisplayonebyone(i);
      expect(languagedisplayed).toContain(testData.legislation.sections.relationship.Languages_dropdown.text[i]);
    }
    /*     browser.waitForAngular();
    givenData =testData.legislation.sections.relationship.Languages_dropdown.text;
   givenData =  givenData.toString();
    var result= relationshippage.isLanuagelistdisplayed();
     browser.waitForAngular();
   expect((result).toString()).toEqual(givenData);
    /*var  trimArray =[];
   
    console.log("Result" + result);
  /*  for(var i =0 ;i < result.length;i++){
         trimArray[i]=result[i].trim();
        console.log(result[i]);
    }; 
    var givenData=[];
    
    console.log("GivenData" +  givenData);
    
      /* for(var i =0 ;i < givenData.length;i++){
         if(trimArray[i]==givenData[i])
 
    };*/



  });
});
