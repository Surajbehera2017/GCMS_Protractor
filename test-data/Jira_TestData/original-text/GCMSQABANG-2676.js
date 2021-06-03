var testData = {
    qc: {
        spain: {
            marginal_id: '1570752',
            originaltext:'ORIGINAL TEXT',
            language:'(//span[contains(text(),"Español")])[3]',
            pdf:'//i[@class="icon-pdf"]',
          
        },

        br: {
            marginal_id: '63074156',
            originaltext:'ORIGINAL TEXT',
            language:'//span[@id="originaltext-text"]',
            //language:'(//span[contains(text(),"Español")])[3]',
            pdf:'//i[@class="icon-pdf"]',
        },
          
        mexico: {
            marginal_id: '68732262',
            originaltext:'ORIGINAL TEXT',
            language:'//span[contains(text(),"Español")]',
            pdf:'//i[@class="icon-pdf"]',
          
        },

        gulf: {
            marginal_id: '67616494',
            originaltext: 'ORIGINAL TEXT',
            language: '//span[contains(text(),"Arabic")]',
            pdf: '//i[@class="icon-pdf"]',

        },
    
    },
    client: {
        spain: {
            marginal_id: '152914012',
            originaltext:'ORIGINAL TEXT',
            language:'(//span[contains(text(),"Español")])[3]',
            pdf:'//i[@class="icon-pdf"]',
        },


        br: {
            marginal_id: '63074156',
            originaltext:'ORIGINAL TEXT',
            language:'//span[@id="originaltext-text"]',
            //language:'(//span[contains(text(),"Español")])[3]',
            pdf:'//i[@class="icon-pdf"]',
        },
        mexico: {
            marginal_id: '68732262',
            originaltext:'ORIGINAL TEXT',
            language:'(//span[contains(text(),"Español")])[3]',
            pdf:'//i[@class="icon-pdf"]',
        },


        gulf: {
            marginal_id: '67616494',
            originaltext: 'ORIGINAL TEXT',
            language: '//span[contains(text(),"Arabic")]',
            pdf: '//i[@class="icon-pdf"]'

    }
    },
};

module.exports = testData;