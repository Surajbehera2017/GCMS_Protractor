var params = browser.params;
//i18n basic support
var relationshipsearch = require('../../../../../po/document/display/legis/sections/relationship-search/relationship-search.po.js');
var LegislationDocumentDisplayPage = require('../../../../../po/document/display/legis/legis-doc-display.po.js');
//var RelationshipSearch = require('../../../../po/relationshipsearch.po.js');
// var jiraNumber= 'GCMSQABANG-25';
// var testData = require('../../../../test-data/Jira_TestData/Context Index/'+ jiraNumber + '.js');
// var loaded = testData[params.env][params.BU];

describe('Relationship-Search', function () {

	beforeEach(function () {
         
        browser.ignoreSynchronization = false;
        // var relationSearch = new RelationshipSearch(); 
        relationshipsearch.get(); 
        relationshipsearch.urlLoad(params.valid_username,params.valid_password);
        
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

    it('sample text', function () {
    
         browser.sleep(2000);
        var ispagepresent= relationshipsearch.isRelationshipSearchPagePresent();
        expect(ispagepresent).toEqual(true);
        browser.sleep(1000);
        relationshipsearch.clickOnRadioButton('Secondary');
        browser.sleep(2000);
        relationshipsearch.selectLanguageFromDropdown('Valenciano');
        browser.sleep(1000);
         relationshipsearch.clickOnDropdown('amended','Ranking Vid');
        browser.sleep(1000);
        relationshipsearch.selectOptionInRankingVid('Básica');
        browser.sleep(2000);
        // var todaysdate=relationshipsearch.getcurrentDate();

        // relationshipsearch.enterDate('first','amending','Date of publication',todaysdate);


        // relationshipsearch.clickOnDropdown('amended','Marginal');
        // relationshipsearch.enterDataAndSelectValue('amended','Marginal','RCL');
    
        // relationshipsearch.fillTheYearAndNumFields('from','marginalFromYear','marginalFromNumber','1947','476');
        // browser.sleep(1000);
        // relationshipsearch.clickOnEyeIcon('marginalFrom');
        // browser.sleep(2000);
    });
   });
       
    

