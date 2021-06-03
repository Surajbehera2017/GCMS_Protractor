var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var topicSubtopicSection = require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

// test data support for various BU's
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2533';
var testData = require('../../../../test-data/Jira_TestData/Topic_Subtopic/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU]


describe('topic-subtopic', function () {

  beforeEach(function () {

    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();
    legisDocDisplayPage.get(loadedData.marginal_id);
    topicSubtopicSection.urlLoad(params.valid_username, params.valid_password);

  });

  //Doubt no error message is thrownwhen typing a wrong topic id
  //13 - Inexistent  code - Subtopic
  it('Inexistent code - Subtopic.'+jiraNumber, function () {

    expect(topicSubtopicSection.isExpanded()).toEqual(false);
    topicSubtopicSection.expandSection();
    expect(topicSubtopicSection.isExpanded()).toEqual(true);

    expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
    global.clickOnSectionButton("Topic-Subtopic", "Add");

    browser.waitForAngular();

    // topicSubtopicSection.clickAddmainpage();
    topicSubtopicSection.EnterValueinSearchTopiccode('9999');

    browser.sleep(4000);
    expect(topicSubtopicSection.elementpresent()).toEqual(false);

    // topicSubtopicSection.clickAddmainpage();
    // topicSubtopicSection.EnterValueinSearchTopiccode('1500');
    // topicSubtopicSection.EnterValueinSearchSubTopiccode('9999');
    // expect(topicSubtopicSection.geterrormessage()).toEqual('No subtopic found');

  });
});
