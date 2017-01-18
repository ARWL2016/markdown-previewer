var React = require('react'); 
var Examples = require('Examples'); 
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput'); 

var MarkdownPreviewer = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Markdown Previewer Outer Container</h2>
                <Examples /> 
                <MarkdownForm />
                <MarkdownOutput /> 
            </div> 
        );
    }
});

module.exports = MarkdownPreviewer; 