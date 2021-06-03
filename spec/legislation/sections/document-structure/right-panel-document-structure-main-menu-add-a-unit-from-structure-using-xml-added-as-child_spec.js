var params = browser.params;
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var path = require('path');
var uploadFolder = '../../../../test-data/' + params.env + '/upload-files/';
var unitXmlFileToUpload = params.BU+'.LAN_2015.101_spa_child.xml';
var jiraNumber='GCMSQABANG-1593';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		rightpanelpage.urlLoad(params.valid_username,params.valid_password);

	});

	afterEach(function () {//Close additional tab
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



	/*
	 *GCMSQABANG-1593: TC02 -Right Panel - Document Structure - Main Menu - Add a Unit from Structure using XML - Added as child
	 */
	it('Structure Actions Add Unit XML Added as Child.'+jiraNumber, function () {

		
		browser.waitForAngular();
        var structure = rightpanelpage.isDocumentStructureTabDisplayedInRightPanel();
        expect(structure).toEqual(true);
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
		browser.sleep(2000);
		rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expectedAction);
		browser.waitForAngular();

        
		// upload file and verify if file is uploaded or not
		rightpanelpage.browseXMLFile(path.resolve(__dirname, uploadFolder + unitXmlFileToUpload));
		browser.sleep(1000);
		expect(rightpanelpage.isFileAddedForUploadingXMLFile(unitXmlFileToUpload)).toEqual(true);
		browser.sleep(1000);

		//click on import button
		rightpanelpage.clickOnButtonForGlobal(loaded.import); 
	
	});
	
});







