var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

var jiraNumber = 'GCMSQABANG-1978';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
describe('Relationship', function () {



  beforeEach(function () {

    browser.ignoreSynchronization = false;
    legisDocDisplayPage.get(loadedData.marginal_id);
    relationshippage.urlLoad(params.valid_username, params.valid_password);

  });

	
  it('Display Unit by clicking anchor button in add pop up.' + jiraNumber, function () {
     
      browser.waitForAngular();
      globalfunction.clickOnSectionButton(loadedData.secname,loadedData.add_btn);
      browser.sleep(2000);
      expect(relationshippage.isModalPresent(loadedData.addmod)).toEqual(true);
      browser.sleep(2000);
      relationshippage.sendValueTo(loadedData.panel_tar,loadedData.Codefield,loadedData.Code);
      browser.sleep(2000);
      relationshippage.sendValueTo(loadedData.panel_tar,loadedData.Yearfield,loadedData.Year);
      browser.sleep(2000);
      relationshippage.sendValueTo(loadedData.panel_tar,loadedData.numfield,loadedData.number);
      browser.sleep(2000);
      relationshippage.selectUnitFromStructureButton(loadedData.panel_tar,loadedData.selectedunit);
      browser.sleep(2000);
      globalfunction.clickOnButtonForGlobal(loadedData.confirm);
      browser.sleep(2000);
      relationshippage.clickOnIcon(loadedData.panel_tar,loadedData.anchoricon);
      browser.sleep(2000);
      globalfunction.gettingTextofelement(loadedData.path,loadedData.text);
      browser.waitForAngular();
      globalfunction.clickOnNavigationOrCloseButton('close');
  });
  it('Display Unit by clicking anchor button in edit pop up.' + jiraNumber,function(){

    browser.waitForAngular();
    globalfunction.clickOnSectionButton(loadedData.secname,loadedData.viewlnk);
    browser.sleep(2000);
    globalfunction.clickOnbuttonInsideSectionTable(loadedData.filter);
    browser.sleep(2000);
    relationshippage.filterbyTargetUnitlevel(loadedData.levelval);
    browser.sleep(2000);
    globalfunction.selectNoOfRows('1');
    browser.sleep(2000);
    relationshippage.clickonEditButtonInRelTable();
    browser.sleep(2000);
    expect(relationshippage.isModalPresent(loadedData.addmod)).toEqual(true);
    relationshippage.clickOnIcon(loadedData.panel_tar,loadedData.anchoricon);
    browser.sleep(2000);
    globalfunction.gettingTextofelement(loadedData.header,loadedData.unitdisplay);
    globalfunction.clickOnNavigationOrCloseButton('close');





  });



      //  browser.waitForAngular();
      //  browser.driver.manage().window().maximize();
      //  relationshippage.expandRelationshipTable();
      //  relationshippage.selectFirstcheckbox();
      //  relationshippage.clickedit();
      //  browser.waitForAngular();
      //  relationshippage.clickexpandPopup();
      //  relationshippage.enterStructurePopup();
      // relationshippage.clickSave();
      //  browser.waitForAngular();
      // browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      // browser.waitForAngular();
      // relationshippage.selectFirstcheckbox();
      //  relationshippage.clickedit();
      // browser.waitForAngular();
      // relationshippage.removeUnit();
      // relationshippage.clickSave();
      // browser.waitForAngular();
      //  browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
      //  browser.waitForAngular();
      //  relationshippage.closeRelationshipFilter();
      //  browser.waitForAngular();
     
           
      
});
    