var request = require('request');
var params = browser.params;
var URLMapping = require('../services/url-mapping');

var AuthenticationProvider = function () {

};

AuthenticationProvider.prototype = Object.create({}, {
	authenticate: {

		get: function () {
			var performAuthentication = function (username, password, languageId) {
				var defer = protractor.promise.defer();

				var authCookieJar = request.jar();

				var formData = {
					username: username,
					password: password,
					selectedLanguage: languageId,
					start: 'yes'
				};

				var options = {
					url: URLMapping.login,
					formData: formData,
					jar: authCookieJar
				};

				request.post(options, function (error, response, body) {
					if (error || response.statusCode >= 400) {
						defer.reject({
							error: 'An error has ocurred calling logon.do, status code:' + response.statusCode,
							message: response
						});
					} else {
						var domain = browser.baseUrl.replace(/^.+:\/\//g, "").replace(/\/.+$/g, "");

						var SSOCookie = authCookieJar._jar.store.idx[domain]["/"]["SSO_SESSIONID"];

						if (SSOCookie != undefined) {
							console.log('Authentication successful');
							browser.manage().addCookie(SSOCookie.key, SSOCookie.value);
							defer.fulfill(authCookieJar);
						} else {
							console.log('Authentication error');
							defer.reject({
								error: 'Authentication error',
								message: 'An error has ocurred while authenticating, check your credentials'
							});
						}
					}
				});
				return defer.promise;
			};

			var username = params.valid_username;
			var password = params.valid_password;
			var languageId = params.language;

			var flow = protractor.promise.controlFlow();
			return flow.await(performAuthentication(username, password, languageId));
		}
	}
})

module.exports = AuthenticationProvider;