var marked = require('marked'); 

var markdownCompile = function (markdown) {
    var rawMarkup = marked(markdown, {sanitize: true});
    return rawMarkup; 
}

module.exports.markdownCompile = markdownCompile; 

