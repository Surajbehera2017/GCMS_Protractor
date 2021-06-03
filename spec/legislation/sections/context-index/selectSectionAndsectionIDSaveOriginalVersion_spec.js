var params = browser.params;
//i18n basic support
 var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
 var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
 var contextindexpage = require('../../../../po/document/display/legis/sections/context-index/context-index.po.js');
 var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
 var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
 var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
 var jiraNumber= 'GCMSQABANG-2796'; 
 var testData = require('../../../../test-data/Jira_TestData/Context Index/'+ jiraNumber + '.js');
 var loaded = testData[params.env][params.BU];


describe('Context Index', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        contextindexpage.urlLoad(params.valid_username, params.valid_password);

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
  
  //TC04 - Content Index - Select Section and Section ID - Add - Save both fields with  no original version

  it('Add - Save both fields with no original version.' +jiraNumber, function () {
     
      globalfunction.clickOnSectionButton(loaded.leftpanel,loaded.linktolink);
      authorNotes.clickOnbuttonInsideSectionTable(loaded.btn);

      browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle = handles[1];
        var currenthandle = handles[0];
 
        browser.switchTo().window(newTabHandle).then(function () {
 
          browser.sleep(2000);
          browser.driver.manage().window().maximize();
          authorNotes.selectAndAddUnitFromDropDown(loaded.unit_id,'level');
          var a=['version','level','unit'];
          var b=['Original','Nivel nuevo','PAR.ID'];

          //entering data in level('#') 
          for(var i=0;i<3;i++){
              authorNotes.enterDataInHashPopup(a[i],b[i]);
          }
          browser.waitForAngular();
          
          var plus = authorNotes.clickOnPlusIcon();
          expect(plus).toEqual(true);
          browser.sleep(1000);
          contextindexpage.selectContextIndexTypeFromDropdown(loaded.type);
          browser.sleep(1000);
          authorNotes.selectContextIndexHierarchy(loaded.hierarchy);
          browser.sleep(1000);
          authorNotes.selectValueFromContextIndexTerm(loaded.term);
          browser.sleep(1000);
          contextindexpage.enterTextInInternalNote('testing only');
          browser.sleep(1000);
          globalfunction.clickOnButtonForGlobal(loaded.save);
          browser.sleep(1000);

        });

        browser.switchTo().window(currenthandle); 
        browser.waitForAngular();
        contextindexpage.clickOnbuttonInsideSectionTable(loaded.show_filters);
        browser.sleep(1000);
        contextindexpage.enterValueInSearchField('term',loaded.term);
        browser.sleep(1000);
        contextindexpage.enterValueInSearchField('unit',loaded.unit_id);
        browser.sleep(1000);
        thesauruspage.selectNoOfRows('All');
        thesauruspage.clickOnbuttonInsideSectionTable(loaded.delete);
        browser.sleep(1000);
        globalfunction.clickOnButtonForGlobal('Yes');
        browser.sleep(1000);
        globalfunction.clickOnNavigationOrCloseButton('close');
  
  
      });

  });
    
});
    
    
    
    
    

    
