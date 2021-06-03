var request = require('request');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs');

var VideoRetriever = function () {

	this.save = function (config) {
		var outputPath = this.formatFileName(config);

		var file = fs.createWriteStream(outputPath);

		var deferred = protractor.promise.defer();
		request.get(config.videoURL, function (error, response, body) {
					if (error || response.statusCode >= 400) {
						console.error("Error retrieving video from: " + config.videoURL);
						deferred.reject('Error retrieving video');
					} else {
						console.log("Session video found on: " + config.videoURL);
					}
				}
		).pipe(file)
				.on('finish', function () {
					console.log("Video saved to: " + outputPath);
					deferred.fulfill();
				}).on('error', function () {
					console.error("Error saving video on: " + outputPath);
					deferred.reject('Error retrieving video');
				});
		return deferred.promise;
	};

	this.formatFileName = function (config) {
		var date = new Date();

		var saveFolder = path.join(config.savePath, config.environment);

		mkdirp.sync(saveFolder);

		var filename =
				date.getFullYear() + "-" +
				('0' + (date.getMonth() + 1)).slice(-2) + "-" +
				('0' + date.getDate()).slice(-2) + '_' +
				('0' + date.getHours()).slice(-2) +
				('0' + date.getMinutes()).slice(-2) +
				('0' + date.getSeconds()).slice(-2) +
				".webm";

		return path.resolve(path.join(saveFolder, filename));
	};
};

module.exports = VideoRetriever;