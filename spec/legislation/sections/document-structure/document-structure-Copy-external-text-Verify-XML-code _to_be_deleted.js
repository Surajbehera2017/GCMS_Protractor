var params = browser.params;
//i18n basic support
var I18n = require('../../../../i18n/' + params.language + '.i18n.js');
var jiraNumber = 'GCMSQABANG-1752';
var testData = require('../../../../test-data/Jira_TestData/' + jiraNumber + '.js');
var rightpanelpage = require('../../../../po/document/display/legis/sections/right-panel/right-panel.po.js');
var LegislationDocumentDisplayPage = require('../../../../po/document/display/legis/legis-doc-display.po.js');
//var loaded = testData.legislation.sections.document_structure;
var loadedData = testData[params.env][params.BU]

//var xmlConten = '<parrafo>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</parrafo><parrafo alineacion-texto="justificado"><en-origen peso-fuente="negrita">Lorem ipsum dolor</en-origen><en-origen estilo-fuente="cursiva">sit amet, consectetur</en-origen><en-origen peso-fuente="negrita" estilo-fuente="cursiva">adipiscing elit. Ut</en-origen><en-origen decoracion-texto="subrayado">euismod lacus sed sapie</en-origen>n<en-origen decoracion-texto="superrayado">sagittis rutrum ut</en-origen><en-origen decoracion-texto="tachado">nec risus. Nullam</en-origen> bibendum viverra lacinia. Vestibulum hendrerit mollis ante a vehicula. Cras ex erat, cursus non eros ut, finibus dapibus est. Aenean felis ipsum, tempor vel ex sit amet, scelerisque elementum elit. Nulla porttitor et purus sit amet lobortis. Praesent egestas, enim ut auctor molestie, urna velit feugiat lorem, at mollis risus ipsum in lorem.</parrafo><parrafo alineacion-texto="izquierda" espaciado-anterior="simple"><en-origen peso-fuente="negrita">Lorem ipsum dolor</en-origen><en-origen estilo-fuente="cursiva">sit amet, consectetur</en-origen><en-origen peso-fuente="negrita" estilo-fuente="cursiva">adipiscing elit. Ut</en-origen><en-origen decoracion-texto="subrayado">euismod lacus sed sapie</en-origen>n<en-origen decoracion-texto="superrayado">sagittis rutrum ut</en-origen><en-origen decoracion-texto="tachado">nec risus. Nullam</en-origen> bibendum viverra lacinia. Vestibulum hendrerit mollis ante a vehicula. Cras ex erat, cursus non eros ut, finibus dapibus est. Aenean felis ipsum, tempor vel ex sit amet, scelerisque elementum elit. Nulla porttitor et purus sit amet lobortis. Praesent egestas, enim ut auctor molestie, urna velit feugiat lorem, at mollis risus ipsum in lorem.</parrafo><parrafo alineacion-texto="derecha" espaciado-anterior="simple"> <en-origen peso-fuente="negrita">Lorem ipsum dolor</en-origen> <en-origen estilo-fuente="cursiva">sit amet, consectetur</en-origen> <en-origen peso-fuente="negrita" estilo-fuente="cursiva">adipiscing elit. Ut</en-origen> <en-origen decoracion-texto="subrayado">euismod lacus sed sapie</en-origen>n <en-origen decoracion-texto="superrayado">sagittis rutrum ut</en-origen> <en-origen decoracion-texto="tachado">nec risus. Nullam</en-origen> bibendum viverra lacinia. Vestibulum hendrerit mollis ante a vehicula. Cras ex erat, cursus non eros ut, finibus dapibus est. Aenean felis ipsum, tempor vel ex sit amet, scelerisque elementum elit. Nulla porttitor et purus sit amet lobortis. Praesent egestas, enim ut auctor molestie, urna velit feugiat lorem, at mollis risus ipsum in lorem. </parrafo><parrafo alineacion-texto="centrado" espaciado-anterior="simple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod lacus sed sapien sagittis rutrum ut nec risus. Nullam bibendum viverra lacinia. Vestibulum hendrerit mollis ante a vehicula. Cras ex erat, cursus non eros ut, finibus dapibus est. Aenean felis ipsum, tempor vel ex sit amet, scelerisque elementum elit. Nulla porttitor et purus sit amet lobortis. Praesent egestas, enim ut auctor molestie, urna velit feugiat lorem, at mollis risus ipsum in lorem. </parrafo>';

describe('Document-structure', function () {

    beforeAll(function () {
        browser.ignoreSynchronization = false;
        var legisDocDisplayPage = new LegislationDocumentDisplayPage();
        legisDocDisplayPage.get(loadedData.marginal_id);
        rightpanelpage.urlLoad(params.valid_username, params.valid_password);
    });

    /*
    * GCMSQABANG-1752:TC04 -xEditor - Copy external text - Paragraphs and styles - Unit edition - Verify XML code
    *
    */

    it('Copy external text Paragraphs and styles Unit edition Verify XML code.'+jiraNumber, function () {

        browser.driver.manage().window().maximize();
        browser.waitForAngular();
        rightpanelpage.clickDocumentStructure();
        browser.waitForAngular();
        rightpanelpage.ClickOnOriginalUnit(loadedData.unit,'Original');  // Select The first Original Label
        browser.waitForAngular();
        browser.sleep(2000);
        rightpanelpage.clickOnEditVisual(); // Click on Edit Visual Label
        browser.sleep(7000);
        browser.waitForAngular();
        browser.switchTo().frame('legistext'); // give id of iframe
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        browser.switchTo().frame('ext-gen1132');
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        rightpanelpage.selectAllAndDelete();  // Select all content and delete
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.switchTo().frame('legistext');
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        rightpanelpage.clickOnPasteDropdown();
        rightpanelpage.selectOptionFromPasteDropdown('Paste from XML');  // Select Paste External Text
        rightpanelpage.enterTextIntoPopup(0,loadedData.xmlContent);
        rightpanelpage.clickOnInsertOrCancel('Insert');
        browser.switchTo().defaultContent();
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        rightpanelpage.clickOnButtonForGlobal('Save');
        browser.waitForAngular();
        browser.sleep(12000);


    });
});
