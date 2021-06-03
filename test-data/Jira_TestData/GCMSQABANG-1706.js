var testData = {
    qc: {
        spain: {
            marginal_id: '139889525',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            search: 'Search',
            expectedXmlAfterReplacement: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            replaceAllText:'texto',
            replaceWithText:'replaced',


        },
        mexico: {
            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            search: 'Search',
            expectedXmlAfterReplacement: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            replaceAllText:'texto',
            replaceWithText:'replaced',


        },
        br: {
            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            search: 'Search',
            expectedXmlAfterReplacement:'<texto definitivo="S" idioma="por"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            replaceAllText:'texto',
            replaceWithText:'replaced',


        },

        // gulf:{
        //     marginal_id: '67616702',
        //     document_structure: 'DOCUMENT STRUCTURE',
        //     expected_option: 'Add new unit from XML editor',
        //     search: 'Search',
        //     expectedXmlAfterReplacement: '<texto final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-texto><title><title-section unit="" part="" complement=""/><title-texto></title-texto></title><paragraph></paragraph></group-texto></group></unit></unit></texto>',
        //     replaceAllText:'text',
        //     replaceWithText:'replaced',


            
        // },
    },
    client: {
        spain: {
            marginal_id: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            search: 'Search',
            expectedXmlAfterReplacement: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
        },
        mexico: {
            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            search: 'Search',
            expectedXmlAfterReplacement: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',

        },
        br: {
            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            search: 'Search',
            expectedXmlAfterReplacement:'<texto definitivo="S" idioma="por"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',

        },
    }
};

module.exports = testData; 