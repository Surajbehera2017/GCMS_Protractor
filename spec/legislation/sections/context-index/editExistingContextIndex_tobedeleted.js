var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var contextIndexSection = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');

var loadedData = testData.legislation.sections.context_index;

describe('Context Index', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		contextIndexSection.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
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

	//03 - Edit entry - change Term
	//DUPLICATE
	it('Edit the entry of context index table', function () {
		browser.waitForAngular();
		contextIndexSection.ContextIndexTotal().then(function(totalCount){
			contextIndexSection.clickViewAllLink();
			browser.waitForAngular();
			contextIndexSection.clickEditButton();
			browser.waitForAngular();
			browser.getAllWindowHandles().then(function(handles) {
				browser.switchTo().window(handles[1]).then(function () {
				contextIndexSection.clickContextindexHierarchyEditItem();
				//contextIndexSection.clickSubContextindexHierarchyEditItem();
							
				contextIndexSection.isRadioButtonTermDisplayed().then(function(isRadioDisplayed)
				{
					if(isRadioDisplayed === true)
					{
						contextIndexSection.clickRadioButtonTerm();
					}
				});
				
					browser.waitForAngular();
					browser.sleep(2000);
					contextIndexSection.clicksaveButton();
					//Handle popup
					contextIndexSection.isPresentOKPopup().then(function(present){
						if(present === true){
							contextIndexSection.clickOKPopup();
							////browser.close();
							browser.driver.close();
						}
					});
					expect(contextIndexSection.isSaveButtonDisplayed()).toEqual(false);
					browser.switchTo().window(handles[0]); 
				});

			});	
		});

	});

});