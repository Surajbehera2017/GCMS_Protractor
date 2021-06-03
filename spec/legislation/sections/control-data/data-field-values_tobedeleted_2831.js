var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
//test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var section = require('../../../../po/document/display/legis/sections/control-data/control-data.po.js');

var loadedData = testData.legislation.sections.control_data;

describe('Control Data', function () {

	beforeEach(function () {

		browser.ignoreSynchronization = false;
		var legisDocDisplayPage = new LegislationDocumentDisplayPage();
		legisDocDisplayPage.get(loadedData.marginal_id);
		browser.waitForAngular();
		section.urlLoad(params.valid_username,params.valid_password);
		browser.waitForAngular();
	});

	afterEach(function () {});

	it('should be a have the correct analyst,analysis date,filename,last change date ', function () {

		expect(section.isExpanded()).toEqual(false);
		section.expandSection();
		expect(section.isExpanded()).toEqual(true);
		expect(section.analyst()).toEqual(loadedData.analyst);
		expect(section.isAnalisysDateDisplayed()).toEqual(true);
		expect(section.fileName()).toEqual(loadedData.filename);
		expect(section.relevantChange()).toEqual(loadedData.relevant_change);
	});

});
