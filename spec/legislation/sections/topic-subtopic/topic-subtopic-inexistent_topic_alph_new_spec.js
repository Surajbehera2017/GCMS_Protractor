var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var topicSubtopicSection = require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

// test data support for various BU's
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2536';
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
  //14 - Incorrect  format code
  it('Incorrect format code.'+jiraNumber, function () {

    expect(topicSubtopicSection.isExpanded()).toEqual(false);
    topicSubtopicSection.expandSection();
    expect(topicSubtopicSection.isExpanded()).toEqual(true);

    expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
    global.clickOnSectionButton("Topic-Subtopic", "Add");

    browser.waitForAngular();

    // topicSubtopicSection.clickAddmainpage();
    topicSubtopicSection.EnterValueinSearchTopiccode('abcd');

    browser.sleep(2000);
    expect(topicSubtopicSection.elementpresent()).toEqual(false);


  });
});
