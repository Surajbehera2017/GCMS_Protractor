var params = browser.params;
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var jiraNumber = 'GCMSQABANG-3095';
var testData = require('../../../../test-data/Jira_TestData/Publication-section/' + jiraNumber + '.js');
var loaded = testData[params.env][params.BU];

describe('Publication Section', function () {

	beforeEach(function () {
		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		publicationsection.urlLoad(params.valid_username, params.valid_password);

	});

	afterEach(function () {
		browser.getAllWindowHandles().then(function (handles) {
			browser.switchTo().window(handles[0]);
			for (var i = 1; i < handles.length; i++) {
				browser.switchTo().window(handles[i]).then(function () {
					browser.close();
				}, function (error) {
					browser.switchTo().window(handles[0]);
				});
			}
			browser.switchTo().window(handles[0]);
		});
	});
    
     //Publication Data

    it('should display all the publications and date series of a given marginal and order on page.'+jiraNumber, function () {
       
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.edit_button);
        browser.sleep(4000);
        publicationsection.clickOnElement(loaded.expandpublicationsection);
        browser.sleep(3000);
        
        expect(publicationsection.principal()).toEqual(loaded.principaltext);
       
		expect(publicationsection.datenumberseries()).toEqual(loaded.datenumbertext);
		console.log(params.BU)
		if(params.BU!="gulf"){
        expect(publicationsection.positionpage()).toContain(loaded.pagetext);
		}
		
        expect(publicationsection.haspublicationItem(loaded.publication_name)).toEqual(true);
		
        expect(publicationsection.hasdateseriesItem(loaded.publication_date)).toEqual(true);
       
    
        });
    
});

