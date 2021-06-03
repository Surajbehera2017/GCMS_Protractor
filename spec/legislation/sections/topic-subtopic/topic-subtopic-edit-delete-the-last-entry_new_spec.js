var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var topicSubtopicSection = require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

// test data support for various BU's
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber='GCMSQABANG-2427';
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
    //05 - Edit   - Delete the last entry
    it('Edit - Delete the last entry.'+jiraNumber, function () {

        expect(topicSubtopicSection.isExpanded()).toEqual(false);
        topicSubtopicSection.expandSection();
        expect(topicSubtopicSection.isExpanded()).toEqual(true);

        expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
        global.clickOnSectionButton("Topic-Subtopic", "Add");

        browser.waitForAngular();

        // topicSubtopicSection.clickAddmainpage();
        topicSubtopicSection.EnterValueinSearchTopiccode('2100');
        topicSubtopicSection.EnterValueinSearchSubTopiccode('2199');
        topicSubtopicSection.addMultipleTopicSubtopic(1);
        browser.sleep(4000);
        topicSubtopicSection.clickAddTopicSubtopicButton();
        global.clickOnNavigationOrCloseButton('ok');

        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

        global.clickOnSectionButton("Topic-Subtopic", "view");
        browser.waitForAngular();
        //expect(topicSubtopicSection.displayPrincipalButton()).toEqual(true);

        topicSubtopicSection.clickOnShowFilters();
        global.enterValueInShowFiltersField('tcode', "2100");
        global.enterValueInShowFiltersField('scode', "2199");
        expect(global.isElementDisplayed("//div[text()='Tributario (otras cuestiones)']")).toEqual(true);
        
        global.selectNoOfRows("All");
        topicSubtopicSection.clickDelete();

        global.clickOnNavigationOrCloseButton('ok');
        global.clickOnNavigationOrCloseButton('ok');
    });

});









