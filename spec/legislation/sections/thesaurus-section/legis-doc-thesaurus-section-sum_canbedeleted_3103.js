var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

// test data support for various Bu's
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var loaded=testdata.legislation.sections.thesaurus;

describe('Thesaurus',function(){//('should verify Add,import and viewAll is present in thesaurus thesauruspage or not ', function () {

    beforeEach(function () {



        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_idthes_1);
        thesauruspage.urlLoad(params.valid_username,params.valid_password); 

        
	});
     
   it('should check Import Button is Present or not', function () {
      
      expect(thesauruspage.isVisibleImportButton()).toEqual(true); 
      });  
   
      //01 - Modal - Thesaurus add

     it('should check Add Button is Present or not', function () {
      
      expect(thesauruspage.isVisibleAddButton()).toEqual(true); 
        
});
    it('should check whether ViewAllLink is Present or not', function () {
      
      expect(thesauruspage.isVisibleViewAllLink()).toEqual(true); 
        
});
   
    
    it('should check whether Thesaurus title is present or not', function () {
     
      expect(thesauruspage.isVisibleThesaurusSection()).toEqual(true); 
        
});
});