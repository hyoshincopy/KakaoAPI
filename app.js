const express = require('express')
const app = require('express')()


app.listen(80)


app.use(express.static('public'));

app.use('/public', express.static('public'));
// app.use('/', express.static('public'));

app.get('/', (req, res, next) => {


    const code = req.query.code
    res.send(code)


})