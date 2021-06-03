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
        
      legisDocDisplayPage.get(testData.legislation.sections.context_index.marginal_idcont12);
      contextindexpage.urlLoad(params.valid_username, params.valid_password);
        
	});

  afterEach(function(){//Close additional tab
		
		browser.getAllWindowHandles().then(function(handles) {
			browser.switchTo().window(handles[0]);
			for(var i=1;i<handles.length;i++){
				browser.switchTo().window(handles[i]).then(function () {
					//browser.close();
					browser.driver.close();
				},function(error){
					browser.switchTo().window(handles[0]);
				});
			}
		});
	});
  
  //02 - Edit entry - change unit
  it('edit entry change', function () {
     
      browser.waitForAngular();
      contextindexpage.isViewAllLinkVisible();
      contextindexpage.clickViewAllLink();
      contextindexpage.clickBlankField();
      contextindexpage.clickTableCheckBoxFirst();
      contextindexpage.clickEditButton();
      
      
        browser.waitForAngular();
        browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle = handles[1];
        browser.switchTo().window(newTabHandle).then(function () {
            
        browser.waitForAngular();
        contextindexpage.clickDeleteOldUnit();
        contextindexpage.clickonUnitDropdown();
        contextindexpage.sendNewUnitContextIndexA5();
        contextindexpage.clickSearchUnit();
        contextindexpage.clickAddUnit1();
        
        contextindexpage.clickSaveButton();
        contextindexpage.clickOKPopup();
        contextindexpage.clickCancelButtonEdit();
        
        });
        browser.switchTo().window(handles[0]);
        browser.waitForAngular();
        contextindexpage.closeViewAll();
        contextindexpage.clickViewAllLink();
        contextindexpage.clickShowFilters();
        contextindexpage.sendUnitViewTable();
        contextindexpage.enterUnitName();
        contextindexpage.clickBlankField();
        contextindexpage.clickTableCheckBoxFirst();
        contextindexpage.clickLensButton();
        });
      
      
    });
 
});
    
    
    
    
    

    
