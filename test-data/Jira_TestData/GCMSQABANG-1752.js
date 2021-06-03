var testData = {
    qc: {
        spain: {
            marginal_id: '139889525',
            expectedUnit: 'A.3',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: ' <parrafo>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</parrafo>',
            option: 'Insert',
            save: 'Save',
            performOption: 'parrafo',
            //word_key: 'This is for Testing, Paste word doc',
        },

        br: {
            marginal_id: '63003631',
            expectedUnit: 'EP',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: ' <parrafo>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</parrafo>',
            option: 'Insert',
            save: 'Save',
            performOption: 'parrafo',
            //word_key: 'This is for Testing, Paste word doc',
        },

        gulf:{
            marginal_id: '67616524',
            expectedUnit: 'ART.3',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: ' <paragraph>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</paragraph>',
            option: 'Insert',
            save: 'Save',
            performOption: 'paragraph',

        },

        mexico:{
            marginal_id: '68501266',
            expectedUnit: 'TIT.2',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: ' <parrafo>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</parrafo>',
            option: 'Insert',
            save: 'Save',
            performOption: 'parrafo',

        }
    },
    client: {
        spain: {
            marginal_id: '1570752',
            expectedUnit: 'A.109',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: '<parrafo>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</parrafo>',
            option: 'Insert',
            save: 'Save',
            performOption: 'parrafo',

        },

        br: {
            marginal_id: '63003631',
            expectedUnit: 'EP',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: ' <parrafo>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</parrafo>',
            option: 'Insert',
            save: 'Save',
            performOption: 'parrafo',
            //word_key: 'This is for Testing, Paste word doc',
        },

        gulf:{
            marginal_id: '67616524',
            expectedUnit: 'ART.3',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: ' <paragraph>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</paragraph>',
            option: 'Insert',
            save: 'Save',
            performOption: 'paragraph',

        },

        mexico:{
            marginal_id: '68501266',
            expectedUnit: 'TIT.2',
            document_structure: 'DOCUMENT STRUCTURE',
            version: 'Original',
            out_frame_id: 'legistext',
            inside_frame_id: 'ext-gen1132',
            pasteFormat:'Paste from XML',
            xmlContent: ' <parrafo>Se aprueba el Reglamento General de Vehículos cuyo texto se inserta a continuación.</parrafo>',
            option: 'Insert',
            save: 'Save',
            performOption: 'parrafo',

        }
    }
};

module.exports = testData;