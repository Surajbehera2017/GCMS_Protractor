var params = browser.params;

var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var relationshippage = require('../../../../po/document/display/legis/sections/relationship-section/relationship-section1.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var loadedData = testData.legislation.sections.relationShip;
var legisDocDisplayPage = new LegislationDocumentDisplayPage();

describe('Relationship', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		
		legisDocDisplayPage.get(loadedData.creation_by_type.marginal_id);
		relationshippage.urlLoad();

	});


	/*
	 * TC02 Relationships - Support relationship range creation - Multiple selection of units - Add single tag
	 */
	it('Relationships - Support relationship range creation - Multiple selection of units - Add single tag', function () {

		browser.waitForAngular();
		browser.driver.manage().window().maximize();
		relationshippage.clickAddRelationship();
		browser.waitForAngular();
		
        relationshippage.clickOnsourcestructurebutton();
        browser.waitForAngular();
        var popup = relationshippage.isDocumentStructutePopupPresent();
        expect(popup).toEqual(true);
        relationshippage.clickFirstCheckboxDocumentStructure();
        relationshippage.clickOKButtonDocumentStructurepopup();
        browser.waitForAngular();
        var tag = relationshippage.isSelectedTagAppearsInUnitField();
        expect(tag).toEqual(true);
        relationshippage.clickCloseButtonEditRelationshipPopup();
		
	});

});




