var Service = require('./service');
var URLMapping = require('./url-mapping');

var LegislationDocumentService = function (cookieJar) {
	this.cookieJar = cookieJar;
};

LegislationDocumentService.prototype = Object.create(new Service(), {
	retrieveDocument: {
		value: function (docId) {
			var options = {
				url: URLMapping.document.retrieve,
				body: {
					docId: docId
				},
				headers: {
					'content-type': this.contentType.json
				},
				json: true,
				jar: this.cookieJar
			};

			var flow = protractor.promise.controlFlow();
			return flow.await(this.postRequest(options));
		}
	},

	createDocument: {
		value: function (documentJSON, confirm) {
			var options = {
				url: URLMapping.document.create,
				body: {
					confirm: confirm,
					document: documentJSON
				},
				headers: {
					'content-type': this.contentType.json
				},
				json: true,
				jar: this.cookieJar
			};

			var flow = protractor.promise.controlFlow();
			return flow.await(this.postRequest(options));
		}
	},

	deleteDocument: {
		value: function (docId) {
			var options = {
				url: URLMapping.document.delete,
				body: {
					docId: docId
				},
				headers: {
					'content-type': this.contentType.json
				},
				json: true,
				jar: this.cookieJar
			};

			var flow = protractor.promise.controlFlow();
			return flow.await(this.postRequest(options));
		}
	},

	saveDocument: {
		value: function (docId, documentJSON, confirmed) {
			var options = {
				url: URLMapping.document.save,
				body: {
					confirmed: confirmed,
					docId: docId,
					document: documentJSON
				},
				headers: {
					'content-type': this.contentType.json
				},
				json: true,
				jar: this.cookieJar
			};

			var flow = protractor.promise.controlFlow();
			return flow.await(this.postRequest(options));
		}
	}
});

module.exports = LegislationDocumentService;