var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');

var LegislationDocumentEditionPage = require('../../../../po/document/edition/legis/legis-doc-edition.po.js');

describe('Legislation Document Display-Collective-Agreement-Create Document', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('https://qc-gcms-aut.int.thomsonreuters.com/GCMSWeb/legis/doMenu.do?dispatch=resu');
        expect(browser.getTitle()).toContain('Thomson Reuters');

    });

    it('should create a new document', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveagreementsection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveagreementsection.hascreatNewDocument).toEqual(true);
        collectiveagreementsection.clickcreatNewDocument.then(function () {

            //by.css('span[translate="AddNewDocument.titleAdd"]')
            browser.ignoreSynchronization = false;
            collectiveagreementsection.selectcode.then(function () {
                collectiveagreementsection.clickcalculate.then(function () {
                    collectiveagreementsection.clickadd.then(function () {

                    });
                });
            });


        });

    });
//tes
    it('should select Document Subtype and Jurisdiction from Document Type', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveagreementsection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        selectDropdownbyNum(collectiveagreementsection.selectDocumentType1, 2);//sets the drop down to the first index which has the string text of  Convenio Colectivo
        expect(collectiveagreementsection.selectDocumentType1.$('option:checked').getText()).toEqual('Convenio Colectivo');

        collectiveagreementsection.DocumentTypeexpandable.expand.then(function () {
            expect(collectiveagreementsection.hasjurisdiction).toEqual(true);
            collectiveagreementsection.addjurisdiction('Barcelona').then(function () {
                //expect(collectiveagreementsection.hasItem('Barcelona')).toEqual(true);
            });
        });
    });
    it('shoud select Statute type, Precision and date,Main-Keyword and Abstract in Legislative Body section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveagreementsection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveagreementsection.LegislativeSectionexpandable.isExpanded).toEqual(false);
        collectiveagreementsection.LegislativeSectionexpandable.expand.then(function () {
            expect(collectiveagreementsection.LegislativeSectionexpandable.isExpanded).toEqual(true);
            collectiveagreementsection.addlegislativebody('Ayuntamiento de Barcelona').then(function () {
               
                collectiveagreementsection.addstatutetype('Aclaración').then(function () {
                    collectiveagreementsection.clickprecisiondate.then(function () {
                        collectiveagreementsection.addMainKeyword.then(function () {
                            
                        });
                    });
                });
            });
        });
        
    });

    it('shoud select publication ,Date Number Series and Order in Publication section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveagreementsection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveagreementsection.PublicationSectionexpandable.isExpanded).toEqual(false);
        collectiveagreementsection.PublicationSectionexpandable.expand.then(function () {
            collectiveagreementsection.addpubliction('BO. Barcelona').then(function () {
                collectiveagreementsection.adddatenumberseries('26/02/2015 2015').then(function () {


                });

            });

        });

        
    });

    it('shoud select Practice Area in Practice Area section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveagreementsection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveagreementsection.Practiceareasectionexpandable.isExpanded).toEqual(false);
        collectiveagreementsection.Practiceareasectionexpandable.expand.then(function () {
            collectiveagreementsection.addpracticearea('Civil').then(function () {
                
                //by.css('div[onselect="practiceArea.addManualCollection"]')
            });
        });
       

    });
    it('shoud select Company and Subrange in Collective Agreements section ', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveagreementsection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        collectiveagreementsection.clickcompanySelect.then(function () {
            expect(collectiveagreementsection.haschangeCompanyserchbox).toEqual(true);
            collectiveagreementsection.changecompany('3COM Iberia').then(function () {
                
                expect(collectiveagreementsection.hascompanysearchButton).toEqual(true);
                collectiveagreementsection.clickcompanysearchButton.then(function () {
                    
                    collectiveagreementsection.clickitemlistforcompanynew.then(function () {
                        
                        expect(collectiveagreementsection.containsItem()).toContain('3COM Iberia');
                    });
                });

            });
        });

        
    });
    it('should be select subtype and sub range', function () {
        var collectiveagreementeditpage = new LegislationDocumentEditionPage();
        var collectiveagreementsection = collectiveagreementeditpage.sections.collectiveAgreementSection;
        expect(collectiveagreementsection.expandable.isExpanded).toEqual(false);
        collectiveagreementsection.expandable.expand.then(function () {
            expect(collectiveagreementsection.expandable.isExpanded).toEqual(true);
            collectiveagreementsection.clicksubrange.then(function () {
                collectiveagreementsection.SelectSubRangeActa.then(function () {
                    //collectiveagreementsection.clicksectorandsubsector.then(function () {
                        //collectiveagreementsection.clickleafterm.then(function () {
                            //collectiveagreementsection.selectsectorradioButton.then(function () {
                                //collectiveagreementsection.clickselectButton.then(function () {
                                    //collectiveagreementsection.selectcode.then(function () {
                                      //  collectiveagreementsection.clickcalculate.then(function () {
                                        //    collectiveagreementsection.clickadd.then(function () {
                                                
                            collectiveagreementsection.createAbstractText.then(function(){
                               //browser.ignoreSynchronization = false; 
                            
                                                collectiveagreementsection.create;
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
