var request = require('request');

exports.getShortenUrl = function (req, res) {
    var longUrl = req.body.url
    var apiUrl = "http://tinyurl.com/api-create.php?url=" + longUrl
    request({
        url: apiUrl,
        method: "GET"
    }, function (error, response, body){
        var data = {
            code: response.statusCode,
            shortenUrl: response.body,
            longUrl: longUrl
        }
        res.json(data);
    });
}