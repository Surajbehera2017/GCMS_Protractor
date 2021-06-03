var testData = {
	qc: {
		spain: {


			marginal_id: '1570752',
			unit: '[RB] (1)', //Give an existing unit on document current structure
			child_unit_to_add: 'A.100', //Give a unit which is not existing as a child
			rubric_text: 'Rubric',
			editorial_rubric_text: 'Editorial Rubric',
			title_text: 'Title',
			paragraph_one: 'Paragraph 1',
			paragraph_two: 'Paragraph 2'


		},
	},
	client: {
		spain: {
			marginal_id: '1570752',
			unit: '[A.1234]', //Give an existing unit on document current structure
			child_unit_to_add: 'A.100', //Give a unit which is not existing as a child
			rubric_text: 'Rubric',
			editorial_rubric_text: 'Editorial Rubric',
			title_text: 'Title',
			paragraph_one: 'Paragraph 1',
			paragraph_two: 'Paragraph 2'
		},
	}
};

module.exports = testData;