// var params = browser.params;
// //i18n basic support
// var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//  var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
// var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
// var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
// var loaded = testData.legislation.sections.document_structure.Unwrapping_TestData;

// var jiraNumber ='GCMSQABANG-1797';
// describe('Document-structure', function () {
//     beforeEach(function () {
//         browser.ignoreSynchronization = false;
//         var legisDocDisplayPage = new LegislationDocumentDisplayPage();
//         legisDocDisplayPage.get(loaded.marginal_id);
//         rightpanelpage.urlLoad(params.valid_username, params.valid_password);
//         browser.waitForAngular();
//     });

   

//     afterEach(function () {//Close additional tab
//         browser.getAllWindowHandles().then(function (handles) {
//         browser.switchTo().window(handles[0]);
//             for (var i = 1; i < handles.length; i++) {
//                 browser.switchTo().window(handles[i]).then(function () {
//                     browser.close();
//                 }, function (error) {
//                    browser.switchTo().window(handles[0]);
//                 });
//             }
//             browser.switchTo().window(handles[0]);
//         });
//     });
    
//       /* GCMSQABANG-1797 : 02- Unwrapping Notatexhist List Element with Repro */
//     it(' test spec' , function () {

//         browser.driver.manage().window().maximize();
//         browser.waitForAngular();
//         rightpanelpage.clickDocumentStructure(loaded.document_structure);
//         browser.waitForAngular();
//         rightpanelpage.rightClickOnOrignalVisualAndEditLayer('A.1','Original');
//         browser.sleep(3000);

        
       


//     });



// });