var React = require('react'); 

var MarkdownOutput = React.createClass({
    createMarkup() {
        return {__html: this.props.output};
    },   
    render: function () {  
        return (
            <section>
                <div dangerouslySetInnerHTML={this.createMarkup()} />  
            </section>
        );
    }
});

module.exports = MarkdownOutput; 

