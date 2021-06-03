var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');


describe('Fix section', function () {
    
       beforeEach(function () {
       browser.ignoreSynchronization = false;      
       LegislationDocumentDisplayPage.get(testData.legislation.sections.fix_section_and_general.marginal_id);
       browser.waitForAngular();
       LegislationDocumentDisplayPage.urlLoad(params.valid_username, params.valid_password);
       browser.sleep(5000);
       browser.waitForAngular();
    });

    
   //this block of code will verify the lock,unlock ,click's on ko and accpect buttons
    it('it should block unblock Operation carried out successfully and it should close the popup',function(){
     
        //check two padlock icons.Check the default is unlock
        expect(LegislationDocumentDisplayPage.hasunlockpad()).toEqual(true);
        expect(LegislationDocumentDisplayPage.haslockpad()).toEqual(true);
        expect(LegislationDocumentDisplayPage.hasblockandunlockstaus()).toEqual(true);
          //click on the toggle
        LegislationDocumentDisplayPage.clickcontentToggleBlock();
        expect(LegislationDocumentDisplayPage.haspopupColseButton()).toBe(true);
        expect(LegislationDocumentDisplayPage.haspopupOkButton()).toBe(true);
        LegislationDocumentDisplayPage.clickpopupOkButton();
        expect(LegislationDocumentDisplayPage.hasAcceptOkButton()).toBe(true);
        LegislationDocumentDisplayPage.clickacceptOkButton();
        expect(LegislationDocumentDisplayPage.hasAcceptOkButton()).toBe(false);
        expect(LegislationDocumentDisplayPage.title()).toEqual(I18n.legisDocDisplay.title);
        
         
    });

    
});

