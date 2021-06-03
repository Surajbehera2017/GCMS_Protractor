var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber1 = 'GCMSQABANG-1921';
var jiraNumber2 ='GCMSQABANG-1920';
var jiraNumber3 = 'GCMSQABANG-1922';
var jiraNumber4 = 'GCMSQABANG-3559';
var jiraNumber5 = 'GCMSQABANG-3558';
var jiraNumber6 = 'GCMSQABANG-3522';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber1 + '.js');
var loaded = testData[params.env][params.BU];


describe('Relationship', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        legisDocDisplayPage.get(loaded.marginal_id);
        relationshippage.urlLoad(params.valid_username, params.valid_password);

    });
    
      
    //02 - Delete button activated - rows selected
    //01 - Delete button disactivated - no rows selected
    //03 - Delete button disactivated after unselecting

      it('Delete Disabled - one.'+jiraNumber1+'.'+jiraNumber2+'.'+jiraNumber3, function () {
     
        browser.sleep(1000);

        //expand the relationship section
        globalpage.expandSectionInLeftPanel(loaded.Relationships);
        browser.sleep(1000);

        // click on view all link of relationship section 
        globalpage.clickOnSectionButton(loaded.Relationships, loaded.linktolink);
        browser.sleep(1000);

        //check if the delete button is disabled
        var deletedisabled=globalpage.clickOnbuttonInsideSectionTable(loaded.delete_button);
        expect(deletedisabled).toEqual(true);

        //select first 2 rows 
        globalpage.selectNoOfRows('1');
        browser.sleep(1000);

        
        //check if the delete button is enabled
        globalpage.clickOnbuttonInsideSectionTable(loaded.delete_button);
        globalpage.clickOnButtonForGlobal(loaded.cancel_button);
        browser.sleep(1000);

        //select first 2 rows 
        globalpage.selectNoOfRows('1');
        browser.sleep(1000);

        //check if the delete button is disabled
        var deletedisabled=globalpage.clickOnbuttonInsideSectionTable(loaded.delete_button);
        expect(deletedisabled).toEqual(true);

        
        //close the table
        globalpage.clickOnNavigationOrCloseButton('close');
        
      });
    
    

      //03 - Delete button disactivated after unselecting
      //02 - Delete button activated - rows selected
      //01 - Delete button disactivated - no rows selected

    it('Delete disabled - two.'+jiraNumber4+'.'+jiraNumber5+'.'+jiraNumber6, function () {
      
      
        browser.sleep(1000);
        globalpage.expandSectionInLeftPanel(loaded.Relationships);
        browser.sleep(1000);
        relationshippage.clickonLinkInsideRelationship(loaded.annotation_link);
        browser.sleep(1000);

        //check if the delete button is disabled
        var deletedisabled=globalpage.clickOnbuttonInsideSectionTable(loaded.delete_button);
        expect(deletedisabled).toEqual(true);

        //select first 2 rows 
        globalpage.selectNoOfRows('1');
        browser.sleep(1000);

        
        //check if the delete button is enabled
        globalpage.clickOnbuttonInsideSectionTable(loaded.delete_button);
        globalpage.clickOnButtonForGlobal(loaded.cancel_button);
        browser.sleep(1000);

        //select first 2 rows 
        globalpage.selectNoOfRows('1');
        browser.sleep(1000);

        //check if the delete button is disabled
        var deletedisabled=globalpage.clickOnbuttonInsideSectionTable(loaded.delete_button);
        expect(deletedisabled).toEqual(true);
      
        
        //close the table
        globalpage.clickOnNavigationOrCloseButton('close');
    });

      });
    
           
      

    