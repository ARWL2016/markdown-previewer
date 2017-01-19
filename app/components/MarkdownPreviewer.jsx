var React = require('react'); 
var Examples = require('Examples'); 
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput'); 
var markdown = require('markdown');

var MarkdownPreviewer = React.createClass({
    getInitialState: function () {
        return {
            output: "See your converted markdown here"
        }
    },
    handleParse: function (input) {
        this.setState({
            input: input
        })
        var output = markdown.markdownCompile(input);
        this.setState({
            output: output
        })
    },
    render: function () {
        var {output} = this.state; 
        return (
            <main>
                <div className="row" >
                    <div className = "medium-4 small-12 columns front-page" id="examplesDiv">
                        <Examples /> 
                    </div>
                    <div className = "medium-4 small-12 columns front-page" id="formDiv">
                        <MarkdownForm onParse={this.handleParse} />
                    </div>
                    <div className = "medium-4 small-12 columns end front-page" id="outputDiv">
                        <MarkdownOutput output={output}/> 
                    </div>
                </div> 
            </main>
        );
    }
});

module.exports = MarkdownPreviewer; 