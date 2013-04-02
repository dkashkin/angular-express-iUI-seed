'use strict';

exports.index = function(req, res){
    res.render('index');
};

exports.partials = function (req, res) {
    var partialViewName = req.params.partialViewName;
    res.render('partials/' + partialViewName);
};