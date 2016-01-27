'use strict';

var {Fluxible} = require('fluxible');
var Wrapper = require('./components/Wrapper');
var GlobalStore = require('../shared/stores/GlobalStore');
var UserStore = require('../shared/stores/UserStore');
var app = new Fluxible({
    component: Wrapper
});

app.registerStore(GlobalStore);
app.registerStore(UserStore);

module.exports = app;