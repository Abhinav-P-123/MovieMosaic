let http = require("https")
let express = require("express")
let router = express.Router()
require("dotenv").config()
router.use(express.urlencoded({ extended: true }))
router.route("/").get((req, res) => {

    const options = {
        method: 'GET',
        hostname: 'api.themoviedb.org',
        port: null,
        path: '/3/movie/popular?language=en-US&page=1',
        headers: {
            accept: 'application/json',
            Authorization: process.env.Authorization
        }
    };

    const request = http.request(options, function (response) {
        let resData = "";

        response.on('data', function (chunk) {
            resData += chunk
        });

        response.on('end', function () {
            res.render("popular", { movies: JSON.parse(resData) })
        });
    });
    request.end();
})

router.get("/movie/:id", (req, res) => {
    let movieID = req.params.id;
    const options = {
        method: 'GET',
        hostname: 'api.themoviedb.org',
        port: null,
        path: `/3/movie/${movieID}?language=en-US`,
        headers: {
            accept: 'application/json',
            Authorization: process.env.Authorization
        }
    };

    const request = http.request(options, function (response) {
        let resData = ""

        response.on('data', function (chunk) {
            resData += chunk
        });

        response.on('end', function () {
            const resJSON = JSON.parse(resData);
            res.json(resJSON)
        });
    });

    request.end()
})

module.exports = router
