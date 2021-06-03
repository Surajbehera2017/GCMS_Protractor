
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var relationshipsearch = require('../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var jiraNumber = 'GCMSQABANG-2255';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];


describe('Relationship', function () {

        beforeEach(function () {

                browser.ignoreSynchronization = false;
                legisDocDisplayPage.get(loaded.marginal_id);
                relationshippage.urlLoad(params.valid_username, params.valid_password);

        });

        //TC21 - Search of relationships - run the search and go to the result list - Abreviatura + Mostrar incorporadas

        it('Search of relationships- Abreviatura + Mostrar incorporadas.' + jiraNumber, function () {

                browser.waitForAngular();
                browser.actions().mouseMove(element(by.css('.block.font-19.ng-binding'))).perform();
                relationshippage.clickOnBackButton();

                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                relationshippage.clickOnLinkInAvailableOptions(loaded.legislation);
                browser.sleep(1000);
                relationshippage.clickOnLinkInAvailableOptions(loaded.consolidation);
                browser.sleep(1000);
                relationshippage.clickOnLinkInAvailableOptions(loaded.consolidation_option);
                browser.sleep(2000);
                var ispagepresent = relationshipsearch.isRelationshipSearchPagePresent();
                expect(ispagepresent).toEqual(true);
                browser.sleep(3000);
                relationshipsearch.clickOnTheButton(loaded.clearform_button);
                browser.sleep(2000);
                relationshipsearch.clickOnDropdown(loaded.Section_name, loaded.field_name_1);
                browser.sleep(1000);
                relationshipsearch.enterDataAndSelectValue(loaded.Section_name, loaded.field_name_1, loaded.expecteddata_1);
                browser.sleep(1000);
                relationshipsearch.clickOnCheckbox(loaded.last_section, loaded.checkbox_1);
                browser.sleep(1000);
                relationshipsearch.clickOnCheckbox(loaded.last_section, loaded.checkbox_2);
                browser.sleep(1000);
                relationshipsearch.clickOnTheButton(loaded.search_button);
                browser.sleep(5000);
                var ismarpresent = globalpage.gettingTextofelement(loaded.marginal_xpath, '1845');
                expect(ismarpresent).toEqual(true);
                browser.sleep(2000);
                relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
                browser.sleep(1000);
                relationshipsearch.clickOnButtonInBreadcrumb(loaded.back_button);
                browser.sleep(1000);
                relationshippage.clickOnLinkInAvailableOptions(loaded.legislation);
                browser.sleep(1000);

        });

});