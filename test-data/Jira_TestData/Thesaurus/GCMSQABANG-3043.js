var testData = {
    qc: {
        spain: {
           
				unit:'A.2',
				marginal_id: '1573690',
				thesaurus_term:'Elecciones',
				complimentary_info:'Congreso de Diputados y Senado: convocatoria',
				thesaurusTerm4: 'INDICE COMUN (54)',
				thesaurusTerm1: 'INDICE COMUN (4)',
				message: 'Accept automatic suggestions',
				analystname: 'Gangone Pavan',
				marginal_id_1: '135836188',
				marginal_id_empty: '1571317',
				analystname1: 'Mohankumar BN',

				marginal_id_2: '11999042',
				marginal_id_3: '111275610',
				marginal_id_4: '1570752',
				expected:"//span[text()='A.2']",
				

			},


			br: {
           
				unit:'A.2',
				marginal_id: '63004093',
				thesaurus_term:'Elecciones',
				complimentary_info:'Congreso de Diputados y Senado: convocatoria',
				thesaurusTerm4: 'INDICE COMUN (54)',
				thesaurusTerm1: 'INDICE COMUN (4)',
				message: 'Accept automatic suggestions',
				analystname: 'Gangone Pavan',
				marginal_id_1: '135836188',
				marginal_id_empty: '1571317',
				analystname1: 'Mohankumar BN',

				marginal_id_2: '11999042',
				marginal_id_3: '111275610',
				marginal_id_4: '1570752',
				expected:"//span[text()='A.2']",
				

			},

			mexico: {
           
				unit:'A.1',
				marginal_id: '70540447',
				thesaurus_term:'Elecciones',
				complimentary_info:'Congreso de Diputados y Senado: convocatoria',
				thesaurusTerm4: 'INDICE COMUN (54)',
				thesaurusTerm1: 'INDICE COMUN (4)',
				message: 'Accept automatic suggestions',
				analystname: 'Gangone Pavan',
				marginal_id_1: '135836188',
				marginal_id_empty: '1571317',
				analystname1: 'Mohankumar BN',

				marginal_id_2: '11999042',
				marginal_id_3: '111275610',
				marginal_id_4: '1570752',
				expected:"//span[text()='A.1']",
				

			},
			
			gulf:{
				marginal_id:'67616569',
				unit:'ART.3',
				expected:"//span[text()='ART.3']",


			},
    },
    client: {
        spain: {

				unit:'A.12',
				marginal_id: '3403855',
				thesaurus_term:'Senado',
				complimentary_info:'Congreso de Diputados y Senado: convocatoria',
				thesaurusTerm4: 'INDICE COMUN (54)',
				thesaurusTerm1: 'INDICE COMUN (4)',
				message: 'Accept automatic suggestions',
				analystname: 'Gangone Pavan',
				marginal_id_1: '135836188',
				marginal_id_empty: '1571317',
				analystname1: 'Mohankumar BN',

				marginal_id_2: '11999042',
				marginal_id_3: '111275610',
				marginal_id_4: '1570752',
				expected:"//span[text()='A.12']",
				

		},
		

		br: {

			unit:'A.2',
			marginal_id: '63004093',
			thesaurus_term:'Senado',
			complimentary_info:'Congreso de Diputados y Senado: convocatoria',
			thesaurusTerm4: 'INDICE COMUN (54)',
			thesaurusTerm1: 'INDICE COMUN (4)',
			message: 'Accept automatic suggestions',
			analystname: 'Gangone Pavan',
			marginal_id_1: '135836188',
			marginal_id_empty: '1571317',
			analystname1: 'Mohankumar BN',

			marginal_id_2: '11999042',
			marginal_id_3: '111275610',
			marginal_id_4: '1570752',
			expected:"//span[text()='A.2']",
			
	},

	mexico: {

		unit:'A.I',
		marginal_id: '73932885',
		thesaurus_term:'Senado',
		complimentary_info:'Congreso de Diputados y Senado: convocatoria',
		thesaurusTerm4: 'INDICE COMUN (54)',
		thesaurusTerm1: 'INDICE COMUN (4)',
		message: 'Accept automatic suggestions',
		analystname: 'Gangone Pavan',
		marginal_id_1: '135836188',
		marginal_id_empty: '1571317',
		analystname1: 'Mohankumar BN',

		marginal_id_2: '11999042',
		marginal_id_3: '111275610',
		marginal_id_4: '1570752',
		expected:"//span[text()='A.I']",
		
},
	 
		gulf:{
			marginal_id:'67616604',
			unit:'ART.1',
			expected:"//span[text()='ART.1']",
			
		},
    }
};

module.exports = testData;