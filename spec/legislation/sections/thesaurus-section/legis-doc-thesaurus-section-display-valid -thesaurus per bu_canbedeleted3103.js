var params = browser.params;

//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
var thesauruspage = require('../../../../po/document/display/legis/sections/thesaurus-section/thesaurus-section.po.js');
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
//test data 
var testData = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var loaded = testData.legislation.sections.thesaurus_section;

describe('Thesaurus', function () {//('should verify Add,import and viewAll is present in thesaurus section or not ', function () {

    beforeEach(function () {


        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loaded.marginal_id);
        thesauruspage.urlLoad(params.valid_username, params.valid_password);


    });

    //DOUBT
    it('Should see only the allowed Thesaurus of my current BU after clicking edit', function () {

        global.clickOnSectionButton('Thesaurus', 'viewall');

        browser.waitForAngular();
        //expect( thesauruspage.hasThesaurusTable).toEqual(true);
        thesauruspage.clickOnbuttonInsideSectionTable('Show Filters');
        thesauruspage.enterThesaurusTerm('60.10');
        thesauruspage.thesaurusAction('edit');

        browser.waitForAngular();
        /* if( thesauruspage.isComboxDisplayed)
             {
                  thesauruspage.clickCloseEditContentIndex();
                  thesauruspage.clickpencilIconThesaurusTable();
                 
             } */
        //browser.sleep(8000);

        browser.getAllWindowHandles().then(function (handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(function () {


                //thesauruspage.clickeditthesauruscombox();
                var BU = params.BU;
                switch (BU) {

                    case "spain":

                        expect(global.selectSearchNameAndValue('Select Thesaurus', 'CNAE')).toEqual(true);
                        expect(global.selectSearchNameAndValue('Select Thesaurus', 'CONVENIOS')).toEqual(true);
                        expect(global.selectSearchNameAndValue('Select Thesaurus', 'SECTORES')).toEqual(true);
                        expect(global.selectSearchNameAndValue('Select Thesaurus', 'INDICE AYUDAS Y SUBVENCIONES')).toEqual(true);
                        //expect(global.selectSearchNameAndValue('MEJORAS VOLUNTARIAS')).toEqual(true);
                        expect(global.selectSearchNameAndValue('Select Thesaurus', 'INDICE COMUN')).toEqual(true);
                        break;
                    case "br":
                        expect(thesauruspage.clickSelectThesaurusVerifyOption('INDICE COMUN')).toEqual(true);
                        expect(thesauruspage.clickSelectThesaurusVerifyOption('SECTOR')).toEqual(true);
                        break;
                    case "gulf":
                        expect(thesauruspage.clickSelectThesaurusVerifyOption('INDICE COMUN')).toEqual(true);
                        expect(thesauruspage.clickSelectThesaurusVerifyOption('QCB Glossary')).toEqual(true);
                        break;
                    case "mex":
                        expect(thesauruspage.clickSelectThesaurusVerifyOption('INDICE COMUN')).toEqual(true);
                }


            });
            browser.close();
           browser.switchTo().window(handles[0])
        });
    });




});

