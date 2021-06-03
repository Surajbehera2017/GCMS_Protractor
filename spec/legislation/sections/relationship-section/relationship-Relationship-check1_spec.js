var params = browser.params;
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum = 'GCMSQABANG-2080';
var jiraNum1 = 'GCMSQABANG-2081';
var jiraNum2 = 'GCMSQABANG-2082';
var jiraNum2 = 'GCMSQABANG-2083';
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



  //TC01 - Relationships - Add Relationships - Target Practical Content - CPR


  it('Relationships - Add Relationships - Target Practical Content - CPR.'+jiraNum, function () {
   browser.waitForAngular();

    globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);
    browser.sleep(3000);


    //Enter mandatory fields in target
    relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, 'CPR');

    browser.sleep(3000);

    //verifying the disabled fields )eyeicon,+ symbol and anchor tag

    var attr = element(by.xpath('(//*[@class="md-icon"])[5]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[7]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[8]'));
    expect(attr.isEnabled()).toBe(false);

    //cheking date field is disabled or not

    var attr = element(by.xpath('//*[@name="afectado.fechaRedaccion"]'));
    expect(attr.isEnabled()).toBe(false);

   //closing the popup
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(3000);
  
    
    
});


  //TC02 - Relationships - Add Relationships - Target Practical Content - DOC

  it('Relationships - Add Relationships - Target Practical Content - DOC.' +jiraNum1, function () {

    browser.waitForAngular();

    globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);
    browser.sleep(3000);


    //Enter mandatory fields in target
    relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, 'DOC');

    browser.sleep(3000);

    //verifying the disabled fields )eyeicon,+ symbol and anchor tag

    var attr = element(by.xpath('(//*[@class="md-icon"])[5]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[7]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[8]'));
    expect(attr.isEnabled()).toBe(false);

    //cheking date field is disabled or not

    var attr = element(by.xpath('//*[@name="afectado.fechaRedaccion"]'));
    expect(attr.isEnabled()).toBe(false);

   //closing the popup
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(3000);
  });

  //TC03 - Relationships - Add Relationships - Target Practical Content - FOR

   it('Relationships - Add Relationships - Target Practical Content - FOR.'+jiraNum2, function () {
    browser.waitForAngular();

    globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);
    browser.sleep(3000);


    //Enter mandatory fields in target
    relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, 'FOR');

    browser.sleep(3000);

    //verifying the disabled fields )eyeicon,+ symbol and anchor tag

    var attr = element(by.xpath('(//*[@class="md-icon"])[5]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[7]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[8]'));
    expect(attr.isEnabled()).toBe(false);

    //cheking date field is disabled or not

    var attr = element(by.xpath('//*[@name="afectado.fechaRedaccion"]'));
    expect(attr.isEnabled()).toBe(false);

   //closing the popup
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(3000);
  
});
    
      
  //TC04 - Relationships - Add Relationships - Target Practical Content - MIX
   
   it('Relationships - Add Relationships - Target Practical Content - MIX.'+jiraNum2, function () {
     
    browser.waitForAngular();

    globalpage.clickOnSectionButton(loaded.Relationships, loaded.AddButton);
    browser.sleep(3000);


    //Enter mandatory fields in target
    relationshippage.sendValueTo(loaded.TargetPanel, loaded.CodeField, 'MIX');

    browser.sleep(3000);

    //verifying the disabled fields )eyeicon,+ symbol and anchor tag

    var attr = element(by.xpath('(//*[@class="md-icon"])[5]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[7]'));
    expect(attr.isEnabled()).toBe(false);

    var attr = element(by.xpath('(//*[@class="md-icon"])[8]'));
    expect(attr.isEnabled()).toBe(false);

    //cheking date field is disabled or not

    var attr = element(by.xpath('//*[@name="afectado.fechaRedaccion"]'));
    expect(attr.isEnabled()).toBe(false);

   //closing the popup
    relationshippage.closeAddorEditRelationshipPopup();
    browser.sleep(3000);
  
});



});