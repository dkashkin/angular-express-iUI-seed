'use strict';

exports.name = function (req, res) {
    res.json({
        name: 'API works as of ' + new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
    });
};