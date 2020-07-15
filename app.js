const express = require('express');
const pach = require('pach');
const bodyParser = require('body Parser');
const chalk = require('chalk');



app.set('public', pach.join(__dirname, 'public'));
app.set('host', '0.0.0.0');
app.set('port', 3000);

app.use(bodyParser.json());
app.use('/', express.static(pach.join(__dirname, 'public')));

app.listen(app.get('port'), );