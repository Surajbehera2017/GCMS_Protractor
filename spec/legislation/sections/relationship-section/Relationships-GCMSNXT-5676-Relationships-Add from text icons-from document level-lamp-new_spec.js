var params = browser.params;
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum = 'GCMSQABANG-2121';
var jiraNum1 = 'GCMSQABANG-2122';

var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');

var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNum + '.js');
var loaded = testData[params.env][params.BU];

describe('Relationship', function () {

  beforeEach(function () {

    browser.ignoreSynchronization = false;
    var legisDocDisplayPage = new LegislationDocumentDisplayPage();

    legisDocDisplayPage.get(loaded.marginal_id);
    collectiveAgreementSection.urlLoad(params.valid_username, params.valid_password);

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

  //fromm doucment level and complement level
  it('Add from text icon from document level lamp.' + jiraNum+'.'+jiraNum1, function () {

    browser.waitForAngular();
    rightpanelpage.clickOnbuttonInEditMode(loaded.editbutton);
    browser.sleep(3000);

     
    globalpo.clickOnElement(loaded.refreshbutton);
    browser.sleep(6000);

    browser.switchTo().frame("capaTextoPreview");

    browser.ignoreSynchronization = true;
    browser.sleep(3000);

        
       textversionpage.hoverelement("(//*[@class='cite'])[1]");
       var el = element(by.xpath("(//*[@class='cite'])[1]"));
        browser.executeScript('arguments[0].scrollIntoView()', el);
        globalpo.clickOnElement(loaded.clickonbuld);
        browser.sleep(3000);

        browser.waitForAngular();
        var popup = textversionpage.isAddRelationshipDisplayed();
        if (popup = true) {
          expect(popup).toEqual(true);
        }
        browser.switchTo().defaultContent();
        browser.sleep(4000);
    
        //entering the text in type field
        relationshippage.entertextintypefield(loaded.typefeild1);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();


     //entering the values in CODE,YEAR,Nfield

     relationshippage.entertextincodefield(loaded.code);
     browser.actions().sendKeys(protractor.Key.ENTER).perform();
     relationshippage.entertextinyearfield(loaded.year);
     relationshippage.entertextinNºfield(loaded.nfeild);
     browser.sleep(4000);
 
     //clicking on document structure
     relationshippage.selectUnitFromStructureButton(loaded.TargetPanel, loaded.unit_name);
    globalpo.clickOnElement(loaded.ok);
     browser.sleep(3000);
 
     //click and entering text in complement field    
    relationshippage.sendValueTo(loaded.TargetPanel,loaded.fieldname,loaded.complementvalue);
    browser.sleep(3000);
     //clicking on add button
     relationshippage.clickOnRelPopUpButtons('Add');
     browser.sleep(3000);
 
     //clicking on delete in collector relationship
     globalpo.clickOnElement(loaded.deletebutton);
     browser.sleep(4000);
 
 
     globalpo.clickSaveorCancel(loaded.yesbutton);
     browser.sleep(4000);
 
     //closimg the relation ship pop up
     textversionpage.closeAddRelationShipPopup();
     browser.sleep(3000);
 
  });

});







