var React = require('react'); 

var MarkdownForm = React.createClass({  
    onKeyUp: function () {
        var input = this.refs.input.value; 
        console.log('onKeyUp' + input);
        this.props.onParse(input); 
    },
    render: function () {
        return (
            <section>
                <form onSubmit={this.onFormSubmit} onKeyUp={this.onKeyUp}> 
                    <textarea ref="input" placeholder="Enter your markdown here"></textarea> 
                </form> 
            </section>
        );
    }
});

module.exports = MarkdownForm; 
