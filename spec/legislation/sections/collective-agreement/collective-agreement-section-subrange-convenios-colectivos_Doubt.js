var params = browser.params;
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var globalpo = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var jiraNum='GCMSQABANG-2978';
//var jiraNum1='GCMSQABANG-2450';
var testData = require('../../../../test-data/Jira_TestData/collective-agreement/'+ jiraNum + '.js');
var loaded=testData[params.env][params.BU];
//2798

describe("Collective Agreements", function () {
      
      
    beforeEach(function () {
        
                browser.ignoreSynchronization = false;
                collectiveAgreementSection.get(loadedData.marginal_id);
                browser.waitForAngular();
                collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);
                browser.waitForAngular();
       }); 
              
   //have query with the test case 
	it('should select Subrange Convenios Colectivos', function () {
        browser.waitForAngular();
        collectiveAgreementSection.expandSection();
         browser.waitForAngular();
         expect(collectiveAgreementSection.isExpanded()).toEqual(true); 
          collectiveAgreementSection.changeSubrange();
          collectiveAgreementSection.addsubRange1();
          collectiveAgreementSection.subrangeserachButton();
          collectiveAgreementSection.itemList();8

            });
		});


