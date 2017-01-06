/**
 * Created by Administrator on 2017/1/3.
 */
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');