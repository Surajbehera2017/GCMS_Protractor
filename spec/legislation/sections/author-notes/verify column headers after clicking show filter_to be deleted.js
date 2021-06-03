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
       legisDocDisplayPage.get(loadedData.author_notes.marginal_idaut1);
       browser.sleep(4000);
       authorNotes.urlLoad(params.valid_username,params.valid_password);
       browser.sleep(4000);
       browser.waitForAngular();
          
    });
    
    //Method: TC03 - Author Notes - Edit Author note - Edit type-Looking at Contex Index-Entorno
     it('Edit type-Looking at Contex Index-Entorno', function () {
         
         authorNotes.clickViewAllLink();
    	 browser.waitForAngular();	 
         
         browser.sleep(5000);
         authorNotes.clickshowFilter();
         browser.sleep(3000);
         expect(authorNotes.isNoteTypeDisplayed()).toEqual(true);
         expect(authorNotes.isContextIndexTypeDisplayed()).toEqual(true);
         expect(authorNotes.isNoteDisplayed()).toEqual(true);
         expect(authorNotes.isYesNoPropagationDisplayed()).toEqual(true);
            	 
     });     
});
    	 
    	 
     