var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var topicSubtopicSection =require('../../../../po/document/display/legis/sections/topic-subtopic/topic-subtopic.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
// test data support for various BU's
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var loaded =testdata.legislation.sections.topic_subtopic;

describe('topic-subtopic', function () {

    beforeEach(function () {



        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id_top_8);
        topicSubtopicSection.urlLoad(params.valid_username,params.valid_password); 
            
});
	
    //doubt//Blocked as accept Care is not working
    //02 - Accept CaRE - automatic suggestions pending in page - one row - profile Analyst
	it('Accept CaRE on one row with the profile Analyst', function () {
        
  
        expect(topicSubtopicSection.isExpanded()).toEqual(false);
        topicSubtopicSection.expandSection();
        expect(topicSubtopicSection.isExpanded()).toEqual(true);

		topicSubtopicSection.clickViewAllLink();
		expect(topicSubtopicSection.displayViewAllLink()).toEqual(true);
		           
        topicSubtopicSection.clickFirstCheckBox();
        topicSubtopicSection.clickAcceptCare();
        globalpage.clickOnButtonForGlobal('yes');
        //topicSubtopicSection.clickOkButton();
        //topicSubtopicSection.clickOkButton();
        expect(topicSubtopicSection.getAnalystName()).toEqual(loaded.analystname);
       });
     
  });
