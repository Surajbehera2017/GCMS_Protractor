var testData = {
    qc: {
        spain: {
           
            unit_1: 'A.10',
            marginal_id:'1573164',
            expected: "//div[text()='Operation carried out successfully']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: 'Agricultura y pesca',
            error: "There is already an entry associated with this concept.",
            expected2:"//span[text()=' Anusha Macherla']",
	


        },

        br: {
            
            unit_1: 'A.1',
            marginal_id:'63004093',
            expected: "//div[text()='Operation carried out successfully']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Indice RT",
            error: "There is already an entry associated with this concept.",
            expected2:"//span[text()=' Arun Karthikeyan']",
	


        },

        mexico: {
           
            unit_1: 'A.15',
            marginal_id:'68735535',
            expected: "//div[text()='Operation carried out successfully']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Indice DF",
            error: "There is already an entry associated with this concept.",
            expected2:"//span[text()=' Arun Karthikeyan']",
	


        },
    },
    client: {
        spain: {
            
            unit_1: 'A.10',
            marginal_id:'1573164',
          
            expected: "//div[text()='Operation carried out successfully']",
            hierarchy: '�ndice Com�n Aranzadi',
            term: 'Agricultura y pesca',
            error: 'There is already an entry associated with this concept.',
            expected2:"//span[text()=' Anusha Macherla']",

        },


        br: {
           
            unit_1: 'A.2',
            marginal_id:'63004093',
            
            expected: "//div[text()='Operation carried out successfully']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Indice RT",
            error: "There is already an entry associated with this concept.",
            expected2:"//span[text()=' Arun Karthikeyan']",
	


        },

        mexico: {
           
            unit_1: 'A.1',
            marginal_id:'68732543',
            expected: "//div[text()='Operation carried out successfully']",
            hierarchy: "�ndice Com�n Aranzadi",
            term: "Indice RT",
            error: "There is already an entry associated with this concept.",
            expected2:"//span[text()=' Arun Karthikeyan']",
	


        },
    }
};

module.exports = testData;
   