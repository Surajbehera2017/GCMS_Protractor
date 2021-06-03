var params = browser.params;
//i18n basic support
var I18n = require('../../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshipsearchpage = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var RelationshipSearch = require('../../../../../po/relationshipsearch.po.js');
//var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1 = 'GCMSQABANG-3458';
var jiraNumber2 = 'GCMSQABANG-3459';
var jiraNumber3 = 'GCMSQABANG-3460';
var jiraNumber4 = 'GCMSQABANG-3461';
var jiraNumber5 = 'GCMSQABANG-3462';
var jiraNumber6 = 'GCMSQABANG-3463';
var testData = require('../../../../../test-data/Jira_TestData/Relationship-search/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var relationSearch = new RelationshipSearch();

        relationSearch.get();
        relationshipsearchpage.urlLoad(params.valid_username, params.valid_password);

    });


    it(' Implement suggestion for consolidation current search fields - Jurisdiction - Exact search.' + jiraNumber1, function () {

        browser.waitForAngular();
        relationshipsearchpage.isRelationshipSearchPagePresent();
        var juris = relationshipsearchpage.isJurisdictionDropdownPresent();
        if (juris) {
            expect(juris).toEqual(true);
        }
        relationshipsearchpage.clickJurisDropdown();
        relationshipsearchpage.clickJurisOptionDropdown();
        relationshipsearchpage.clickClearAllButton();


    });

    it('Implement suggestion for consolidation current search fields - Jurisdiction - First search.' + jiraNumber2, function () {

        browser.waitForAngular();
        //relationshipsearchpage.clickClearAllButton();
        var juris = relationshipsearchpage.isJurisdictionDropdownPresent();
        if (juris) {
            expect(juris).toEqual(true);
        }
        relationshipsearchpage.sendJurisSearchWord(loaded.juris_word);
        var suggestion = relationshipsearchpage.isJurisSuggestionPresent();
        if (suggestion) {
            expect(suggestion).toEqual(true);
        }

    });

    it('Implement suggestion for consolidation current search fields - Jurisdiction - Second search.'+jiraNumber3, function () {

        browser.waitForAngular();
        //relationshipsearchpage.clickClearAllButton();
        var juris = relationshipsearchpage.isJurisdictionDropdownPresent();
        if (juris) {
            expect(juris).toEqual(true);
        }
        relationshipsearchpage.sendJurisSearchWordSecond(loaded.juris_second);
        var suggestion = relationshipsearchpage.isJurisSuggestionPresent();
        if (suggestion) {
            expect(suggestion).toEqual(true);
        }
    });

    it('Implement suggestion for consolidation current search fields - Jurisdiction - Enter key.'+jiraNumber4, function () {

        browser.waitForAngular();
        //relationshipsearchpage.clickClearAllButton();
        var juris = relationshipsearchpage.isJurisdictionDropdownPresent();
        if (juris) {
            expect(juris).toEqual(true);
        }

        relationshipsearchpage.sendJurisSearchWordThirdKey(loaded.juris_third);
        relationshipsearchpage.clickEstatalDropdownOption();
        browser.waitForAngular();
        browser.sleep(2000);
        var juristext = relationshipsearchpage.getTextofJurisEsta();
        expect(juristext).toEqual(loaded.juris_third);

    });

    it('Implement suggestion for consolidation current search fields - Jurisdiction - TAB key.'+jiraNumber5, function () {

        browser.waitForAngular();
        //relationshipsearchpage.clickClearAllButton();
        var juris = relationshipsearchpage.isJurisdictionDropdownPresent();
        if (juris) {
            expect(juris).toEqual(true);
        }

        relationshipsearchpage.sendJurisSearchWordThirdKey(loaded.juris_third);
        relationshipsearchpage.tabJurisDropdown();
        browser.waitForAngular();
        var juristext = relationshipsearchpage.getTextofJurisEsta();
        expect(juristext).toEqual(loaded.juris_third);


    });
    it(' Implement suggestion for consolidation current search fields - Jurisdiction - Alternative UF search.'+jiraNumber6, function () {

        browser.waitForAngular();
        //relationshipsearchpage.clickClearAllButton();
        var juris = relationshipsearchpage.isJurisdictionDropdownPresent();
        if (juris) {
            expect(juris).toEqual(true);
        }

        relationshipsearchpage.sendJurisSearchWordFourthKey(loaded.juris_fourth);
        relationshipsearchpage.clickEstatalDropdownOption();
        browser.waitForAngular();
        var juristext = relationshipsearchpage.getTextofJurisEsta();
        if(params.BU=='br'){
            expect(juristext).toEqual('Nacional');
        }
        else{
        expect(juristext).toEqual('Estatal');}


    });

});





