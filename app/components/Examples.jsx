var React = require('react'); 

var Examples = React.createClass({
    render: function () {
        return (
            <section>
                <h4>Examples</h4>
                    <ul id="examplesList">
                        <li># Heading</li>
                        <li>## Sub-heading</li>
                        <li>__bold__</li>
                        <li>_italic_</li>
                        <li>Horizontal rule: </li>
                        <li>---</li>
                        <li>* list item</li>
                        <li>* numbered list</li>
                        <li>[linktext] (http://example.com)</li>
                        <li>Two spaces leave a  </li>
                        <li>line break </li>
                    </ul>
            </section> 
        );
    }
});

module.exports = Examples; 