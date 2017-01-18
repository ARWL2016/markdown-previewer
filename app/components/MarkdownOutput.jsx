var React = require('react'); 
var marked = require('marked'); 

var MarkdownOutput = React.createClass({
    createMarkup() {
        return {__html: this.props.output};
    },
    
    render: function () {
        
        return (
                <div dangerouslySetInnerHTML={this.createMarkup()} />  
        );
    }
});

module.exports = MarkdownOutput; 

