var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2076';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship', function () {

  beforeAll(function () {

    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loaded.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);
    //browser.driver.manage().window().minimize();

  });

  it('add_duplicate_relationships.GCMSQABANG-2076', function () {

    // click on viewall link of relationship and  then click on add button in relationship table
    globalpage.clickOnSectionButton('Relationships', 'viewalllink');
    globalpage.clickOnbuttonInsideSectionTable('Add');

    //add mandatory fields in add Relationship popup and click on add button
    relationshippage.clickandSelect('type', loaded.rel_type);
    relationshippage.sendValueTo('Target', 'code', loaded.code_name);
    relationshippage.sendValueTo('Target', 'year', loaded.year);
    relationshippage.sendValueTo('Target', 'num', loaded.n_no);
    relationshippage.sendValueTo('Target', 'precu', loaded.unit);
    relationshippage.sendValueTo('Target', 'precp', loaded.part);
    relationshippage.clickOnRelPopUpButtons('Add');

    // get error info popup anf verify error message
    relationshippage.clickERRORInfoLink();
    var err_msg = relationshippage.verifyErrorInfoDialog();
    expect(err_msg).toBe('**- La relación está duplicada.');

  });
});
