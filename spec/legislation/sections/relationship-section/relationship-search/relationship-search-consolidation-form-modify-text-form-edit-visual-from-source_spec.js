var params = browser.params;
var relationshipsearch = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var LegislationDocumentDisplayPage = require('../../../../../po/document/display/legis/legis-doc-display.po.js');
var globalfunction = require('../../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3401';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        relationshipsearch.get();
        relationshipsearch.urlLoad(params.valid_username, params.valid_password);

    });


    //TC06 - Consolidation form - Modify text form - XML editor from source
    it('Consolidation form - Modify text form - XML editor from source.' +jiraNumber, function () {

        browser.sleep(2000);
        var ispagepresent = relationshipsearch.isRelationshipSearchPagePresent();
        expect(ispagepresent).toEqual(true);
        browser.sleep(1000);
        relationshipsearch.clickOnTheButton(loaded.clearform_button);
        browser.sleep(1000);
        relationshipsearch.clickOnDropdown(loaded.Section_name, loaded.field_name);
        browser.sleep(1000);
        relationshipsearch.enterDataAndSelectValue(loaded.Section_name, loaded.field_name, loaded.marginal_code);
        browser.sleep(1000);
        relationshipsearch.fillTheYearAndNumFields('from', loaded.field_year, loaded.field_num, loaded.marginal_year, loaded.marginal_num);
        browser.sleep(1000);
        relationshipsearch.clickOnTheButton(loaded.search_button);
        browser.sleep(1000);
        var table_header = relationshipsearch.isTableHeaderPresent();
        expect(table_header).toEqual(true);
        browser.sleep(2000);
        var resultedtable = relationshipsearch.isResultListTablePresent();
        expect(resultedtable).toEqual(true);
        relationshipsearch.clickOnIconsInActions(loaded.consolidation_icon);
        browser.sleep(5000);
        browser.pause();
        globalfunction.clickOnButtonForGlobal(loaded.accept_button);
        browser.sleep(1000);
        relationshipsearch.clickonEditVisualOrXML(loaded.source_section,loaded.editvisual_button);
        browser.sleep(1000);
        globalfunction.clickOnButtonForGlobal(loaded.cancel_button);
        browser.sleep(2000);

    });
});







