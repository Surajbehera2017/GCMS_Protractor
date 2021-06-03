var testData = {
    qc: {
        spain: {
            marginal_id: '1570753',
            unit: 'A.2',
            Topiccode:'1500',
            Codes:'1503;1504',
            sub_1:"//div[text()='Banca']",
            sub_2 : "//div[text()='Títulos valores']",


        },

        gulf:{

            marginal_id:'67616500',
            Topiccode:'1800',
            Codes:'1815;1820',
            sub_1:"//div[text()='Civil Procedures']",
            sub_2 : "//div[text()='Civil Services']",



        },
    },
    client: {
        spain: {
            marginal_id: '1570753',
            unit: 'LB.I',
            Topiccode:'1500',
            Codes:'1503;1504',
            sub_1:"//div[text()='Banca']",
            sub_2 : "//div[text()='Títulos valores']",

        },

        gulf:{
            marginal_id:'67616500',
            Topiccode:'1000',
            Codes:'1015;0210',
            sub_1:"//div[text()='Related Institutions & Authorities']",
            sub_2 : "//div[text()='Salaries']",

        },
    }
};

module.exports = testData;