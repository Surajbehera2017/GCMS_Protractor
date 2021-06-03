var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
// test data support for various BU's
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var loadDoc = testdata.legislation.sections.thesaurus;


describe('Thesaurus',function(){//('Thesaurus-section-activate delete button', function () {

    beforeAll(function () {
		
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadDoc.marginal_idthes_1);
		thesauruspage.urlLoad(params.valid_username,params.valid_password);
		
	});
    
    //already done
    //07 - Import from summarization button - Target marginal without entries

    it('should click on import button and cancel the import button after that it comes to document dispaly page',function(){

      
           thesauruspage.clickImportButton();
			 expect(thesauruspage.isDisplayImportButton()).toEqual(true);
                 
		            expect(thesauruspage.isVisibleImportCancelButton()).toEqual(true);
		              thesauruspage.clickImportCancelButton();
			            //expect(thesauruspage.isDisplayImportCancelButton).toEqual(false);
                  });
	            });
           