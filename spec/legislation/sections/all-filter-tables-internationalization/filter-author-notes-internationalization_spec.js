var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var legisDocDisplayPageObjects = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LoginPage = require('../../../../po/login.po.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var loadedData = testData.legislation.sections;


describe('Internationalization-Language', function () {

    beforeEach(function () {
        
         browser.ignoreSynchronization = false;
         
         legisDocDisplayPageObjects.get(loadedData.allfiltersInternationalization.marginal_id_authornotes);
         browser.waitForAngular();
         authorNotes.urlLoad(params.valid_username, params.valid_password);
         browser.waitForAngular();
     
    });

    //01 Fiter Author Notes + Internationalization
    it('should verify internationalization of author notes Section table',function(){
         
        authorNotes.clickViewAllLink();
        authorNotes.clickshowFilter();
        authorNotes.EnterValueinAuthorNotesContextTermFeild(loadedData.author_notes.search_term);
        expect(authorNotes.getCountOfRows()).toEqual(0);
        authorNotes.clickCloseButton();
        legisDocDisplayPageObjects.selectLanguage();
        browser.waitForAngular();                    
        authorNotes.clickViewAllLink();
        expect(authorNotes.getAddButtonCaption()).toEqual(loadedData.author_notes.addbuttontext_authornotes);
        expect(authorNotes.getAllFiltersButtonCaption()).toEqual(loadedData.allfiltersInternationalization.filtersbuttontext);
        
    });
});

                   