/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

var FecthDemo = require('./FetchDemo')

class FetchDemo extends Component {
    render() {
        return (
            <FecthDemo/>
        );
    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('FetchDemo', () => FetchDemo);
