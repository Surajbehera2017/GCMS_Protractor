//var videoRetriever = require('../../../../utils/video-retriever.js');
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// test data support for various BU's
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var loadedData = testdata.legislation.sections;


describe('Author Notes', function () {
 
    beforeEach(function () {
   
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.author_notes.marginal_id_copy);
        browser.sleep(4000);
        authorNotes.urlLoad(params.valid_username,params.valid_password);
        browser.sleep(4000);
        browser.waitForAngular();
       
    });
    

    it('should verify the filter in author note table', function () {

		
        authorNotes.clickViewAllLink();
        browser.sleep(5000);
        authorNotes.clickshowFilter();
        browser.sleep(3000);
		authorNotes.enterContextindexType(loadedData.author_notes.ContextIndexType);
		authorNotes.enterAuthornoteType(loadedData.author_notes.NoteType);
        authorNotes.enterAuthorUnit(loadedData.author_notes.AuthorUnit);
        browser.sleep(6000);
        authorNotes.clickcloseTable();
		
    });
    
});
