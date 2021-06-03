
var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1587';
var tabName = I18n.documentstructure.documentstructuretabname;
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var originaltextpage = require('../../../../po/document/edition/legis/sections/original-text/original-text.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var path = require('path');
var uploadFolder = '../../../../test-data/' + params.env + '/upload-files/';
var pdfFileToUpload = params.BU + '.originaltextimportpdf.PDF';
var loadedData = testData[params.env][params.BU]



describe('Document-structure', function () {

	beforeEach(function () {

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
	 * GCMSQABANG-1587:04 - Loading the first original text by using Import
	 */
    it('Original Text import pdf Loading the first original text.'+ jiraNumber, function () {

		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		originaltextpage.importFilePDF(path.resolve(__dirname, uploadFolder+pdfFileToUpload));
		
		//Verify file is added for upload & Language field is displayed
		expect(originaltextpage.isFileAddedForUploadingOriginalText(pdfFileToUpload)).toEqual(true);
		expect(originaltextpage.isLanguageDisplayedForUploadingItem(pdfFileToUpload)).toEqual(true);
		
		//Click Green (upload) button and verify the pdf file is uploaded
		originaltextpage.clickGreenUploadButtonForUploadingItem(pdfFileToUpload);
		browser.sleep(3000);//clicking upload will take time to upload. wait is necessary
		expect(originaltextpage.isPDFIconDisplayed()).toEqual(true);
		expect(originaltextpage.isRemoveButtonDisplayed()).toEqual(true);
		
	});
	
	/*
	 * GCMSQABANG-1588:06 - Loading duplicated PDF - not possible
	 */
	it('Original Text import pdf Loading duplicated PDF not possible.'+ jiraNumber, function () {

		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		originaltextpage.importFilePDF(path.resolve(__dirname,uploadFolder+pdfFileToUpload));
		
		//Verify not possible to upload 'Espanol' again (espanol already added in previous test)
		originaltextpage.clickGreenUploadButtonForUploadingItem(pdfFileToUpload);
		browser.sleep(1000);
		expect(originaltextpage.isConfirmationModalWindowDisplayed()).toEqual(true);
		browser.sleep(1000);
    	originaltextpage.clickYesButton();
		
	});
	
	/*
	 * GCMSQABANG-1583:TC01 - Right Panel - Original Text - Delete Original
	 */
	it('Original Text imported pdf Delete PDF.'+ jiraNumber, function () {

		browser.waitForAngular();
		originaltextpage.clickOriginalText();
		
		//Verify pdf file is exist
		expect(originaltextpage.isPDFIconDisplayed()).toEqual(true);
		expect(originaltextpage.isRemoveButtonDisplayed()).toEqual(true);
		
		//Remove first(one and only pdf exist on this document) & verify it is removed
		originaltextpage.clickRemoveButtonForFirstPDF();
		expect(originaltextpage.isConfirmationMessageDisplayed()).toEqual(true);
		originaltextpage.clickYesButton();
		expect(originaltextpage.isPDFIconDisplayed()).toEqual(false);
	});
	
});







