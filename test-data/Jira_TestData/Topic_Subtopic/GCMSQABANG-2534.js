var testData = {
    qc: {
        spain: {
            marginal_id: '1570753',
            unit: 'A.2',
            topiccode:'1800',
            codes:'1834;1811;1806',
            sub_1:"//div[text()='Delito de contrabando']",
            sub_2 : "//div[text()='Delitos contra el Honor']",
            sub_3: "//div[text()='Delitos contra la libertad']",



        },

        gulf:{

            marginal_id: '67616616',
            // unit: 'A.2',
            topiccode:'2000',
            codes:'2006;2009;2012',
            sub_1: "//div[text()='Commercial Agencies']",
            sub_2 : "//div[text()='Commercial Concealment']",
            sub_3: "//div[text()='Commercial Data']",





        }
    },
    client: {
        spain: {
            marginal_id: '1570753',
            unit: 'LB.I'
        },

        gulf:{

            marginal_id: '67616616',
            // unit: 'A.2',
            topiccode:'2000',
            codes:'2006;2009;2012',
            sub_1: "//div[text()='Commercial Agencies']",
            sub_2 : "//div[text()='Commercial Concealment']",
            sub_3: "//div[text()='Commercial Data']",

        },
    }
};

module.exports = testData;