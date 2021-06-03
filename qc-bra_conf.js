var jasmineReporters = require('jasmine-reporters');
//var videoRetriever = require('./utils/video-retriever.js');

//var hubAddress = 'localhost';
//var hubAddress = '10.206.145.144'; //Site A
var hubAddress = '10.206.139.205'; //Site B

exports.config = {
	seleniumAddress: 'http://' + hubAddress + ':4444/wd/hub',

	capabilities: {
		browserName: 'internet explorer'
	},

	baseUrl: 'https://qc-gcms-br.int.thomsonreuters.com/',

	params: {
		language: 'en', // es || en || pt
		//valid_username: 'G146410',
		//valid_password: 'Thomson2016.02',
        valid_username: 'UX001254',
		valid_password: 'Naveen@trvdi17',
        env: 'qc',
        BU: 'br'
        
	},

	suites: {
        login: 'spec/login/*_spec.js',
		//legislation: 'spec/legislation/*_spec.js',
        authorSection: 'spec/legislation/sections/author-section/*_spec.js',
        //topicsubtopic: 'spec/legislation/sections/topic-subtopic/*_spec.js',
		controlDataSection: 'spec/legislation/sections/control-data/*_spec.js',
		dateInForceSection: 'spec/legislation/sections/date-in-force/*_spec.js',
		//documentTypeSection: 'spec/legislation/sections/document-type/*_spec.js',
		fixSectionSection: 'spec/legislation/sections/fix-section-and-general/*_spec.js',
		practiceAreaSection: 'spec/legislation/sections/practice-area/*_spec.js',
		//productWorkbenchSection: 'spec/legislation/sections/product-workbench/*_spec.js',
		publicationSection: 'spec/legislation/sections/publication-section/*_spec.js',
		relationshipSection: 'spec/legislation/sections/relationship-section/*_spec.js',
		thesaurusSection: 'spec/legislation/sections/thesaurus-section/*_spec.js',
		//restCrud: 'spec/rest/**/*_spec.js',
        //collectiveAgreementSection:'spec/legislation/sections/collective-agreement/*_spec.js',
        contextIndex: 'spec/legislation/sections/context-index/*_spec_abmg.js',
        //legislationDictionary: 'spec/legislation/sections/legislation-dictionary/*_spec.js',
        legislativebody:'spec/legislation/sections/legislative-body/*_spec.js', 
        
        //relationshipSection: 'spec/legislation/sections/relationship-section/legis-doc-product-relationship-add_spec.js',
        
       // publicationSection: 'spec/legislation/sections/publication-section/legis-doc-publication-section-delete-publication-data-block_spec.js',
        
        //authorSection: 'spec/legislation/sections/author-section/legis-doc-author-section-delete- original- note_spec.js',  
        
       // fixSectionSection: 'spec/legislation/sections/fix-section-and-general/legis-doc-fix-section-deletedoc-notpossible_spec.js',
        
       // contextIndex: 'spec/legislation/sections/context-index/legis-doc-context-index-delete-an-entry-associated-more-than-one-unit_spec_abmg.js',
       
	},

	onPrepare: function () {
		//Set up JUnitXmlReporter
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			consolidateAll: true,
			filePrefix: 'xmloutput',
			savePath: 'e2e-reports/junit-report'
		}));

		//jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
		//jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
	},

	/*onComplete: function () {
		var sessionId = browser.driver.session_.value_.id_;
		this.videoURL = "http://" + hubAddress + ":4444/grid/admin/HubVideoDownloadServlet/?sessionId=" + sessionId;
	},

	onCleanUp: function () {
		return new videoRetriever().save({
			environment: 'qc-arz',
			savePath: 'e2e-reports/video-report',
			videoURL: this.videoURL
		});
	},*/

	framework: 'jasmine2',

	jasmineNodeOpts: {
		showColors: true,
		// Default time to wait in ms before a test fails.
		//defaultTimeoutInterval: 30000,
		defaultTimeoutInterval: 240000
	},
    getPageTimeout: 240000,
    allScriptsTimeout: 240000,
    restartBrowserBetweenTests: true
};
