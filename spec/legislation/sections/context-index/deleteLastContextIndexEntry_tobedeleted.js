var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');


describe('Context Index', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();        
        legisDocDisplayPage.get(testData.legislation.sections.context_index.marginal_idcont1);
        contextindexpage.urlLoad(params.valid_username, params.valid_password);
        
	});

	//03 - Delete an entry -  not the last one in a Context Index
  it('Delete an entry -  not the last one in a Context Index', function () {
     
      browser.waitForAngular();
      contextindexpage.isViewAllLinkVisible();
      contextindexpage.clickViewAllLink();
      browser.waitForAngular();
      contextindexpage.clickBlankField();
      browser.waitForAngular();
      contextindexpage.clickTableCheckBoxFirst();
      contextindexpage.clickDeleteButtonViewAll();
      browser.waitForAngular();
      contextindexpage.clickDeletePopupYes();
      browser.waitForAngular();
      contextindexpage.closeViewAll();
      browser.waitForAngular();
       
     });
    
     //05 - Delete the only  entry in a type of context index - there are two types
    it('Delete the only  entry in a type of context index - there are two types', function (done) {
     
      browser.waitForAngular();
      contextindexpage.expandContextIndex();
      browser.waitForAngular();
      contextindexpage.clickByTypeLinkToExpand(0);
      browser.waitForAngular();
      contextindexpage.clickBlankField();
      browser.waitForAngular();
      contextindexpage.clickTableCheckBoxFirst();
      browser.waitForAngular();
      contextindexpage.clickDeleteButtonViewAllTop();
      browser.waitForAngular();
      contextindexpage.clickDeletePopupYes();
      browser.waitForAngular();
      contextindexpage.closeViewAll();
      contextindexpage.collapseContextIndex();
      browser.waitForAngular();
      done();
       
     });
    
   /* it('Delete the last entry', function () {
     
      browser.waitForAngular();
      contextindexpage.isViewAllLinkVisible();
      contextindexpage.clickViewAllLink();
      // Kept on hold
       
     });  */
});
    
    
    
    
    

    
