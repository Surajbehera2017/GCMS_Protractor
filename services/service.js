var request = require('request');
var params = browser.params;

var SearchService = function (cookieJar) {

	this.contentType = {
		json: "application/json; charset=utf-8"
	};

	this.postRequest = function (options) {

		var defer = protractor.promise.defer();

		request.post(options, function (error, response, body) {

			if (error || response.statusCode >= 400) {
				console.log('An error has ocurred posting a request to ', options.url, ', status code:', response.statusCode);
				defer.reject({
					error: 'An error has ocurred posting a request to' + options.url + ', status code:' + response.statusCode,
					message: response
				});
			} else {
				defer.fulfill(body.body);
			}
		});
		return defer.promise;
	};
};

module.exports = SearchService;