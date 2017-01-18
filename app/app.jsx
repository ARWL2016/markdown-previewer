var React = require('react'); 
var ReactDOM = require('react-dom'); 
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); 
var Main = require('Main'); 
var MarkdownPreviewer = require('MarkdownPreviewer'); 


// Load styles 
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
       <Route path="/" component={Main}>
            <IndexRoute component={MarkdownPreviewer}/>
       </Route>   
    </Router>,    
    document.getElementById('app')
);