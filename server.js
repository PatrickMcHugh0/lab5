const express = require('express')
const app = express()
const port = 3000
//Necessary to load html files
const path = require('path')
//Needed for interpreting post requests
const bodyParser = require('body-parser')

//Returns the request when user searches for app
app.get('/', (req, res) => res.send('Hello World!'))

//Returns the request when the user searches for app/hello, pass name as a parameter
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send("Hello " + req.params.name)
})

app.get('/api/movies', (req, res) => {
    const movies = [
        {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }];

    res.status(200).json({
        message: "Json retrieved successfully",
        myMovies:movies
    })
    //res.send("my api")
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
    //Used to load a file through the server
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/name', (req, res) => {
    console.log('route calling');

    res.send("Hello " + req.query.firstname + " " + req.query.lastname)
})

app.post('/name', (req, res) => {
    console.log('post calling');
    console.log(req.body.firstname + " " + req.body.lastname);

    res.send("Hello from post: " + req.body.firstname + " " + req.body.lastname)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))