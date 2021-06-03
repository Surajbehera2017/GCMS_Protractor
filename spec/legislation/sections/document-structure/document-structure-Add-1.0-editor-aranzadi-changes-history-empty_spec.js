var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var jiraNumber='GCMSQABANG-1727';
var testData = require('../../../../test-data/Jira_TestData/'+ jiraNumber + '.js');
var loaded=testData[params.env][params.BU];

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


	/*
	 *  GCMSQABANG-1727 TC47 -Add 1.0 Editor - Aranzadi - Changes history  empty
	 */
       
     it('Aranzadi - Changes history  empty.'+jiraNumber,function () {

        browser.waitForAngular();
        rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        browser.waitForAngular();
        rightpanelpage.ClickOnStrucureActionAndSelectAction(loaded.expected_option);
        browser.waitForAngular();
     
        //Verify pop-up displayed
         var popup = rightpanelpage.isModalUnitEditPopUpDisplayed();
         expect(popup).toEqual(true);
 
        //Verify whether change history button is displayed
         var buttondisplayed = rightpanelpage.isdisplayedofSideBarButton(loaded.change_history);
         expect(buttondisplayed).toEqual(true);
 
        //click on change history button
         rightpanelpage.clickOnSideBarButton(loaded.change_history);
        
         //click on the cancel button
         rightpanelpage.clickCancelButtonInModalUnitEditPopUp();
         browser.sleep(1000);
         

        });


    });
