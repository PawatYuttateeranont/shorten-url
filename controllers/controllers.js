var request = require('request');

exports.getShortenUrl = function (req, res) {
    var longUrl = req.body.url
    var apiUrl = "http://tinyurl.com/api-create.php?url=" + longUrl

    /* call api */
    request({
        url: apiUrl,
        method: "GET"
    }, function (error, response, body){
        /* format data */
        var data = {
            code: response.statusCode,
            shortenUrl: response.body,
            longUrl: longUrl
        }
        /* response */
        res.json(data);
    });
}