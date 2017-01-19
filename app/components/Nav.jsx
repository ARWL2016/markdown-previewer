var React = require('react'); 
var {Link, IndexLink} = require('react-router'); 

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Markdown Previewer</li>   
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <IndexLink to="/" className="navLink" activeStyle={{textDecoration: 'underline'}}>Preview</IndexLink>
                        </li>
                        <li>
                            <Link to="/userguide" className="navLink" activeStyle={{textDecoration: 'underline'}}>User Guide</Link>
                        </li>
                        <li>
                            <Link to="/about" className="navLink" activeStyle={{textDecoration: 'underline'}}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav; 