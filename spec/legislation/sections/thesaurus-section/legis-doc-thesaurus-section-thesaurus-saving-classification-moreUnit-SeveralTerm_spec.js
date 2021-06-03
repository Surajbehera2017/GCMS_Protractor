var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var globalfunction = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNumber = 'GCMSQABANG-2409';
var testData = require('../../../../test-data/Jira_TestData/Thesaurus/' + jiraNumber + '.js');
var authorNotesPage = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var loaded = testData[params.env][params.BU];


describe('Thesaurus', function () {


    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);

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
    
    //06 - Add - Saving Classification entry for several units and several terms


    it('Saving Classification entry for more than one unit and more Term.'+jiraNumber, function () {
        browser.waitForAngular();
        globalfunction.clickOnSectionButton(loaded.section,loaded.btn);
        browser.waitForAngular();
       // globalfunction.clickOnbuttonInsideSectionTable(loaded.button_name);
       authorNotesPage.clickOnbuttonInsideSectionTable(loaded.button_name);
        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {
                browser.sleep(2000);
                for(var i=0;i<3;i++){
                thesauruspage.clickOnPlusButton();
                thesauruspage.enterUnitIDInPopup(loaded.unitid);
                thesauruspage.clickOnComplementDropdown()
                thesauruspage.selectNumberFromComplement(loaded.number[i]);
                browser.waitForAngular();
                 globalfunction.clickOnButtonForGlobal(loaded.save);
                }
                 browser.sleep(2000);
                thesauruspage.selectThesarusTypeFromDropdown(loaded.thesaurustype);
                thesauruspage.clickHierarchyEnterText(loaded.hie);
                thesauruspage.selectThesaurusHierarchy(loaded.expected_hie);

                globalfunction.selectValueFromContextIndexTerm(loaded.contextTerm);
                thesauruspage.clickOnLinkForGlobal(loaded.link);
                browser.sleep(2000);
                browser.getAllWindowHandles().then(function (handles) {
                    var newTabHandle = handles[2];
                    browser.switchTo().window(newTabHandle).then(function () {
                        browser.ignoreSynchronization = true;
                        browser.sleep(3000);
                        browser.switchTo().frame(loaded.frameid);//1st frame
                        browser.ignoreSynchronization = true;
                        browser.sleep(3000);
                       thesauruspage.enterTextSpecificDatatype(loaded.perform,loaded.text);
                        browser.switchTo().defaultContent();
                        thesauruspage.clickOnActionsInGeneralTab(loaded.action);
                        browser.sleep(3000);

                    });
                });
                    browser.switchTo().window(handles[1]);
                    browser.ignoreSynchronization = false;
                    browser.sleep(2000);
                    // globalfunction.clickOnButtonForGlobal(loaded.add);
                    // globalfunction.clickOnButtonForGlobal(loaded.respond);
                    authorNotesPage.clickOnButtonForGlobal(loaded.add);
                    authorNotesPage.clickOnButtonForGlobal(loaded.respond);
                    browser.close();

                });
                    browser.switchTo().window(handles[0]);
                    browser.sleep(3000);
                    thesauruspage.selectNoOfRows(loaded.rownumber);
                    browser.sleep(3000);
                   // globalfunction.clickOnbuttonInsideSectionTable(loaded.delete);
                   authorNotesPage.clickOnbuttonInsideSectionTable(loaded.delete);
                    // globalfunction.clickOnButtonForGlobal(loaded.respond_1);
                    // authorNotesPage.clickOnButtonForGlobal(loaded.delete);
                    browser.sleep(2000);
                    authorNotesPage.clickOnButtonForGlobal(loaded.respond_1);
                    browser.sleep(3000);
            
     
                
            });

        });

    });



                

            
        













        
    // //     browser.waitForAngular();
    // //     thesauruspage.clickadd();
    // //     browser.waitForAngular();
    // //     browser.getAllWindowHandles().then(function(handles) {
    // //     var newTabHandle = handles[1];
    // //     browser.switchTo().window(newTabHandle).then(function () {

    // //         browser.sleep(3000);
    // //     browser.waitForAngular();

    // //     thesauruspage.clickMainUnit1();
    // //     thesauruspage.clickAddUnit1();
    // //     thesauruspage.clickMainUnit2();
    // //     thesauruspage.clickAddUnit2();
        
    // //     thesauruspage.sendTermKeyword();
    // //     thesauruspage.enterKeyTerm();
     
    // //     thesauruspage.clickonThesaurusTermFirst();
    // //     thesauruspage.clickonThesaurusTermSecond();
            
        
    // //     thesauruspage.clickAddThesaurus();
    // //     thesauruspage.clickOKinPopup();
    // //     if(thesauruspage.cancelbuttonPresent())
    // //              {
    // //        thesauruspage.clickCancelButton();
    // //              }
    // //     });
        
    // //     browser.switchTo().window(handles[0]);
	// // 	 browser.sleep(3000);
    // //     browser.waitForAngular();
    // //     thesauruspage.clickViewAllLink();
    // //     thesauruspage.clickShowFilters();
            
    // //     var pickerDue = element(by.model("analystDate"));

    // //     var today = new Date();
    // //     var dd = today.getDate();
    // //     var mm = today.getMonth()+1; //January is 0!
    // //    var yyyy = today.getFullYear();

    // //     if(dd<10) {
    // //     dd='0'+dd 
    // //     } 

    // //     if(mm<10) {
    // //      mm='0'+mm
    // //     } 

    // //    today = dd+'/'+mm+'/'+yyyy;

    // //    pickerDue.clear();
    // //    pickerDue.sendKeys(today);    
        
    // //    thesauruspage.enterKeyFilter();
    // //    thesauruspage.selectAllCheckBox();
    // //    thesauruspage.selectAllCheckBox();
    // //    thesauruspage.clickDelete();
    // //    thesauruspage.clickYesToDelete();
    // //         var view = thesauruspage.isViewAllPresent();
    // //           if(view = true)
    // //          {
    // //              expect(view).toEqual(true);
    // //          }
    // //    thesauruspage.closeViewAll();
            
    //     });
          
    //});
        
