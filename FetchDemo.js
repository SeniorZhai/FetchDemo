/**
 * Created by zhai on 16/1/24.
 */
'use strict'

'use strict'

var React = require('react-native')
var {
    StyleSheet,
    View,
    Text,
    } = React;


var Platform = require('Platform')
var Button = require('./Button')

class FetchDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: '---'
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.result}>{this.state.result}</Text>
                <Button text="Get" onPress={this._get} style={styles.button}/>
            </View>
        );
    }

    _get(e) {
        this.state.result = "111"
        fetch('https://httpbin.org/get')
            .then(function (res) {
                return res.json();
            })
            .then(function (json) {
                console.log(json);
                this.setState({result:  JSON.stringify(json)});
            });
        //
        //fetch('https://httpbin.org/headers', {
        //    headers: {
        //        'Accept': 'application/json',
        //        'Content-Type': 'application/json',
        //    },
        //})
        //    .then(function (res) {
        //        console.log(res.ok);
        //        console.log(res.status);
        //        console.log(res.statusText);
        //        console.log(res.headers.raw());
        //        console.log(res.headers.get('content-type'));
        //    });

        //fetch('http://httpbin.org/post', {method: 'POST', body: 'a=1'})
        //    .then(function (res) {
        //        return res.json();
        //    }).then(function (json) {
        //    console.log(json);
        //});
    }


    //_render(err, response) {
    //    if (!err) {
    //        this.setState({result: "----"});
    //    } else {
    //        this.setState({result: error});
    //    }
    //}
}

var myMarginTop;
if (Platform.OS === 'android') {
    myMarginTop = 0;
} else {
    myMarginTop = 20;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: myMarginTop,
        flexDirection: 'column',
        backgroundColor: '#CCD1D9',

    },
    result: {
        height: 200,
        margin: 10,
        padding: 10,
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f3f3f3',
    },
    button: {
        margin: 10,
    }
})

module.exports = FetchDemo;
