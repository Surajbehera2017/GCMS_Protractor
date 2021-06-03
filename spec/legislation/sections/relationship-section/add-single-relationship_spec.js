var params = browser.params;
var jiraNumber = 'GCMSQABANG-1870';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

describe('Relationship', function () {
  beforeAll(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });

  //will not work for QC
  it('add single relationship from section.' + jiraNumber, function () {

    // get count of Relationship before adding new one
    var Rel_count = relationshippage.getNumberofRelationship();

    console.log(Rel_count);
    var no = Number(Rel_count);

    // click on add button on relationship section 
    globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.AddButton);


    //Verify type 
    relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type);

    //Enter mandatory fields in target
    relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.CodeField, loadedData.code);
    relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.YearField, loadedData.year);
    relationshippage.sendValueTo(loadedData.TargetPanel, loadedData.NumberField, loadedData.number);

    //Click Add 
    relationshippage.clickOnRelPopUpButtons(loadedData.AddButton);

    //close add relationship window

    relationshippage.closeAddorEditRelationshipPopup();


    //close relationship table

    globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);


    // get count of Relationship before adding new one
    var Rel_count_updated = relationshippage.getNumberofRelationship();

    var no1 = Number(Rel_count_updated);
    // verify if count increased by one or not after adding number
    expect(no1).toEqual(no + 1);


    //click on view all link and then select newly added  relation in relationship table
    globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);
    browser.sleep(3000);
    
    globalpage.clickOnbuttonInsideSectionTable('Show Filters');
    browser.sleep(1000);
    relationshippage.filterbyRelType(loadedData.relation_type);
    
    browser.sleep(1000);
    globalpage.selectNoOfRows(loadedData.one);
    browser.sleep(1000);
    authorNotes.clickOnbuttonInsideSectionTable(loadedData.deleteButton);
    browser.sleep(1000);
    authorNotes.clickOnButtonForGlobal(loadedData.yesButton);
    browser.sleep(1000);

  });


});
