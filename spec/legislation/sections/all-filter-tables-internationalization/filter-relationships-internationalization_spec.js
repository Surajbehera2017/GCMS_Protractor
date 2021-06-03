var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various Bu's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var legisDocDisplayPageObjects = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
var LoginPage = require('../../../../po/login.po.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var loadedData = testData.legislation.sections;

describe('Internationalization-Language', function () {

    beforeEach(function () {
        
         browser.ignoreSynchronization = false;
         legisDocDisplayPageObjects.get(loadedData.allfiltersInternationalization.marginal_id_relationship);
         browser.waitForAngular();
         relationshippage.urlLoad(params.valid_username, params.valid_password);
         browser.waitForAngular();
     
    });

    //01 Filter Relationships-Internationalization
    it('should verify internationalization of relationship Section table',function(){
        
        relationshippage.viewAllLinkClick();
        relationshippage.clickShowFilters();
        relationshippage.EnterValueInRelationshipTypeField(testData.legislation.sections.relationship.search_term);
        //expect(relationshippage.getCountOfRows()).toEqual(0);
        relationshippage.clickCloseButton();
        legisDocDisplayPageObjects.selectLanguage();
        browser.waitForAngular();
        expect(relationshippage.getAddButtonCaption()).toEqual(testData.legislation.sections.allfiltersInternationalization.addbuttontext);
        //expect(relationshipSection.getAllFiltersButtonCaption).toEqual(testData.legislation.sections.allfiltersInternationalization.filtersbuttontext);
        });
});
                       