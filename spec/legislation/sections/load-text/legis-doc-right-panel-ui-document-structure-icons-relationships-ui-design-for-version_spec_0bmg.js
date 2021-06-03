var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');

var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');

var LoginPage = require('../../../../po/login.po.js');
//var LoginPage = require('../../po/login.po.js');

var section;
var legisDocDisplayPage;

describe('Legislation Document Display - Right Panel - Document Structure - icons - Relationships', function () {

	beforeEach(function () {
        
       /*browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var loginPage = new LoginPage();

		loginPage.get().then(function () {
			loginPage.setLanguage(params.language).then(function (loginPage) {
				loginPage.loginWithValidCredentials(params.valid_username, params.valid_password).then(function (wipPage) {
                    
                    
                       
				});
			});
		}); */
        browser.ignoreSynchronization = false;
        
		legisDocDisplayPage = new LegislationDocumentDisplayPage();
		
        legisDocDisplayPage.get(testData.legislation.sections.load_text.marginal_id_for_rel_icon);
  var loginpopup =  element(by.model('credentials.username'));
    loginpopup.isPresent().then(function(result) {
    if ( result ) {
       element(by.model('credentials.username')).sendKeys(params.valid_username);
       element(by.model('credentials.password')).sendKeys(params.valid_password);
       element(by.css('div.modal-footer button.btn.btn-primary.ng-binding')).click();
        browser.waitForAngular();
        } else {
        
    }
                          
       
	});
		
		
	});

	it('should verify UI design for version', function () {
        legisDocDisplayPage = new LegislationDocumentDisplayPage();
        section = legisDocDisplayPage.sections.loadText;
        
       
            section.clickOnDocumentStructureTab.then(function(){
                expect(section.isDisplayedRelationshipNoteIcons).toBeTruthy();
                section.clickOnRelationShipIconHavingAllOptions.then(function(){
                    section.clickOnRelationshipAll.then(function(){
                        expect(section.isDisplayedRelationshipTable).toBeTruthy();
                        section.closeRelationshipTable.then(function(){
                            section.clickOnEffectiveness.then(function(){
                                expect(section.isDisplayedRelationshipTable).toBeTruthy();
                                section.closeRelationshipTable.then(function(){
                                    section.clickSource.then(function(){
                                    expect(section.isDisplayedRelationshipTable).toBeTruthy();
                                    section.closeRelationshipTable.then(function(){
                                        section.clickOnTarget.then(function(){
                                            expect(section.isDisplayedRelationshipTable).toBeTruthy();
                                            section.closeRelationshipTable.then(function(){
                                                section.clickOnAnnotations.then(function(){
                                                    expect(section.isDisplayedRelationshipTable).toBeTruthy();
                                                    section.closeRelationshipTable.then(function(){
                                                        section.clickOnAnnotationsSource.then(function(){
                                                            expect(section.isDisplayedRelationshipTable).toBeTruthy();
                                                            section.closeRelationshipTable.then(function(){
                                                                section.clickOnAnnotationsTarget.then(function(){
                                                                    expect(section.isDisplayedRelationshipTable).toBeTruthy();
                                                                    section.closeRelationshipTable.then(function(){
                            
                                                                    });
                                                                });
                                                            });
                                                        });
                            
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        });
                    });
                });
            });
            
        
		
		
	});
});



