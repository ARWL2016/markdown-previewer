var React = require('react'); 

var MarkdownForm = React.createClass({  
    onKeyUp: function () {
        var input = this.refs.input.value; 
        console.log('onKeyUp' + input);

        if (input.length > 0) {
            this.props.onParse(input); 
        }
    },
    componentDidUpdate: function () {
        console.log('componentDidUpdate');
    },
    componentDidMount () {
        console.log('componentDidMount');
    },
    render: function () {
        return (
            <div>
                <h2>MarkdownForm</h2>
                <form onSubmit={this.onFormSubmit} onKeyUp={this.onKeyUp}> 
                    <textarea ref="input" placeholder="Enter your markdown here"></textarea>
                    <button>Enter</button>  

                </form> 
            </div> 
        );
    }
});

module.exports = MarkdownForm; 


//DEPRECATED CODE 

    // onFormSubmit: function () {
    //     var markdown = this.refs.markdown.value; 
    //     console.log('onFormSubmit' + markdown);

    //     if (markdown.length > 0) {
    //         this.props.onParse(markdown); 
    //     }
    // },
