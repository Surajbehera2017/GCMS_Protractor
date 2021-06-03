var params = browser.params;

//i18n basic support
var I18n = require('../../i18n/' + params.language + '.i18n.js');

var LegislationDocumentService = require('../../services/legis-document.srv.js');
var AuthenticationProvider = require('../../providers/authentication.prov.js');

var sampleDocument = require('../../test-data/qc_aut/arz/legis/sample-document.js'); //TO DO fijarse  de cambiar por
                                                                                     // .json

describe('Seamless Authentication and CRUD ', function () {
	var legisDocService = "lala";

	beforeAll(function () {
		var authProvider = new AuthenticationProvider();
		authProvider.authenticate.then(function (authCookieJar) {
			legisDocService = new LegislationDocumentService(authCookieJar);
		});
	});

	it('should RETRIEVE a legislation document by id', function () {

		var docId = 115901007;

		legisDocService.retrieveDocument(docId).then(function (output) {
			expect(output.id).toEqual(docId);
			expect(output.document.nombreDisposicion).toEqual('Resolución 22-10-2012 núm. 600/16124/2012');
		});

	});

	it('should CREATE a new legislation document and DELETE it afterwards', function () {

		expect(sampleDocument).toBeDefined();

		legisDocService.createDocument(sampleDocument, true).then(function (output) {

			//Expect a successful processing
			expect(output.result).toEqual("success");

			//Expect the document to be a LEG document (nmp = 3)
			expect(output.document.marginal.nmp).toEqual(3);

			//Expect the year to be correct
			expect(output.document.marginal.nma).toEqual(2020);

			var marginal = output.document.marginal.numeroMarginal;
			var docId = output.document.marginal.idMarginal;

			//Delete it
			legisDocService.deleteDocument(docId).then(function (output) {
				expect(output.id).toEqual(docId);
			});

		});
	});

	it('should MODIFY a legislation document by id', function () {

		var docId = 155549987;

		legisDocService.retrieveDocument(docId).then(function (output) {

			var retrievedDocument = output.document;

			var originalValue = retrievedDocument.fechaAnalisis;

			var newValue = '01/01/2000';

			//update the doc object
			retrievedDocument.fechaAnalisis = newValue;

			legisDocService.saveDocument(docId, retrievedDocument, true).then(function (output) {
				//Expect a successful processing
				expect(output.result).toEqual('success');

				//Get the modified document and verify that the changes have been made
				legisDocService.retrieveDocument(docId).then(function (output) {

					var updatedDocument = output.document;

					//expect changes been made
					expect(updatedDocument.fechaAnalisis).toEqual(newValue);

					//change it back to original
					updatedDocument.fechaAnalisis = originalValue;

					legisDocService.saveDocument(docId, updatedDocument, true).then(function (output) {
						//Expect a successful processing
						expect(output.result).toEqual('success');
					});
				});
			});

		});

	});

});