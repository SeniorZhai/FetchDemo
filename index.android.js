/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    View
} from 'react-native';

var FecthDemo = require('./FetchDemo')

class Demo extends Component {
    render() {
        return (
            <FecthDemo></FecthDemo>
        );
    }
}

AppRegistry.registerComponent('FetchDemo', () => Demo);
