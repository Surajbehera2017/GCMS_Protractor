var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var legisDocDisplayPage = new LegislationDocumentDisplayPage();

var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');

//var genealdatapage = require('../../../../po/document/edition/legis/sections/general-data/general-data.po.js');

var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');

var jiraNumber ='GCMSQABANG-3584';

var jiraNumber1='GCMSQABANG-3583';

var jiraNumber2='GCMSQABANG-3573';

var testData = require('../../../../test-data/Jira_TestData/Relationship/'+ jiraNumber + '.js');

var loaded=testData[params.env][params.BU];

 

describe('Relationship', function () {

 

                beforeEach(function () {

        

    browser.ignoreSynchronization = false;

    legisDocDisplayPage.get(loaded.marginal_id);

    relationshippage.urlLoad(params.valid_username,params.valid_password);

       

                });

   

  //TC08 - Relations - Filter by New Date - Filter by date - Target link - Filter space

//TC03 - Relations - Filter by New Date - Filter by date - View All - Filter space

           

  it('Filter-Date clear.'+jiraNumber, function () {

    

       browser.waitForAngular();

          

       globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);

       browser.sleep(3000);

       globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);

       browser.waitForAngular();

       browser.sleep(1000);

       relationshippage.filterbyNewdate(loaded.text);

       browser.sleep(1000);

       var newdateempty=globalpo.isElementPresent(loaded.newdateempty);

       expect(newdateempty).toEqual(true);

       browser.sleep(1000);

       globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);

       browser.sleep(2000);

     

      });

   

  //06 - Mix filter - 2

 
  
 it('Filter-Date %%.'+jiraNumber1, function () {

      browser.waitForAngular();

          

       globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);

       browser.sleep(3000);

       globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);

       browser.waitForAngular();

       browser.sleep(1000);

       relationshippage.filterbyNewdate(loaded.wildcardtext);

       browser.sleep(1000);

       var newdateempty=globalpo.isElementPresent(loaded.newdateempty);

       expect(newdateempty).toEqual(true);

       browser.sleep(1000);

       globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);

       browser.sleep(2000);

      

      });

   

    

    

    it('Filter-Date Source id & Wildcards.'+jiraNumber2, function () {

    

      browser.waitForAngular();

          

      globalpo.clickOnSectionButton(loaded.Relationships,loaded.viewAllLink);

      browser.sleep(3000);

      globalpo.clickOnbuttonInsideSectionTable(loaded.showFilter);

      browser.waitForAngular();

      browser.sleep(1000);

      relationshippage.filterbySourceid(loaded.wildcardtextid);

      browser.sleep(1000);

      relationshippage.filterbyNewdate(loaded.wildcardtextdate);

      browser.sleep(3000);

      var sourceidpresent=globalpo.isElementPresent(loaded.newdateempty);

      expect(sourceidpresent).toEqual(true);

      browser.sleep(1000);

      globalpo.clickOnNavigationOrCloseButton(loaded.closeButton);

      browser.sleep(2000);

     

      });

   

     

      

 

   

           

      

});