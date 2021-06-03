var testData = {
    qc: {
        spain: {
            marginal_id: '139889525',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            expectedXmlAfterReplacement: '<replaced definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replaced><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.replaced></capa></unidad></unidad></replaced>',
            replaceAllText: 'texto',
            replaceWithText:'replaced',

        },
        mexico: {
            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            replaceAllText: 'texto',
            replaceWithText:'replaced',
            expectedXmlAfterReplacement: '<replaced definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replaced><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.replaced></capa></unidad></unidad></replaced>',


        },
        br: {
            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            expectedXmlAfterReplacement: '<replaced definitivo="S" idioma="por"><unidad><unidad unidad="" parte="" ><capa><capa.replaced><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.replaced></capa></unidad></unidad></replaced>',
            replaceAllText: 'texto',
            replaceWithText:'replaced',

        },

        gulf:{

            marginal_id: '67616616',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            expectedXmlAfterReplacement:'<replaced final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-replaced><title><title-section unit="" part="" complement=""/><title-replaced></title-replaced></title><paragraph></paragraph></group-replaced></group></unit></unit></replaced>',
            replaceAllText: 'text',
            replaceWithText:'replaced',


        },

    },
    client: {
        spain: {
            marginal_id: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            expectedXmlAfterReplacement: '<replaced definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replaced><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.replaced></capa></unidad></unidad></replaced>',
            replaceAllText: 'texto',
            replaceWithText:'replaced',

        },
        mexico: {
            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            replaceAllText: 'texto',
            replaceWithText:'replaced',
            expectedXmlAfterReplacement: '<replaced definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.replaced><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.replaced></capa></unidad></unidad></replaced>',

            

        },
        br: {
            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            expectedXmlAfterReplacement: '<replaced definitivo="S" idioma="por"><unidad><unidad unidad="" parte="" ><capa><capa.replaced><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.replaced></capa></unidad></unidad></replaced>',
            replaceAllText: 'texto',
            replaceWithText:'replaced',

        },

        gulf:{

            marginal_id: '67616616',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            replace: 'Replace',
            replace_all: 'Replace All',
            expectedXmlAfterReplacement:'<replaced final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-replaced><title><title-section unit="" part="" complement=""/><title-replaced></title-replaced></title><paragraph></paragraph></group-replaced></group></unit></unit></replaced>',
            replaceAllText: 'text',
            replaceWithText:'replaced',


        }

    }
};

module.exports = testData; 