var params = browser.params;
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.1.js');
// test data support for various BU's
var global = require('../../../../po/document/display/legis/sections/global-function/global-functions.po.js');
var testdata = require('../../../../test-data/' + params.env + '/' + params.BU + '.testdata.js');
var authorNotes = require('../../../../po/document/display/legis/sections/author-notes/author-notes.po.js');
var loadedData = testdata.legislation.sections;

describe('Author Notes', function () {

    beforeEach(function () {

        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = LegislationDocumentDisplayPage;
        legisDocDisplayPage.get(loadedData.author_notes.marginal_idaut1);
        browser.sleep(5000);
        authorNotes.urlLoad(params.valid_username, params.valid_password);
        browser.sleep(5000);
        browser.waitForAngular();

    });

    afterEach(function () {//Close additional tab
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[0]);
            for (var i = 1; i < handles.length; i++) {
                browser.switchTo().window(handles[i]).then(function () {
                    browser.close();
                }, function (error) {
                    browser.switchTo().window(handles[0]);
                });
            }
            browser.switchTo().window(handles[0]);
        });
    });

    //Method: TC02 -Add 1.0 Editor - Aranzadi - Edit Author note
    /*cannot mapped to JIRA*/

    it('author Note XML', function () {

        browser.sleep(2000);
        global.clickOnSectionButton('Author Notes', 'viewall');
        global.clickOnFilterAndEnterValue("input-filter-author-note-unit-detail", "DA.10");
        browser.sleep(5000);
        authorNotes.selectActionFromTable("edit");
        browser.sleep(5000);

        browser.getAllWindowHandles().then(function (Handle1) {
            browser.switchTo().window(Handle1[1]).then(function () {
                browser.sleep(3000);
                authorNotes.clickonXMLorVisual("Edit (XML)");
                //<texto><parrafo><en-origen peso-fuente="negrita">1.-</en-origen> La redacción del apartado 1 de este artículo ha sido modificada varias veces a medida que se han ido creando los diferentes organismos que en él se relacionan. La versión actual procede de la disp. final 1ª de la <ca><to>Ley 3/2013, de 4 junio</to><ta> (<cita ref="RCL\2013\840">RCL 2013, 840</cita>)</ta></ca>, de creación de la Comisión Nacional de los Mercados y la Competencia, que suprime ocho de los anteriores Organismos Reguladores.</parrafo></texto>
                authorNotes.replaceWholeXMLTextInUnitPopUpUsingReplaceButton('<texto><parrafo>This is for testing purpose</parrafo></texto>');
                global.clickOnNavigationOrCloseButton("editor.accept");
                global.clickOnNavigationOrCloseButton("AuthorNotesAddModalCtrl.addNewAuthorNote");
                
            })
            browser.switchTo().window(Handle1[0]);
        })
        browser.sleep(5000);
        authorNotes.selectActionFromTable("view");
        browser.sleep(5000);
        global.getDateAndVerify("(//span[@class='left ng-binding'])[4]");
            
    });
});




