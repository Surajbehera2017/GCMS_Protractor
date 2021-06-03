var testData = {
    qc: {
        spain: {
            marginal_id_xml: '139889525',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterReplacement: '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

        },

        br: {
            marginal_id_xml: '63003631',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterReplacement: '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

        },

        mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterReplacement: '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',

        },

        gulf:{
            marginal_id_xml: '67616524',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>',
            expectedXmlAfterReplacement: '<original-highlight font-weight="bold" font-style="italics"><nota ref="test" o=""/></original-highlight>note<abstract.summary></abstract.summary>',


        },


    },
    client: {
        spain: {
            marginal_id_xml: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>'
        },

        br: {
            marginal_id_xml: '63003631',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>'

        },

        mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>'
        },

        gulf:{
            
            marginal_id_xml: '67616524',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            replace: 'Replace',
            oldxmltext: '<text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>'

        },
    }
};

module.exports = testData;