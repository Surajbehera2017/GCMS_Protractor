var params = browser.params;
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-1984';
var jiraNum1='GCMSQABANG-1983';
var jiraNum2='GCMSQABANG-1982';
var textversionpage = require('../../../../po/document/display/legis/sections/text-version/text-version.po.js');

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];

describe('Relationship', function () {
  
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

   // 01- Add relationship - Check fields displayed from target  section
    	
    it('Check fields displayed from target  section .'+jiraNum, function () {
     
  
    browser.waitForAngular();
    globalpo.expandSectionInLeftPanel(loaded.sectionName);
    browser.sleep(3000);

    globalpo.clickOnSectionButton(loaded.sectionName,loaded.AddButton);
    browser.sleep(3000);

    //checking fields of Target section

       var elementpresent = globalpo.isElementDisplayed(loaded.Documentsection);
		expect(elementpresent).toEqual(true);


        var elementpresent1 = globalpo.isElementDisplayed(loaded.Pursuntsection);
        expect(elementpresent1).toEqual(true);
        
        var elementpresent2 = globalpo.isElementDisplayed(loaded.Eyeicon);
        expect(elementpresent2).toEqual(true);
        
        var elementpresent3 = globalpo.isElementDisplayed(loaded.Notefield);
        expect(elementpresent3).toEqual(true);



        var elementpresent4 = globalpo.isElementDisplayed(loaded.Levelfield);
        expect(elementpresent4).toEqual(true);

        var elementpresent5 = globalpo.isElementDisplayed(loaded.Levelfield);
        expect(elementpresent5).toEqual(true);

        var elementpresent6 = globalpo.isElementDisplayed(loaded.Datefiled);
        expect(elementpresent6).toEqual(true);

        var elementpresent7 = globalpo.isElementDisplayed(loaded.Documentstructure);
        expect(elementpresent7).toEqual(true);

        relationshippage.closeAddorEditRelationshipPopup();
        browser.sleep(3000);
        


    
      
     });
    
    /*
    02- Add relationship - Check fields displayed from Source (Left) section
*/
    it('Check fields displayed from Source (Left) section.'+jiraNum1, function () {
     
        browser.waitForAngular();
       globalpo.expandSectionInLeftPanel(loaded.sectionName);
       browser.sleep(3000);
       globalpo.clickOnSectionButton(loaded.sectionName,loaded.AddButton);
       browser.sleep(3000);


        var elementpresent = globalpo.isElementDisplayed(loaded.Bodyfield);
        expect(elementpresent).toEqual(true);

        // var elementpresent8 = globalpo.isElementDisplayed(loaded.Typefieled);
        // expect(elementpresent8).toEqual(true);


        var elementpresent1= globalpo.isElementDisplayed(loaded.Unitfield);
        expect(elementpresent1).toEqual(true);

        var elementpresent2 = globalpo.isElementDisplayed(loaded.Partfield);
        expect(elementpresent2).toEqual(true);

        var elementpresent3 = globalpo.isElementDisplayed(loaded.Complement);
        expect(elementpresent3).toEqual(true);

        var elementpresent4 = globalpo.isElementDisplayed(loaded.Anchoricon);
        expect(elementpresent4).toEqual(true);

        relationshippage.closeAddorEditRelationshipPopup();
        browser.sleep(3000);
      
     });
    
  
});
    
           
      

    