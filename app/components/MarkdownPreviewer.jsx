var React = require('react'); 
var Examples = require('Examples'); 
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput'); 

var MarkdownPreviewer = React.createClass({
    handleParse: function (markdown) {
        this.setState({
            markdown: markdown
        })
        console.log('handleParse: ' + markdown); 
    },
    render: function () {
        return (
            <div>
                <h2>Markdown Previewer Outer Container</h2>
                <Examples /> 
                <MarkdownForm onParse={this.handleParse} />
                <MarkdownOutput /> 
            </div> 
        );
    }
});

module.exports = MarkdownPreviewer; 