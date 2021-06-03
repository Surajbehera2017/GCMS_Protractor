var testData = {
    qc: {
        spain: {
            marginal_id: '139889525',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            expectedXmlAfterReplacement : '<replace definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replace><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            replaceAllText: 'texto',
            replaceWithText:'replace',


        },
        mexico: {
            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replaceAllText: 'texto',
            replaceWithText:'replace',
            expectedXmlAfterReplacement : '<replace definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replace><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',


        },
        br: {
            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            expectedXmlAfterReplacement: '<replace definitivo="S" idioma="por"><unidad><unidad unidad="" parte="" ><capa><capa.replace><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            replaceAllText: 'texto',
            replaceWithText:'replace',


        },

        gulf:{

            marginal_id:'67616524',
            document_structure:'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            replace:'Replace',
            replaceAllText: 'text',
            replaceWithText:'replace',
            expectedXmlAfterReplacement:'<replace final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>'
        }
    },
    client: {
        spain: {
            marginal_id: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            expectedXmlAfterReplacement : '<replace definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replace><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            replaceAllText: 'texto',
            replaceWithText:'replace',

        },
        mexico: {
            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replaceAllText: 'texto',
            replaceWithText:'replace',
            expectedXmlAfterReplacement : '<replace definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replace><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',


        },
        br: {
            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            expectedXmlAfterReplacement: '<replace definitivo="S" idioma="por"><unidad><unidad unidad="" parte="" ><capa><capa.replace><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            replaceAllText: 'texto',
            replaceWithText:'replace',


        },

        gulf:{

            marginal_id:'67616598',
            document_structure:'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            replace:'Replace',
            replaceAllText: 'text',
            replaceWithText:'replace',
            expectedXmlAfterReplacement:'<replace final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>'

        },
    }
};

module.exports = testData; 