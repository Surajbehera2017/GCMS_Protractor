var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var grantsAndSubsidies = require('../../../../po/document/display/legis/sections/grants-subsidies/grants-subsidies.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2864';
var testData = require('../../../../test-data/Jira_TestData/Left-panel/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];


describe('Left-panel', function () {
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


	
  it('verify edit Button.'+jiraNum, function () {
     
        browser.waitForAngular();
        rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
        browser.sleep(2000);
        //check for all thes sections
        var prodcollecsecpresent=globalpo.isElementPresent(loaded.prodcollecsec);
        expect(prodcollecsecpresent).toEqual(true);
        browser.sleep(1000);

        var controlsecpresent=globalpo.isElementPresent(loaded.controlsec);
        expect(controlsecpresent).toEqual(true);
        browser.sleep(1000);

        var statuesecpresent=globalpo.isElementPresent(loaded.statuesec);
        expect(statuesecpresent).toEqual(true);
        browser.sleep(1000);

        var publicationsecpresent=globalpo.isElementPresent(loaded.publicationsec);
        expect(publicationsecpresent).toEqual(true);
        browser.sleep(1000);

        var corrigsecpresent=globalpo.isElementPresent(loaded.corrigsec);
        expect(corrigsecpresent).toEqual(true);
        browser.sleep(1000);

        var validitysecpresent=globalpo.isElementPresent(loaded.validitysec);
        expect(validitysecpresent).toEqual(true);
        browser.sleep(1000);

        var editorialsecpresent=globalpo.isElementPresent(loaded.editorialsec);
        expect(editorialsecpresent).toEqual(true);
        browser.sleep(1000);

        var practicesecpresent=globalpo.isElementPresent(loaded.practicesec);
        expect(practicesecpresent).toEqual(true);
        browser.sleep(1000);

        var topicsecpresent=globalpo.isElementPresent(loaded.topicsec);
        expect(topicsecpresent).toEqual(true);
        browser.sleep(1000);

        var grantssecpresent=globalpo.isElementPresent(loaded.grantssec);
        expect(grantssecpresent).toEqual(true);
        browser.sleep(1000);

        var thesaurussecpresent=globalpo.isElementPresent(loaded.thesaurussec);
        expect(thesaurussecpresent).toEqual(true);
        browser.sleep(1000);

        var relationsecpresent=globalpo.isElementPresent(loaded.relationsec);
        expect(relationsecpresent).toEqual(true);
        browser.sleep(1000);

        var bookssecpresent=globalpo.isElementPresent(loaded.bookssec);
        expect(bookssecpresent).toEqual(true);

        browser.sleep(1000);
        var authornotessecpresent=globalpo.isElementPresent(loaded.authornotessec);
        expect(authornotessecpresent).toEqual(true);
        browser.sleep(1000);

        var legdicsecpresent=globalpo.isElementPresent(loaded.legdicsec);
        expect(legdicsecpresent).toEqual(true);
        browser.sleep(1000);
        browser.sleep(1000);
        collectiveAgreementSection.clickSaveExitEdit(loaded.exiteditbutton);
        browser.sleep(2000);
        globalpo.clickSaveorCancel(loaded.yesbutton);
        browser.sleep(2000);


     
     });
});
    
    
    
    
    

    
