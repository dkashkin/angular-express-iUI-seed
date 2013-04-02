'use strict';

exports.name = function (req, res) {
    console.log("in API");
    res.json({
        name: 'Dennis'
    });
};