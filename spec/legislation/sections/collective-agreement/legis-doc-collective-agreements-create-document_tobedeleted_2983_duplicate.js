var params = browser.params;
//i18n basic support
var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
// test data support for various BU's
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');
var collectiveAgreementSection = require('../../../../po/document/edition/legis/sections/collective-agreement/collective-agreement.po.js');
var loadedData = testData.legislation.sections.collectiveagreement;

describe("Collective Agreements", function () {
     
    beforeEach(function () {
        
                browser.ignoreSynchronization = false;
           /*     new LegislationDocumentEditionPage().get(loadedData.marginal_id);
                browser.waitForAngular();
                collectiveAgreementSection.urlLoad(params.valid_username,params.valid_password);
                browser.waitForAngular();*/
                browser.get('https://qc-gcms-aut.int.thomsonreuters.com/GCMSWeb/legis/doMenu.do?dispatch=resu');
              expect(browser.getTitle()).toContain('Thomson Reuters');
               
           });

    it('should create a new document', function () {
        
        expect(collectiveAgreementSection.hascreatNewDocument()).toEqual(true);
        collectiveAgreementSection.clickcreatNewDocument();
    //    collectiveAgreementSection.selectcode();
    //    collectiveAgreementSection.clickcalculate();
     //   collectiveAgreementSection.clickadd();

    });

    xit('should select Document Subtype and Jurisdiction from Document Type', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveAgreementSection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        selectDropdownbyNum(collectiveAgreementSection.selectDocumentType1, 2);//sets the drop down to the first index which has the string text of  Convenio Colectivo
        expect(collectiveAgreementSection.selectDocumentType1.$('option:checked').getText()).toEqual('Convenio Colectivo');

        collectiveAgreementSection.DocumentTypeexpandable.expand.then(function () {
            expect(collectiveAgreementSection.hasjurisdiction).toEqual(true);
            collectiveAgreementSection.addjurisdiction('Barcelona').then(function () {
                //expect(collectiveAgreementSection.hasItem('Barcelona')).toEqual(true);
            });
        });
    });
    xit('shoud select Statute type, Precision and date,Main-Keyword and Abstract in Legislative Body section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveAgreementSection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveAgreementSection.LegislativeSectionexpandable.isExpanded).toEqual(false);
        collectiveAgreementSection.LegislativeSectionexpandable.expand.then(function () {
            expect(collectiveAgreementSection.LegislativeSectionexpandable.isExpanded).toEqual(true);
            collectiveAgreementSection.addlegislativebody('Ayuntamiento de Barcelona').then(function () {
               
                collectiveAgreementSection.addstatutetype('Aclaración').then(function () {
                    collectiveAgreementSection.clickprecisiondate.then(function () {
                        collectiveAgreementSection.addMainKeyword.then(function () {
                            
                        });
                    });
                });
            });
        });
        
    });

    xit('shoud select publication ,Date Number Series and Order in Publication section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveAgreementSection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveAgreementSection.PublicationSectionexpandable.isExpanded).toEqual(false);
        collectiveAgreementSection.PublicationSectionexpandable.expand.then(function () {
            collectiveAgreementSection.addpubliction('BO. Barcelona').then(function () {
                collectiveAgreementSection.adddatenumberseries('26/02/2015 2015').then(function () {


                });

            });

        });

        
    });

    xit('shoud select Practice Area in Practice Area section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveAgreementSection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveAgreementSection.Practiceareasectionexpandable.isExpanded).toEqual(false);
        collectiveAgreementSection.Practiceareasectionexpandable.expand.then(function () {
            collectiveAgreementSection.addpracticearea('Civil').then(function () {
                
                //by.css('div[onselect="practiceArea.addManualCollection"]')
            });
        });
       

    });
    xit('shoud select Company and Subrange in Collective Agreements section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveAgreementSection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        collectiveAgreementSection.clickcompanySelect.then(function () {
            expect(collectiveAgreementSection.haschangeCompanyserchbox).toEqual(true);
            collectiveAgreementSection.changecompany('3COM Iberia').then(function () {
                
                expect(collectiveAgreementSection.hascompanysearchButton).toEqual(true);
                collectiveAgreementSection.clickcompanysearchButton.then(function () {
                    
                    collectiveAgreementSection.clickitemlistforcompanynew.then(function () {
                        
                        expect(collectiveAgreementSection.containsItem()).toContain('3COM Iberia');
                    });
                });

            });
        });

        
    });
    xit('should be select subtype and sub range', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveAgreementSection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveAgreementSection.expandable.isExpanded).toEqual(false);
        collectiveAgreementSection.expandable.expand.then(function () {
            expect(collectiveAgreementSection.expandable.isExpanded).toEqual(true);
            collectiveAgreementSection.clicksubrange.then(function () {
                collectiveAgreementSection.SelectSubRangeActa.then(function () {
                    //collectiveAgreementSection.clicksectorandsubsector.then(function () {
                        //collectiveAgreementSection.clickleafterm.then(function () {
                            //collectiveAgreementSection.selectsectorradioButton.then(function () {
                                //collectiveAgreementSection.clickselectButton.then(function () {
                                    //collectiveAgreementSection.selectcode.then(function () {
                                      //  collectiveAgreementSection.clickcalculate.then(function () {
                                        //    collectiveAgreementSection.clickadd.then(function () {
                                                
                            collectiveAgreementSection.createAbstractText.then(function(){
                               //browser.ignoreSynchronization = false; 
                            
                                                collectiveAgreementSection.create;
                                });
                                            //});
                                        //});
                                    //});
                                //});
                            //});

                        //});


                    //});
                });

            });
        });
    });
    //by.linkText('Create Abstract'):
    var selectDropdownbyNum = function (element, optionNum) {
        if (optionNum) {
            var options = element.getWebElement().findElements(by.tagName('option'))
                .then(function (options) {
                    options[optionNum].click();

                });

        }
    };
});



/* browser.ignoreSynchronization = true;
        browser.get('https://qc-gcms-aut.int.thomsonreuters.com/GCMSWeb/legis/doMenu.do?dispatch=resu');
        expect(browser.getTitle()).toContain('Thomson Reuters');*/