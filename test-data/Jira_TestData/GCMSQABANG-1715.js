var testData = {
    qc: {
        spain: {

            marginal_id: '1570752',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterclick : '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>', 

        },
        mexico: {

            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterclick : '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>', 


        },
        br: {

            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterclick : '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>', 


        },

        gulf:{

            marginal_id: '67616506',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>',
            expectedXmlAfterclick : '<original-highlight font-weight="bold" font-style="italics"></original-highlight><text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>', 



        },
    },
    client: {
        spain: {
            marginal_id: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterclick : '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>', 

        },
        mexico: {

            marginal_id: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterclick : '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>', 


        },
        br: {

            marginal_id: '63074156',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>',
            expectedXmlAfterclick : '<en-origen peso-fuente="negrita" estilo-fuente="cursiva"></en-origen><texto definitivo="" idioma="spa"><unidad><unidad unidad="" parte="" ><capa><capa.texto><titulo><titulo.original unidad=""/><titulo.rubrica></titulo.rubrica></titulo><parrafo></parrafo></capa.texto></capa></unidad></unidad></texto>', 


        },

        gulf:{

            marginal_id: '67616476',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option: 'Add new unit from XML editor',
            bold_italics: 'Bold Italics',
            xmlText : '<text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>',
            expectedXmlAfterclick : '<original-highlight font-weight="bold" font-style="italics"></original-highlight><text final="" lang="eng"><unit><unit code="" part="" complement=""><group><group-text><title><title-section unit="" part="" complement=""/><title-text></title-text></title><paragraph></paragraph></group-text></group></unit></unit></text>', 

        },
    }
};

module.exports = testData; 