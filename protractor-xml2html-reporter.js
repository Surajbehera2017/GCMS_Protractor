var xmlDocument = require('xmldoc');
var fileSystem = require('fs');
var fs = require('fs-extra');
var filePath = require('path');
var _ = require('lodash');


//stores informatations for every suite
var suitesData = [];

//stores data that is used for the whole report
var report = {
  url:'hello',
  name: '',
  browser: '',
  browserVersion: '',
  platform: '',
  time: new Date(),
  screenshotPath: '',
  modifiedSuiteName: false,
  screenshotsOnlyOnFailure: true,
  screenshotsOnlyOnFailure2: true
};

//stores statistics per one suite
var suite = {
  name: '',
  tests:0,
  failed:0,
  errors:0,
  skipped:0,
  passed:0,
  tests1:0,
  tests2:0,
  failed1:0,
  failed2:0,
  errors1:0,
  errors2:0,
  skipped1:0,
  skipped2:0,
  time:0,
  time1:0,
  time2:0,
};

//stores statistics for all suites
var allSuites = {
  tests: 0,
  failed: 0,
  errors: 0,
  skipped: 0,
  passed: 0,
  totalTime: 0,
  reportAs: 'TestCases'
};

//stores all suites summary (needed for piecharts)
var suitesSummary = {
  suites: 0,
  passed: 0,
  failed: 0
};


/** Function: getPath
 * Returns the path to the given file based on passed directory.
 *
 * Parameters:
 *    (String) filename - Filename
 *    (String) (optional) dir - directory to look for given file
 */
function getPath(filename, dir) {
  if (dir) {
    fs.ensureDirSync(dir);
    return filePath.join(dir, filename);
  } else {
    return filePath.join(__dirname, filename);
  }
}

function readFile(filename) {
  return fileSystem.readFileSync(filename, 'utf-8');
}

//time passed in seconds
function getTime(time) {
  var hours = Math.floor(time/3600);
  var minutes = Math.floor(time % 3600/60);
  var seconds = (time % 3600) % 60;

  return hours + 'h ' + minutes + 'min ' + seconds + 's';
}

var HTMLReport = function() {

  var generateSummaries = function(reportXml, report) {

    var count =0;
    var testStartedOn;
    var testCases;
    var totalCasesPerSuite;
	var testCases1;
    var totalCasesPerSuite1;
	var xmlData = fileSystem.readFileSync(reportXml, 'utf8');
    var testResultXml = new xmlDocument.XmlDocument(xmlData);
    var testSuites = testResultXml.childrenNamed('testsuite');
    testStartedOn = testSuites[0].attr.timestamp;
    totalSuites = testSuites.length;
	suitesSummary.suites = testSuites.length;
	
	 
     for (var i=0; i < totalSuites; i=count) {
	     suite.name = testSuites[i].attr.name;
	     suite.tests1 = parseInt(testSuites[i].attr.tests);
	     suite.tests = suite.tests1;
		 suite.failed1 = parseInt(testSuites[i].attr.failures);
		 suite.failed =  suite.failed1;
         suite.errors1 = parseInt(testSuites[i].attr.errors);
		 suite.errors =  suite.errors1;
         suite.skipped1 = parseInt(testSuites[i].attr.skipped);
		 suite.skipped = suite.skipped1;
		 suite.time1= parseInt(testSuites[i].attr.time);
		 suite.time = suite.time1;
		 if (suite.failed > suite.tests) {
             suite.failed = suite.tests;
             }
		 suite.passed = suite.tests - suite.failed - suite.errors - suite.skipped;
		 var p=0;
		 for  (var j=count; j<totalSuites-1; j=count)  {
		   if(testSuites[j].attr.name==testSuites[j+1].attr.name){
			 count=count+1;
			 p=p+1;
			 suite.tests2 = parseInt(testSuites[j+1].attr.tests);
			 suite.failed2 = parseInt(testSuites[j+1].attr.failures);
			 suite.errors2 = parseInt(testSuites[j+1].attr.errors);
			 suite.skipped2 = parseInt(testSuites[j+1].attr.skipped);
			 suite.time2= parseInt(testSuites[j+1].attr.time);
			 suite.tests = suite.tests + suite.tests2;
		     suite.failed =  suite.failed+suite.failed2;
		     suite.errors =  suite.errors + suite.errors2;
		     suite.skipped = suite.skipped+suite.skipped2;
		     suite.time = suite.time + suite.time2;
			 if (suite.failed > suite.tests) {
             suite.failed = suite.tests;
             }
		     suite.passed = suite.tests - suite.failed - suite.errors - suite.skipped;
			// console.log(suite.time);
			 
		 continue;
			}
			else{
				suite.passed=suite.passed+1;
				suite.failed=suite.failed-1;
				//count=count+1;
				break;
		   }
          
		  
		}
	   
		  if (suite.failed > suite.tests) {
             suite.failed = suite.tests;
             suite.passed = 0;
          }
		  
		  var testCasesNames = [];
		  var testCasesNames2 = [];
          var testCasesResults = [];
		  var testCasesResults2 =[];
          var testCasesTimes = [];
		  var testCasesTimes2 = [];
          var testCasesMessages = [];
          var screenshotsNamesOnFailure = [];
          var screenshotsNamesOnFailure2 = [];
		  
		   testCases = testSuites[i].childrenNamed('testcase');
           totalCasesPerSuite = testCases.length;
		 for (var j=0; j<totalCasesPerSuite; j++) {
		  if(testCases[j].firstChild == null) {
          testCasesResults.push('Passed');
        } else if (testCases[j].firstChild.name == 'failure'){
          testCasesResults.push('Failed');
        } else if (testCases[j].firstChild.name == 'skipped'){
          testCasesResults.push('Skipped');
        }
		  testCasesTimes.push(Math.ceil(testCases[j].attr.time));
		  testCasesNames.push(testCases[j].attr.name);
		  
		  if (testCasesResults[j] != 'Failed' && report.screenshotsOnlyOnFailure) {
            screenshotsNamesOnFailure.push('None');
          } else {
           if (report.modifiedSuiteName) {
              screenshotsNamesOnFailure.push(report.browser +'-'+ suite.name.substring(suite.name.indexOf(".")+1) + ' ' + ((testCasesNames2[j]).split('&'))[0]  + '.png');
             //screenshotsNamesOnFailure.push(report.browser +'-'+ testSuites[i].attr.name.substring(testSuites[i].attr.name.indexOf(".")+1) + ' ' + testCasesNames[j] + '.png');
            }
            else {
              screenshotsNamesOnFailure.push(report.browser +'-'+ suite.name + ' ' + ((testCasesNames2[j]).split('&'))[0]  + '.png');
           }
          }
		}		
		if(i < totalSuites-1){
		for(var k=1;k<=p;k++){
	    if (testSuites[i].attr.name==testSuites[i+1].attr.name){
		   testCases1 = testSuites[i+k].childrenNamed('testcase');
           totalCasesPerSuite1 = testCases1.length;
           for (var j=0; j<totalCasesPerSuite1; j++) {
        //get test cases results
           if(testCases1[j].firstChild == null) {
          testCasesResults2.push('Passed');
        } else if (testCases1[j].firstChild.name == 'failure'){
          testCasesResults2.push('Failed');
        } else if (testCases1[j].firstChild.name == 'skipped'){
          testCasesResults2.push('Skipped');
        }
		  testCasesTimes2.push(testCases1[j].attr.time);
		  testCasesNames2.push(testCases1[j].attr.name);
		  
		  
		  if (testCasesResults2[j] != 'Failed' && report.screenshotsOnlyOnFailure) {
            screenshotsNamesOnFailure2.push('None');
          } else {
           if (report.modifiedSuiteName) {
             screenshotsNamesOnFailure2.push(report.browser +'-'+ suite.name.substring(suite.name.indexOf(".")+1) + ' ' + ((testCasesNames2[j]).split('&'))[0]  + '.png');
            }
           else {
              screenshotsNamesOnFailure2.push(report.browser +'-'+ suite.name + ' ' + ((testCasesNames2[j]).split('&'))[0] + '.png');
            }
          }
		  

		  
		  
		}
        }		 
	    }
		testCasesResults = testCasesResults.concat(testCasesResults2); 
		testCasesNames = testCasesNames.concat(testCasesNames2);
		testCasesTimes = testCasesTimes.concat(testCasesTimes2);
		screenshotsNamesOnFailure = screenshotsNamesOnFailure.concat(screenshotsNamesOnFailure2);
		console.log(screenshotsNamesOnFailure);
		}	
		
		
		
		
		
	 suitesData.push({'keyword': 'TestSuite', 'name': suite.name, 'testcases': testCasesNames, 'testcasesresults':testCasesResults, 'testcasestimes': testCasesTimes, 'testcasesmessages': testCasesMessages, 'screenshotsNames':screenshotsNamesOnFailure, 'tests': suite.tests, 'failed': suite.failed, 'errors': suite.errors, 'skipped': suite.skipped, 'passed': suite.passed});

      //total statistics
      allSuites.tests += suite.tests;
      allSuites.failed += suite.failed;
      allSuites.errors += suite.errors;
      allSuites.passed += suite.passed;
      allSuites.skipped += suite.skipped;
      allSuites.totalTime += suite.time;

      //suites summary
      if (suite.failed >0) {
        suitesSummary.failed += 1;
      } else {
        suitesSummary.passed += 1;
      }
		count=count+1; 
      }  
    
      }

      
    
  

this.from = function(reportXml, testConfig) {
    //set report data based on testConfig
    report.name = testConfig.reportTitle || 'Test Execution Report';
    report.screenshotPath = testConfig.screenshotPath || './screenshots';
    report.browser = testConfig.testBrowser || 'unknown';
    report.browserVersion = testConfig.browserVersion || 'unknownBrowser';
    report.modifiedSuiteName = testConfig.modifiedSuiteName || false;
    if (testConfig.screenshotsOnlyOnFailure == undefined) {
      report.screenshotsOnlyOnFailure = true;
    } else {
      report.screenshotsOnlyOnFailure = testConfig.screenshotsOnlyOnFailure;
    }
    // report.platform = testConfig.platform;

    //generate statistics
    var testDetails = generateSummaries(reportXml, report);

    //set report data based on statistics
    allSuites.totalTime = getTime(allSuites.totalTime);
    report.time = report.time.toLocaleString();

    //write to html file
    var testOutputPath = getPath('/' + report.browser + '-test-report.html', testConfig['outputPath'] || './');
    fileSystem.writeFileSync(
      testOutputPath,
      _.template(readFile(getPath('index.tmpl')))({
        styles: readFile(getPath('style.css')),
        report: report,
        allSuites: allSuites,
        suitesSummary: suitesSummary,
        testsuites: _.template(readFile(getPath('testsuites.tmpl')))({
          suitesData: suitesData,
          _: _, suite: suite,
          report: report
        }),
        piechart: readFile(getPath('piechart.js'))
      })

    );
  }

};

module.exports = HTMLReport;
