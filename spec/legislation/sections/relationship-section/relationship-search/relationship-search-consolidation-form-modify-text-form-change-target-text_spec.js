var params = browser.params;
var relationshipsearch = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var LegislationDocumentDisplayPage = require('../../../../../po/document/display/legis/legis-doc-display.po.js');
var globalfunction = require('../../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-3398';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        relationshipsearch.get();
        relationshipsearch.urlLoad(params.valid_username, params.valid_password);

    });

    //TC03 - Consolidation form - Modify text form - Change target text
    it('Consolidation form - Modify text form - Change target text.' + jiraNumber, function () {

        browser.sleep(2000);
        var ispagepresent = relationshipsearch.isRelationshipSearchPagePresent();
        expect(ispagepresent).toEqual(true);
        browser.sleep(1000);
        relationshipsearch.clickOnTheButton(loaded.clearform_button);
        browser.sleep(1000);
        relationshipsearch.clickOnDropdown(loaded.Section_name,loaded.field_name);
        browser.sleep(1000);
        relationshipsearch.enterDataAndSelectValue(loaded.Section_name,loaded.field_name,loaded.marginal_code);
        browser.sleep(1000);
        relationshipsearch.fillTheYearAndNumFields('from',loaded.field_year,loaded.field_num,loaded.marginal_year,loaded.marginal_num);
        browser.sleep(1000);
        relationshipsearch.clickOnTheButton(loaded.search_button);
        browser.sleep(1000);
        var table_header=relationshipsearch.isTableHeaderPresent();
        expect(table_header).toEqual(true);
        browser.sleep(2000);
        var resultedtable=relationshipsearch.isResultListTablePresent();
        expect(resultedtable).toEqual(true);
        relationshipsearch.clickOnIconsInActions(loaded.consolidation_icon);
        browser.sleep(5000);
        var isUnitPresentInconsolidation = relationshipsearch.isUnitPresentInConsolidationTextTarget(loaded.unit_id);
        expect(isUnitPresentInconsolidation).toEqual(true);
        relationshipsearch.clickOnXbuttonInTargetSection(loaded.unit_id);
        browser.sleep(4000);
        relationshipsearch.clickonRefreshIcon();
        browser.sleep(9000);
        var isUnitPresentInConsolidationModify = relationshipsearch.isUnitPresentInConsolidationTextTarget(loaded.unit_id);
        expect(isUnitPresentInConsolidationModify).toEqual(false);


        // browser.sleep(2000);
        // var textpresent=relationshipsearch.isUnitPresentInText(loaded.unit_id);
        // expect(textpresent).toEqual(true);
        // browser.sleep(2000);
        // relationshipsearch.clickOnXbuttonInTheField(loaded.target_section,loaded.unit);
        // browser.sleep(4000);
        // relationshipsearch.clickonRefreshIcon();
        // browser.sleep(1000);
        // var textnotpresent=relationshipsearch.isUnitPresentInText(loaded.unit_id);
        // expect(textnotpresent).toEqual(false);
        // globalfunction.clickOnButtonForGlobal(loaded.cancel_button);
        // browser.sleep(2000);


    });
});







