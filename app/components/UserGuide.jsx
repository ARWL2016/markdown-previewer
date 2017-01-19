var React = require('react'); 

var UserGuide = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center page-title">UserGuide</h1>
                <table>
                    <thead>
                        <tr>
                            <th width="100">Markdown Syntax</th>
                            <th width="100">Viewed in Browser</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p># Heading</p>           
                            </td>
                            
                            <td>
                                <h1>Heading</h1>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <p>## Heading</p>           
                            </td>         
                            <td>
                                <h2>Heading</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>_italic_</p>           
                            </td>         
                            <td>
                                <em>italic</em>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>_bold_</p>           
                            </td>         
                            <td>
                                <em>__bold__</em>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>* bullet list item</p>           
                            </td>         
                            <td>
                                <ul>
                                 <li>bullet list item</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>1. numbered list item</p>           
                            </td>         
                            <td>
                                <ol>
                                    <li>Numbered list item</li> 
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>A [link] (http://example.com)</p>           
                            </td>         
                            <td>
                                <p>A <a href="http://example.com">link</a></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Two spaces at the end of a line<br />leave a line break </p>           
                            </td>         
                            <td>
                                <p>Two spaces at the end of a line<br />leave a line break </p> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        );
    }
});

module.exports = UserGuide; 