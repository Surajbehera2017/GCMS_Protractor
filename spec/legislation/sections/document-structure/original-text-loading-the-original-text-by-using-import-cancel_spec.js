var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1586';
var tabName = I18n.documentstructure.documentstructuretabname;
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var originaltextpage = require('../../../../po/document/edition/legis/sections/original-text/original-text.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var path = require('path');
var uploadFolder = '../../../../test-data/' + params.env + '/upload-files/';
var pdfFileToUpload = params.BU + '.originaltextimportpdf.PDF';
var loadedData = testData[params.env][params.BU]



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
	 * GCMSQABANG-1586:03 - Cancel loading
	 */
	it('Original Text import pdf Cancel loading.'+ jiraNumber, function () {

		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		originaltextpage.importFilePDF(path.resolve(__dirname, uploadFolder+pdfFileToUpload));
		
		//Verify file is added for upload
		var fileSelected = originaltextpage.isFileAddedForUploadingOriginalText(pdfFileToUpload);
		expect(fileSelected).toEqual(true);
		
		//Click red (delete) button and verify the selected file is removed
		originaltextpage.clickRedDeleteButtonForUploadingItem(pdfFileToUpload);
		expect(originaltextpage.isFileAddedForUploadingOriginalText(pdfFileToUpload)).toEqual(false);
	});
	
});







