import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    count: 1,
  }

  _incrementCount = ()=>{
    this.setState({count: this.state.count + 1});
  }

  _decrementCount = ()=>{
    this.setState({count: this.state.count - 1});
  }

  // componentDidMount(){
  //   setInterval(this._incrementCount, 0.0);
  // }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this._incrementCount} style={styles.greetingBox}>
          <Text>
            Adiciona
          </Text>
        </VrButton>
        <Text style={styles.greeting}>
            {`React ${this.state.count}`}
        </Text>
        <VrButton onClick={this._decrementCount} style={styles.greetingBox}>
          <Text>
            Remove
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(5, 0, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
  },
  greetingBox: {
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
    backgroundColor: '#000',
    borderColor: '#FFF',
    borderWidth: 2,
    
  }
});

AppRegistry.registerComponent('Hello360', () => Hello360);
