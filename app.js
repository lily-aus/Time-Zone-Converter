const { Console } = require('console')
const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.json())

const port = 8888


app.get('/homePage.html', function (req, res) {
    res.sendFile('homePage.html', {
        root: 'C:/Users/Oooo/Desktop/CS361/TimeZoneConverter'
    });
});


app.get('/convertPage.html', function (req, res) {
    res.sendFile('convertPage.html', {
        root: 'C:/Users/Oooo/Desktop/CS361/TimeZoneConverter'
    });
});

app.get('/contact.html', function (req, res) {
    res.sendFile('contact.html', {
        root: 'C:/Users/Oooo/Desktop/CS361/TimeZoneConverter'
    });
});


app.post('/test.html', function (req, res) {
    console.log(req.body);
    res.end();
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})