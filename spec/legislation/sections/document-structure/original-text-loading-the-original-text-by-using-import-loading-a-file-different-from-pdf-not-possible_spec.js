var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1589';
var tabName = I18n.documentstructure.documentstructuretabname;
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var originaltextpage = require('../../../../po/document/edition/legis/sections/original-text/original-text.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var path = require('path');
var uploadFolder = '../../../../test-data/' + params.env + '/upload-files/';
var loadedData = testData[params.env][params.BU]
var docFileToUpload = params.BU + '.originaltextimportword.doc';



describe('Document-structure', function () {

	beforeAll(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();

		legisDocDisplayPage.get(loadedData.marginal_id);
		originaltextpage.urlLoad(params.valid_username,params.valid_password);

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
	 * GCMSQABANG-1589:07 - Loading a file different from PDF - not possible
	 */
	it('Original Text import pdf Loading a file different from PDF not possible.'+jiraNumber, function () {

		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		originaltextpage.importFilePDF(path.resolve(__dirname, uploadFolder+docFileToUpload));
		
		//Verify file is not added for upload
		expect(originaltextpage.isFileAddedForUploadingOriginalText(docFileToUpload)).toEqual(false);
	});
	
});







