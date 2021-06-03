var testData = {
    qc: {
        spain: {
            marginal_id_xml: '139889525',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<parrafo></parrafo>',
            text2: '<parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo>',
            expectedXmlAfterReplacement: '<parrafo alineacion-texto="justificado"><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo></capa.texto></capa></unidad></unidad></texto></parrafo>',
        },
        br: {
            marginal_id_xml: '63003631',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<parrafo></parrafo>',
            text2: '<parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo>',
            expectedXmlAfterReplacement: '<parrafo alineacion-texto="justificado"><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo></parrafo>',
        },
        mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<parrafo></parrafo>',
            text2: '<parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo>',
            expectedXmlAfterReplacement: '<parrafo alineacion-texto="justificado"><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo></parrafo>',
        },

        gulf: {

            marginal_id_xml: '67616488',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<paragraph></paragraph>',
            text2: '<paragraph>This is for testing purpose in gulf</paragraph>',
            expectedXmlAfterReplacement:'<paragraph text-align="justified"><text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph>This is for testing purpose in gulf</paragraph></group-text></group></unit></unit></text></paragraph>',


        },




    },
    client: {
        spain: {
            marginal_id_xml: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<parrafo></parrafo>',
            text2: '<parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo>',
          expectedXmlAfterReplacement: '<parrafo alineacion-texto="justificado"><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo></capa.texto></capa></unidad></unidad></texto></parrafo>',
        },

        br: {
            marginal_id_xml: '63003631',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<parrafo></parrafo>',
            text2: '<parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo>',
            expectedXmlAfterReplacement: '<parrafo alineacion-texto="justificado"><parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo></parrafo>',
        },

        mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<parrafo></parrafo>',
            text2: '<parrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo>'

        },

        gulf:{
            
            marginal_id_xml: '67616488',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            change_history: 'Change history',
            replace: 'Replace',
            justify: 'Justify',
            text1: '<paragraph></paragraph>',
            text2: '<paragraph>This is for testing purpose in gulf</paragraph>',
            expectedXmlAfterReplacement:'<paragraph text-align="justified"><text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph>This is for testing purpose in gulf</paragraph></group-text></group></unit></unit></text></paragraph>',

            
            
        }
    }
};

module.exports = testData;