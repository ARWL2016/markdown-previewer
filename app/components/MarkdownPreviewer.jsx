var React = require('react'); 
var Examples = require('Examples'); 
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput'); 
var markdown = require('markdown');

var MarkdownPreviewer = React.createClass({
    getInitialState: function () {
        return {
            output: "initial output"
        }
    },
    handleParse: function (input) {
        this.setState({
            input: input
        })
        console.log('handleParse: ' + input); 
        var output = markdown.markdownCompile(input);
        console.log('Output: ' + output);
        this.setState({
            output: output
        })
    },
    render: function () {
        var {output} = this.state; 
        return (
            <div>
                <h2>Markdown Previewer Outer Container</h2>
                <Examples /> 
                <MarkdownForm onParse={this.handleParse} />
                <MarkdownOutput output={output}/> 
            </div> 
        );
    }
});

module.exports = MarkdownPreviewer; 