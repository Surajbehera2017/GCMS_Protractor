var testData = {
    qc: {
        spain: {
            marginal_id: '1570752',
            unit: '[A.2]', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.104', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                datatype:'titulooriginal',
                final_label:'definitivo*',
                final_textbox: 'definitivo',
                final_value:'S'
        },
        mexico: {
            marginal_id: '70356471',
            unit: '[A.2]', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.104', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                datatype:'titulooriginal',
                datatype:'titulooriginal',
                final_label:'definitivo*',
                final_textbox: 'definitivo',
                final_value:'S'
        },
        br: {
            marginal_id: '63074156',
            unit: 'EP', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.104', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                datatype:'titulooriginal',
                
                final_label:'definitivo*',
                final_textbox: 'definitivo',
                final_value:'S'
        },

        gulf:{

            marginal_id: '67616482',
            unit: 'HED.1', //Give an existing unit on document current structure
            sibling_unit_to_add: 'HED.2', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            datatype:'titlesection',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                
                final_label:'final*',
                final_textbox: 'final',
                final_value:'Y',

        
        },

    },
    client: {
        spain: {
            marginal_id: '1570752',
            unit: '[A.1234]', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.104', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                datatype:'titulooriginal',
                final_label:'definitivo*',
                final_textbox: 'definitivo',
                final_value:'S'
        },
        mexico: {
            marginal_id: '70389077',
            unit: '[A.2]', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.104', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                datatype:'titulooriginal',
                final_label:'definitivo*',
                final_textbox: 'definitivo',
                final_value:'S'
        },
        br: {
            marginal_id: '63074156',
            unit: 'EP', //Give an existing unit on document current structure
            sibling_unit_to_add: 'A.104', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                datatype:'titulooriginal',
                final_label:'definitivo*',
                final_textbox: 'definitivo',
                final_value:'S'
        },

        gulf:{
            marginal_id: '67616552',
            unit: 'HED.1', //Give an existing unit on document current structure
            sibling_unit_to_add: 'HED.2', //Give a unit which is not existing in structure
            rubric_text: 'Rubric',
            editorial_rubric_text: 'Editorial Rubric',
            title_text: 'titulo',
            datatype:'titlesection',
            paragraph_one: 'Paragraph 1',
            paragraph_two: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit. ',
                final_label:'final*',
                final_textbox: 'final',
                final_value:'Y',
        },
    }
};

module.exports = testData;