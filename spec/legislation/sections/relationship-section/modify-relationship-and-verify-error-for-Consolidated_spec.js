var params = browser.params;
var jiraNumber = 'GCMSQABANG-2056';
var jiraNumber1 = 'GCMSQABANG-2057';
var jiraNumber2 = 'GCMSQABANG-2058';
var jiraNumber3 = 'GCMSQABANG-2060';
var testData = require('../../../../test-data/Jira_TestData/Relationship/' + jiraNumber + '.js');
var loadedData = testData[params.env][params.BU];
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var legisDocDisplayPage = new LegislationDocumentDisplayPage();
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');


describe('Relationship', function () {

        beforeEach(function () {

                browser.ignoreSynchronization = false;
                legisDocDisplayPage.get(loadedData.marginal_id);
                relationshippage.urlLoad(params.valid_username, params.valid_password);
                browser.driver.manage().window().maximize();

        });



        it('Consolidated-Change the type to añade unidad- Error.' + jiraNumber, function () {


                globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

                globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);


                //Verify relationship table & order data is displayed
                expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
                expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);
                browser.waitForAngular();

                relationshippage.filterbyConsolidation(loadedData.yes);

                globalpage.selectNoOfRows('1');
                relationshippage.clickonEditButtonInRelTable();
                //Verify type as 
                relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type[0]);

                relationshippage.clickOnRelPopUpButtons(loadedData.Save);

                expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//error displayed
                relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
                expect(relationshippage.getMessageFromInfoDialogueBox()).toContain(loadedData.error_msg);
                relationshippage.clickOkpopup();


                browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
                //close relationship table

                globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);




        });

        it('Consolidated-Change the type to anotaciones group - Error.' + jiraNumber1, function () {



                globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

                globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);


                //Verify relationship table & order data is displayed
                expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
                expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);
                browser.waitForAngular();

                relationshippage.filterbyConsolidation(loadedData.yes);

                globalpage.selectNoOfRows('1');
                relationshippage.clickonEditButtonInRelTable();
                //Verify type as 
                relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type[1]);

                relationshippage.clickOnRelPopUpButtons(loadedData.Save);

                expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//error displayed
                relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
                expect(relationshippage.getMessageFromInfoDialogueBox()).toContain(loadedData.error_msg);
                relationshippage.clickOkpopup();


                browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
                //close relationship table

                globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);


        });

        it('Consolidated-Change the type to Otras group - Error.' + jiraNumber2, function () {



                globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

                globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);


                //Verify relationship table & order data is displayed
                expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
                expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);
                browser.waitForAngular();

                relationshippage.filterbyConsolidation(loadedData.yes);

                globalpage.selectNoOfRows('1');
                relationshippage.clickonEditButtonInRelTable();
                //Verify type as 
                relationshippage.clickandSelect(loadedData.TypeField, loadedData.relation_type[2]);

                relationshippage.clickOnRelPopUpButtons(loadedData.Save);

                expect(relationshippage.isErrorDisplayedRelationshipPopup()).toEqual(true);//error displayed
                relationshippage.clickMoreInfoLinkInErrorInRelationshipPopUp();
                expect(relationshippage.getMessageFromInfoDialogueBox()).toContain(loadedData.error_msg);
                relationshippage.clickOkpopup();


                browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
                //close relationship table

                globalpage.clickOnNavigationOrCloseButton(loadedData.closeButton);


        });



        it('Consolidated- Allow to modify fields.' + jiraNumber3, function () {



                globalpage.clickOnSectionButton(loadedData.Relationships, loadedData.viewAllLink);

                globalpage.clickOnbuttonInsideSectionTable(loadedData.showFilter);


                //Verify relationship table & order data is displayed
                expect(relationshippage.isRelationshipContainerDisplayed()).toEqual(true);
                expect(relationshippage.isDataPresentInRelationshipContainer()).toEqual(true);
                browser.waitForAngular();

                relationshippage.filterbyConsolidation(loadedData.yes);

                globalpage.selectNoOfRows('1');
                relationshippage.clickonEditButtonInRelTable();



                var levelfieldofsource = relationshippage.isEnabledCheckForLevelInSource();
                expect(levelfieldofsource).toEqual(true);


                var notefieldofsource = relationshippage.isEnabledCheckForNoteInSource();
                expect(notefieldofsource).toEqual(true);

                var notefieldoftarget = relationshippage.isEnabledCheckForNoteInTarget();
                expect(notefieldoftarget).toEqual(true);




                browser.waitForAngular();


                browser.waitForAngular();
                browser.actions().sendKeys(protractor.Key.ESCAPE).perform();




        });



});