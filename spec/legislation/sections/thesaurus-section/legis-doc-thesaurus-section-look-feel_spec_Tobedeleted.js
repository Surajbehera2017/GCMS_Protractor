var params = browser.params;
//Test data
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');

var loaded=testData.legislation.sections.thesaurus;



describe('Thesaurus',function(){//('should verify Look & Feel Thesaurus Section', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username,params.valid_password); 

    });


    it('Should Check and Expand  Thesaurus section', function () {
       
        expect(thesauruspage.isExpanded()).toEqual(false);
        thesauruspage.expandSection();
        expect(thesauruspage.hasLink(loaded.thesaurusTerm1)).toEqual(true);
    });
    });


