import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, TextInput } from 'react-native';

class App extends Component {
  state = {
    inputValue: 'focus this and press return for caps',
    inputValue2: 'workaround!',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.inputValue}
          onChangeText={text => this.setState({ inputValue: text })}
          blurOnSubmit={false}
          style={{
            width: 375,
            height: 44,
            padding: 8,
            backgroundColor: '#fff',
          }}
        />

        <TextInput
          value={this.state.inputValue2}
          blurOnSubmit={true}
          onSubmitEditing={() => {
            setTimeout(() => this._input.focus(), 100);
          }}
          onChangeText={text => this.setState({ inputValue2: text })}
          ref={view => {
            this._input = view;
          }}
          style={{
            width: 375,
            height: 44,
            padding: 8,
            backgroundColor: '#fff',
            marginTop: 20,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingBottom: 100,
  },
});

AppRegistry.registerComponent('TryTextInputBug', () => App);
