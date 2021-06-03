var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var topicSubtopicSection = require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

// test data support for various BU's
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2824';
var testData = require('../../../../test-data/Jira_TestData/Topic_Subtopic/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]


describe('topic-subtopic', function () {

    beforeEach(function () {


        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
        topicSubtopicSection.urlLoad(params.valid_username, params.valid_password);

    });

    //done
    //05 - Topic subtopic - select all
    it('Topic subtopic - select all.'+jiraNumber, function () {

        global.clickOnSectionButton("Topic-Subtopic", "view");
        browser.waitForAngular();
        //expect(topicSubtopicSection.displayPrincipalButton()).toEqual(true);

        global.selectNoOfRows("All");
        //added 2 times as the select all is not working for the first time
        global.selectNoOfRows("All");

        browser.sleep(4000);


        // topicSubtopicSection.clickViewAllLink();
        // expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
        // topicSubtopicSection.selectall();
        // topicSubtopicSection.clicknext();


    });
});
