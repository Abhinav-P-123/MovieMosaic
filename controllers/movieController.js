let http = require("https")
let express = require("express")
let router = express.Router()

router.route("/").get((req, res) => {
    const options = {
        method: 'GET',
        hostname: 'online-movie-database.p.rapidapi.com',
        port: null,
        path: '/title/v2/get-popular-movies-by-genre?limit=100',
        headers: {
            'X-RapidAPI-Key': '9287e9b0e5mshe0ec66817e6f3a5p15f6b9jsnd02d3f73d726',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const request = http.request(options, function (res) {
        let resData = "";

        res.on('data', function (chunk) {
            resData += chunk
        });

        res.on('end', function () {
            console.log(JSON.parse(resData));
        });
    });

    request.end();
})

module.exports = router
