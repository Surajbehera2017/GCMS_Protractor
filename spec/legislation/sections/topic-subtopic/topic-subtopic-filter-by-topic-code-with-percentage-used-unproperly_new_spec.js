var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var topicSubtopicSection = require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

// test data support for various BU's
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2298';
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
    //04 Filter by Topic Code-with percentage used unproperly.
    it('Filter by Topic Code-with percentage used unproperly.'+jiraNumber, function () {

        expect(topicSubtopicSection.isExpanded()).toEqual(false);
        topicSubtopicSection.expandSection();
        expect(topicSubtopicSection.isExpanded()).toEqual(true);

        expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
        global.clickOnSectionButton("Topic-Subtopic", "view");

        topicSubtopicSection.clickOnShowFilters();
        global.enterValueInShowFiltersField('tcode', "%200%");

         var x=global.isElementDisplayed(loadedData.Topic);
          expect(x).toEqual(true);
            browser.sleep(1000);
        

        if(params.BU == 'gulf'){
            global.enterValueInShowFiltersField('tcode', "%20010%");
            browser.sleep(2000);
            var x1=global.isElementDisplayed("//*[text()='Commer ']");
            expect(x1).toEqual(false);
            

        }else{
            global.enterValueInShowFiltersField('tcode', "%20010%");
            browser.sleep(2000);
           expect(global.isElementDisplayed("//*[text()='Actividades ']")).toEqual(false);

        }

    });
});




