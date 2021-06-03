var testData = {
    qc: {
        spain: {
            marginal_id_xml: '139889525',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
            expectedXmlAfterReplacement : '<en-origen decoracion-texto="tachado"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',
        
         },
         br: {
            marginal_id_xml: '63003631',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
            expectedXmlAfterReplacement : '<en-origen decoracion-texto="tachado"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',
        
         },
         mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
            expectedXmlAfterReplacement : '<en-origen decoracion-texto="tachado"><nota ref="test" o=""/></en-origen>note<abstract.summary></abstract.summary>',
        
         },

         gulf:{

            marginal_id_xml: '67616855',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
            expectedXmlAfterReplacement : '<original-highlight text-effect="strikethrough"><nota ref="test" o=""/></original-highlight>note<abstract.summary></abstract.summary>',


         }


    },
    client: {
        spain: {
            marginal_id_xml: '77491659',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
        },
        br: {
            marginal_id_xml: '63003631',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
        
         },
       
        mexico: {
            marginal_id_xml: '68734769',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
        
         },

         gulf:{

            marginal_id_xml: '67616855',
            document_structure: 'DOCUMENT STRUCTURE',
            expected_option:'Add new unit from XML editor',
            strikethrough: 'Strikethrough',
            replace: 'Replace',
            expectedXmlAfterReplacement : '<original-highlight text-effect="strikethrough"><nota ref="test" o=""/></original-highlight>note<abstract.summary></abstract.summary>',

         },

    }
};

module.exports = testData;