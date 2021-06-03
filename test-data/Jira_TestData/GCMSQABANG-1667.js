var testData = {
    qc: {
        spain: {
            marginal_id: '1570752',
            unit: 'A.2', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.103', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'Title',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. '

        },
        br: {
            marginal_id: '63052404',
            unit: 'EP', //Give an existing unit on document current structure
            unit_to_add: 'A.103', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'Title',
            paragraph_one: 'Paragraph 1',
            pasteExternalText:'Paste external text',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                tabname_1: 'capatexto',
                elementname_1:'faltatable',
        },

        mexico: {
            marginal_id: '69816980',
            unit_to_add: 'A.103',
            tabname_1: 'capatexto',
			elementname_1:'faltatable',
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            pasteExternalText:'Paste external text',
            paragraph_two: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at risus consectetur, eleifend dui ut, fringilla eros. Nunc id accumsan justo. Nulla vestibulum eu sem ut facilisis. Fusce turpis orci, tincidunt eget mattis ut, tincidunt vel nisi. Sed placerat felis quis ipsum tempor pulvinar. Nunc consectetur risus eu placerat tincidunt. In rhoncus tincidunt elit vitae hendrerit.'
        },


    },
    client: {
        spain: {
            marginal_id: '1570752',
            unit: 'A.2', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.103', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'Title',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. '

        },
        br: {
            marginal_id: '63003879',
            unit: 'EP', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.103', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'Title',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. '

        },
        mexico: {
            marginal_id: '69816998',
            unit_to_add: 'A.103',
            tabname_1: 'capatexto',
			elementname_1:'faltatable',
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            pasteExternalText:'Paste external text',
            paragraph_two: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at risus consectetur, eleifend dui ut, fringilla eros. Nunc id accumsan justo. Nulla vestibulum eu sem ut facilisis. Fusce turpis orci, tincidunt eget mattis ut, tincidunt vel nisi. Sed placerat felis quis ipsum tempor pulvinar. Nunc consectetur risus eu placerat tincidunt. In rhoncus tincidunt elit vitae hendrerit.'
        },

    }
};

module.exports = testData;