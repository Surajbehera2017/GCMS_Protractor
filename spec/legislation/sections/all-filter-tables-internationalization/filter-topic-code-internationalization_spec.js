var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var legisDocDisplayPageObjects = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LoginPage = require('../../../../po/login.po.js');
var topicSubtopicSection =require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');
var loadedData = testData.legislation.sections;

describe('Internationalization-Language', function () {
    
    beforeEach(function () {
        
        browser.ignoreSynchronization = false;
        legisDocDisplayPageObjects.get(loadedData.allfiltersInternationalization.marginal_id_relationship);
        browser.waitForAngular();
        topicSubtopicSection.urlLoad(params.valid_username, params.valid_password);
        browser.waitForAngular();
     
    });


    //Filter by Topic Code-Internationalization
    it('should verify internationalization of topic table',function(){
        
		topicSubtopicSection.clickViewAllLink();
        topicSubtopicSection.clickshowFilter();
        topicSubtopicSection.EnterValueinTopiccodeFeild(testData.legislation.sections.topic_subtopic.searchterm_invalid);
        expect(topicSubtopicSection.getCountOfRows()).toEqual(0);
        topicSubtopicSection.clickCloseButton();
        legisDocDisplayPageObjects.selectLanguage();
        topicSubtopicSection.clickViewAllLink();
        browser.waitForAngular();
        expect(topicSubtopicSection.getAddButtonCaption()).toEqual(testData.legislation.sections.allfiltersInternationalization.addbuttontext);
        expect(topicSubtopicSection.getImportButtonCaption()).toEqual(testData.legislation.sections.allfiltersInternationalization.importbuttontext);
        expect(topicSubtopicSection.getAllFiltersButtonCaption()).toEqual(testData.legislation.sections.allfiltersInternationalization.filtersbuttontext);
        });
});