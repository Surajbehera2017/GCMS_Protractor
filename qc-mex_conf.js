var params = 'Mexico';
var jasmineReporters = require('jasmine-reporters');
var fs = require('fs-extra');

var contextIndexFile = require('./config-files/contextIndex.js');
var documentCreationFile = require('./config-files/documentCreation.js');
var controlDataFile = require('./config-files/controlData.js');
var statuteDataFile = require('./config-files/statuteData.js');
var authorNotesFile = require('./config-files/authornotes.js');
var grantsandsubsidiesFile = require('./config-files/grantsandsubsidies.js');
var FixedSectionFile = require('./config-files/fixedsection.js');
var LabelsFiles = require('./config-files/labels.js');
var corrigendasFile = require('./config-files/corrigendas.js');
var productWorkbenchFile = require('./config-files/productWorkbench.js');
var dateInForceFile = require('./config-files/dateinforce.js');
var editorialNotesFile = require('./config-files/editorialNotes.js');
var billSectionFile = require('./config-files/billSection.js');
var RightPanelFile = require('./config-files/rightpanel.js');
var LeftPanelFile = require('./config-files/leftpanel.js');
var legislativeBodyFile = require('./config-files/LegislativeBody.js');
var collectiveAgreementfile = require('./config-files/collectiveAgreement.js');
var PublicationDataFile = require('./config-files/publicationsection.js');
var textVersionFile = require('./config-files/textversion.js');
var relationshipSectionFiles = require('./config-files/relationshipSection.js');
var relationshipSearchFiles = require('./config-files/relationshipSearch.js');
var practiceAreaFile = require('./config-files/practicearea.js');
var generalDataFile = require('./config-files/generaldata.js');
var thesaurusFile = require('./config-files/thesaurus.js');
var documentStructureFile = require('./config-files/documentStructure.js');
var languageFilterFile = require('./config-files/languageFilter.js');
var originalTextFile = require('./config-files/originalText.js');
var legislationDictionaryFile = require('./config-files/legislationdictionary.js');
var topicsubtopicFile = require('./config-files/topicsubtopic.js');

exports.config = {

	onComplete: function () {
		var browserName, browserVersion;
		var capsPromise = browser.getCapabilities();

		capsPromise.then(function (caps) {
			browserName = caps.get('browserName');
			browserVersion = caps.get('version');


			var HTMLReport = require('protractor-html-reporter');
			testConfig = {
				reportTitle: ' GCMS Execution Report ',
				outputPath: './reports',
				url: browser.baseUrl,
				environment: browser.params.env,
				BusinessUnit: browser.params.BU,
				screenshotPath: '../screenshots',
				testBrowser: browserName,
				browserVersion: browserVersion,
				modifiedSuiteName: false,
				screenshotsOnlyOnFailure: true
			};
			new HTMLReport().from('e2e-reports/junit-report/xmloutput.xml', testConfig);
		});
	},

	onPrepare: function () {
		browser.driver.manage().window().maximize();
		//Set up JUnitXmlReporter
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			consolidateAll: true,
			filePrefix: 'xmloutput',
			savePath: 'e2e-reports/junit-report'
		}));

		fs.emptyDir('screenshots/', function (err) {
			console.log(err);
		});

		jasmine.getEnv().addReporter({
			specDone: function (result) {
				if (result.status === 'failed') {
					browser.getCapabilities().then(function (caps) {
						var browserName = caps.get('browserName');

						browser.takeScreenshot().then(function (png) {
							var testCaseName = (result.fullName).split('.');
							var stream = fs.createWriteStream('screenshots/' + browserName + '-' + testCaseName[0] + '.png');
							stream.write(new Buffer(png, 'base64'));
							stream.end();
						});
					});

				}

			}
		});
	},

	//Use seleniumServerJar path if the jar is started explicitly using 'java -jar' command
	//seleniumServerJar: 'C:/Users/ux006575/Documents/selenium-server-standalone-3.4.0.jar',

	seleniumPort: 4444,
	seleniumArgs: ['-browserTimeout=60'],

	framework: 'jasmine2',
	restartBrowserBetweenTests: false,

	capabilities: {
		browserName: 'chrome'
		// browserName : 'internet explorer'
	},
	// multiCapabilities :[

	//   { browserName: 'internet explorer',

	// } ,
	//   { browserName: 'chrome',


	// }


	//],
	baseUrl: 'https://qc-gcms-mex.int.thomsonreuters.com/',
	//baseUrl: 'https://client-gcms-mex.int.thomsonreuters.com/',


	params: {
		language: 'en', // es || en || pt
		jiraURL: 'http://ent.jira.int.thomsonreuters.com/browse/',
		defectURL: 'http://jira.legal.thomsonreuters.com:8090/browse/',
		valid_username: 'UX011352',
		valid_password: 'Welcome2018',
		env: 'qc',
		//env: 'client',
		BU: 'mexico'
	},


	suites: {
		documentStructure: documentStructureFile.mex.specs,
		ControlData: controlDataFile.mex.specs,
		statuteData: statuteDataFile.mex.specs,
		ContextIndex: contextIndexFile.mex.specs,
		authornotes: authorNotesFile.mex.specs,
		fixedsection: FixedSectionFile.mex.specs,
		// 	labels:LabelsFiles.mex.specs,
		productworkbench: productWorkbenchFile.mex.specs,
		dateInForce: dateInForceFile.mex.specs,
		editorialnotes: editorialNotesFile.mex.specs,
		statuteData: statuteDataFile.mex.specs,
		leftpanel: LeftPanelFile.mex.specs,
		rightpanel: RightPanelFile.mex.specs,
		legislativebody: legislativeBodyFile.spain.specs,
		publicationdata: PublicationDataFile.mex.specs,
		practicearea: practiceAreaFile.mex.specs,
		textVersion: textVersionFile.mex.specs,
		generalData: generalDataFile.mex.specs,
		documentCreation: documentCreationFile.spain.specs,
		originalText: originalTextFile.mex.specs,
		thesaurus: thesaurusFile.mex.specs,
		relationshipSection: relationshipSectionFiles.mex.specs,
		relationshipSearch: relationshipSearchFiles.mex.specs,

	},

	jasmineNodeOpts: {
		showColors: true,
		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval: 350000,
	},
	getPageTimeout: 120000,
	allScriptsTimeout: 999000000,
	//jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000
};