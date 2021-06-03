var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2398';
var testData = require('../../../../test-data/Jira_TestData/right-panel/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

describe('Right-panel', function () {
    beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loaded.marginal_id);
		collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);

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


	
  it('Verify UI design unit.'+jiraNum, function () {
      //DOCUMENT STRUCTURE

        rightpanelpage.clickOnRightPanelTab(loaded.document_structure);
        browser.waitForAngular();
        rightpanelpage.clickOnModuleImageAsPerUnit(loaded.unit,loaded.relaicon);

        browser.sleep(4000);
        //to check for relationship(all) option in for a unit
        var relationshipallpresent=globalpo.isElementPresent(loaded.relatall);
        expect(relationshipallpresent).toEqual(true);

        //to check for effectiveness option inside the relationship icon for a unit
        var effectivepresent=globalpo.isElementPresent(loaded.effective);
        expect(effectivepresent).toEqual(true);

       //to check for target option inside the relationship icon for a unit
        var targetpresent=globalpo.isElementPresent(loaded.target);
        expect(targetpresent).toEqual(true);
        browser.sleep(1000);
       //to check for annotations option inside the relationship icon for a unit
        var annotationspresent=globalpo.isElementDisplayed(loaded.annotations);
        expect(annotationspresent).toEqual(true);
        browser.sleep(1000);
    //    //to check for source option inside the relationship icon for a unit
        var sourcepresent=globalpo.isElementDisplayed(loaded.source);
        expect(sourcepresent).toEqual(true);

    //     //to check for target option inside the relationship icon for a unit
        var target_present=globalpo.isElementDisplayed(loaded.target_);
        expect(target_present).toEqual(true);
        browser.sleep(1000);

      
     });
});
    
    
    
    
    

    
