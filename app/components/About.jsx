var React = require('react'); 

var About = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="medium-8 large-6 columns small-centered">
                        <h1 className="text-center page-title">About</h1>
                        
                            <p>This website was inspired by the Free Code Camp challenge <em>Build a Markdown Previewer</em>. To view the user stories visit <a href="https://www.freecodecamp.com/challenges/build-a-markdown-previewer" target="_blank">Free Code Camp.</a></p>
                        
                            <p>The website was created with <a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="https://www.npmjs.com/package/react-router" target="_blank">React Router</a> and <a href="https://webpack.js.org/" target="_blank">Webpack</a>. It is styled with <a href="http://foundation.zurb.com/" target="_blank">Foundation </a>and the markdown conversion is handled by <a href="https://www.npmjs.com/package/marked">Marked</a>.</p>

                            <p>To view the source code, visit my <a href="https://github.com/ARWL2016/markdown-previewer" target="_blank">Github Repo</a>.</p>
                        
                    </div>
                      
                </div>
            </div> 
        );
    }
});

module.exports = About; 