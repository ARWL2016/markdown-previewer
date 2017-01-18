var React = require('react');
var Nav = require('Nav'); 

var Main = (props) => {
    return (
            <div>
                <div>
                    <Nav />
                    <div id="main">
                        {props.children}
                    </div>
                </div>
            </div>
        );
};

module.exports = Main; 