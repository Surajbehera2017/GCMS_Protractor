var params = browser.params;
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpage = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum = 'GCMSQABANG-2047';
var jiraNum1 = 'GCMSQABANG-2051';
var jiraNum2 = 'GCMSQABANG-2049';
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




        //01- Not consolidated-Change source unit


        it('Not consolidated-Change source unit.' + jiraNum, function () {

                browser.waitForAngular();
                globalpage.expandSectionInLeftPanel(loaded.sectionName);
                browser.sleep(3000);


                globalpage.clickOnElement(loaded.linkName);
                browser.sleep(3000);

                relationshippage.clickactionOnRelationshipTable(loaded.action);
                browser.sleep(3000);

                     
                //relationshippage.clickandSelect(loaded.TypeField,loaded.relation_type);
                
                relationshippage.clickUnitLinkInDocStructureIcon(loaded.Source,loaded.unit_name);


                globalpage.clickOnButtonForGlobal(loaded.Savebutton);
                browser.sleep(3000);

                relationshippage.closeAddorEditRelationshipPopup();
                browser.sleep(3000);



});
        //03- Not consolidated-Change different fields for source

           xit('Not consolidated-Change different fields for source.'+jiraNum2, function () {

                browser.waitForAngular();
                globalpage.expandSectionInLeftPanel(loaded.sectionName);
                browser.sleep(3000);
        
        
                globalpage.clickOnElement(loaded.linkName);
                browser.sleep(3000);
        
                relationshippage.clickactionOnRelationshipTable(loaded.action);
                browser.sleep(3000);
        
              // add note to target
              relationshippage.sendValueTo(loaded.TargetPanel,loaded.noteField,loaded.data);
            
              
	        globalpage.clickOnButtonForGlobal(loaded.Savebutton);
                browser.sleep(3000);
        
                relationshippage.closeAddorEditRelationshipPopup();
                browser.sleep(3000);
        
        


        }); 

        
        //    //04- Not consolidated-Change the type of relationship 

   xit(' Not consolidated-Change the type of relationship.'+jiraNum1, function () {

        browser.waitForAngular();
        globalpage.expandSectionInLeftPanel(loaded.sectionName);
        browser.sleep(3000);


        globalpage.clickOnElement(loaded.linkName);
        browser.sleep(3000);

        relationshippage.clickactionOnRelationshipTable(loaded.action);
        browser.sleep(3000);

      
        relationshippage.clickandSelect(loaded.TypeField,'cita');
        
        globalpage.clickOnButtonForGlobal(loaded.Savebutton);
        browser.sleep(3000);

        relationshippage.closeAddorEditRelationshipPopup();
        browser.sleep(3000);


        });


});


