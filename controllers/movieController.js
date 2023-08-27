let http = require("https")
let express = require("express")
let router = express.Router()

router.route("/").get((req, res) => {

    const options = {
        method: 'GET',
        hostname: 'api.themoviedb.org',
        port: null,
        path: '/3/movie/popular?language=en-US&page=1',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmI0MGE0OTM5YTVjMjA3MTFlZTRlOTFiNjJhMjA3MyIsInN1YiI6IjY0ZWFiYWM3NTk0Yzk0MDBlMjYwNjA5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.knPDSfh_GL5tAV8Gx6xwPfgfKcdwLXs2LZ1e-fBKxVM'
        }
    };

    const request = http.request(options, function (response) {
        let resData = "";

        response.on('data', function (chunk) {
            resData += chunk
        });

        response.on('end', function () {
            console.log(JSON.parse(resData).results[0].original_title)
            res.render("popular", { movies: JSON.parse(resData), len: JSON.parse(resData).results.length })
        });
    });
    request.end();
})

module.exports = router
