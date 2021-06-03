var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/qc_aut/arz/legis/topic-subtopic/action-in-topic-subtopic-section.js');
var topicSubtopicSection = require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2423';
var testData = require('../../../../test-data/Jira_TestData/Topic_Subtopic/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]


describe('topic-subtopic', function () {

    beforeEach(function () {


        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
        topicSubtopicSection.urlLoad(params.valid_username, params.valid_password);

    });

    //done GCMSQABANG-2423
    //01 - Edit   - Remove Principal

    it('Edit - Remove Principal.' + jiraNumber, function () {


        expect(topicSubtopicSection.isExpanded()).toEqual(false);
        topicSubtopicSection.expandSection();
        expect(topicSubtopicSection.isExpanded()).toEqual(true);

        expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
        global.clickOnSectionButton("Topic-Subtopic", "view");

        browser.waitForAngular();
        topicSubtopicSection.clickOnShowFilters();
        topicSubtopicSection.clickOnFilterAndSelectPrinciple("Yes")
        topicSubtopicSection.clickPrincipalButton();
        //expect(topicSubtopicSection.displayPrincipalButton(testData.topicSubtopicSection.removePrincipal)).toEqual(true);

        browser.waitForAngular();

        global.clickOnNavigationOrCloseButton('accept');

        browser.waitForAngular();
        expect(topicSubtopicSection.displayOkPrincipalButton()).toEqual(true);
        //topicSubtopicSection.clickOkPrincipalButton();
        global.clickOnNavigationOrCloseButton('ok');


    });

    it('Edit- Add Principal.' + jiraNumber, function () {

        expect(topicSubtopicSection.isExpanded()).toEqual(false);
        topicSubtopicSection.expandSection();
        expect(topicSubtopicSection.isExpanded()).toEqual(true);

        expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
        global.clickOnSectionButton("Topic-Subtopic", "view");

        browser.waitForAngular();
        topicSubtopicSection.clickOnShowFilters();

        topicSubtopicSection.clickOnFilterAndSelectPrinciple("No")
        topicSubtopicSection.clickPrincipalButton();

        browser.waitForAngular();

        global.clickOnNavigationOrCloseButton('accept');

        browser.waitForAngular();
        expect(topicSubtopicSection.displayOkPrincipalButton()).toEqual(true);
        global.clickOnNavigationOrCloseButton('ok');


    });

        



});



