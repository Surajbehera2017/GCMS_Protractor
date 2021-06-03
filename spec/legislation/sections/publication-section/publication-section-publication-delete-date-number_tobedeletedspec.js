var params = browser.params;
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentEditionPage =require('../../../../po/document/edition/legis/legis-doc-edition.po.1.js');
var publicationsection = require('../../../../po/document/edition/legis/sections/publication-section/publication-section.po.js');


describe('Publication Section', function () {

beforeEach(function () {
       
        browser.ignoreSynchronization = false;
        browser.driver.manage().window().maximize();        
        LegislationDocumentEditionPage.get(testData.legislation.sections.publication.marginal_id);
        browser.waitForAngular();     
        publicationsection.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();  
        
    });

    //04- Delete  a date-number-series

    it('should Delete a date-number-series', function () {
        publicationsection.editbutton();
        publicationsection.expandableEdit.expand();
        
        //expect(publicationsection.hasdeleteDateseries).toBe(true);
         browser.waitForAngular();
         publicationsection.clickdelteDateseries();
         browser.waitForAngular();
         publicationsection.save();     

    });

});








