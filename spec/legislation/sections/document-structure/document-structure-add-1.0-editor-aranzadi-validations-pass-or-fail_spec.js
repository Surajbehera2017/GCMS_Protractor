var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber1='GCMSQABANG-1724';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber1 + '.js');
var loaded=testData[params.env][params.BU];
var jiraNumber2='GCMSQABANG-1725';
var testData1 = require('../../../../test-data/Jira_TestData/'+ jiraNumber2 + '.js');
var loaded1=testData1[params.env][params.BU];


describe('Document-structure', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id_xml);
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
    

	/* GCMSQABANG-1724 TC44 -Add 1.0 Editor - Aranzadi - Validations */
    
    it('Add Editor Aranzadi Validations-pass.'+jiraNumber1+'.'+jiraNumber2, function () {

	   browser.waitForAngular();
	   rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
	   browser.waitForAngular();
	   rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
	   browser.waitForAngular();
	
       //Verify pop-up displayed
		var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
		expect(popup).toEqual(true);

       //Verify whether validate button is displayed
		var buttonValidated = rightpanelpage.isdisplayedofSideBarButton(loaded.validate);
		expect(buttonValidated).toEqual(true);

       //Enter given content in XML Editor & verify new text is entered (Using Replace Button functionality)
		rightpanelpage.fontFormatOptionsOnXMLeditor(loaded.replace);
		browser.waitForAngular();
		rightpanelpage.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(loaded.validation_pass);
		browser.waitForAngular();
		
	   //click on validate button
		rightpanelpage.clickOnSideBarButton(loaded.validate);
        browser.waitForAngular();
        rightpanelpage.popUpWindowIsDispayed(loaded.validation_result);
	    browser.sleep(3000);
		rightpanelpage.clickOnOKConfirmationPopup();
		browser.sleep(1000);

		//checking whether cancel button is displayed in window
		rightpanelpage.clickOnButtonForGlobal('Cancel');
		browser.sleep(2000);
		

	});


	/* GCMSQABANG-1725 TC45 -Add 1.0 Editor - Aranzadi - Validations fail */
     
	 it('Add 1.0 Editor Aranzadi Validations--fail'+jiraNumber2.link(params.jiraURL+jiraNumber2),  function () {

		   browser.waitForAngular();
		   rightpanelpage.clickOnRightPanelTab(loaded1.document_structure);
		   browser.waitForAngular();
		   rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded1.expected_option);
		   browser.waitForAngular();
		
		   //Verify pop-up displayed
			var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
			expect(popup).toEqual(true);
	
		   //Verify whether validate button is displayed
			var buttonValidated = rightpanelpage.isdisplayedofSideBarButton(loaded1.validate);
			expect(buttonValidated).toEqual(true);
	
		   //Enter given content in XML Editor & verify new text is entered (Using Replace Button functionality)
			rightpanelpage.fontFormatOptionsOnXMLeditor(loaded1.replace);
			browser.waitForAngular();
			rightpanelpage.replaceWholeXMLTextInUnitPopUpUsingReplaceButton(loaded1.validation_fail);
			browser.waitForAngular();

			
		   //click on validate button
			rightpanelpage.clickOnSideBarButton(loaded1.validate);
		    browser.waitForAngular();
		    rightpanelpage.popUpWindowIsDispayed(loaded1.validation_result);
		   
			//checking whether error message is displayed in the unit popup
             var getError = rightpanelpage.getTextofErrorValidation();
		    expect(getError).toContain(loaded1.error_text_validate);
		    browser.sleep(3000);
		  
			rightpanelpage.clickOnOKConfirmationPopup();
			browser.sleep(1000);

			//click on the cancel button
			rightpanelpage.clickOnButtonForGlobal('Cancel');
			browser.sleep(1000);
			
	  });
	 
	 
 });
