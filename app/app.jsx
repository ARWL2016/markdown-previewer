var React = require('react'); 
var ReactDOM = require('react-dom'); 
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); 
var Main = require('Main'); 
var MarkdownPreviewer = require('MarkdownPreviewer'); 
var About = require('About'); 
var UserGuide = require('UserGuide'); 

// Load foundation 
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation(); 

// Load styles 
// require('style!css!sass!cssReset')
require('style!css!sass!applicationStyles')


ReactDOM.render(
    <Router history={hashHistory}>
       <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="userguide" component={UserGuide}/>
            <IndexRoute component={MarkdownPreviewer}/>
       </Route>   
    </Router>,    
    document.getElementById('app')
);