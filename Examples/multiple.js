import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
} from 'react-native';

import Video from 'react-native-video';

const kVideoUri = 'broadchurch';

class OnePlayer extends Component {
  constructor(ps) {
    super(ps);
    this.state = {
      marginTop: new Animated.Value(0),
    };
    const bgC = Math.floor(Math.random() * 256);
    this.bgC = `rgb(${bgC},${bgC},${bgC})`;
  }

  componentDidMount() {
    const startDelay = this.props.startDelay || 0;
    setTimeout(() => {
      this.setState({ playing: true });
    }, startDelay);

    this.state.marginTop.setValue(0);
    this.animate(startDelay)
  }

  animate(delay) {
    Animated.sequence([
      Animated.timing(this.state.marginTop, {
        toValue: -50,
        duration: 500,
        delay,
      }),
      Animated.timing(this.state.marginTop, {
        toValue: 0,
        duration: 500
      })
    ]).start(() => {
      this.animate();
    });
  }

  render() {
    const w = Dimensions.get('window').width * 0.9;
    const s = {
      width: w,
      height: w * (1080 / 1920),
    };
    if (this.state.playing) {
      return (
        <Animated.View style={Object.assign({ marginTop: this.state.marginTop }, s)}>
          <Video
            style={s}
            source={{uri: this.props.videoUri || kVideoUri}}
            resizeMode='contain'
            repeat={true}
          />
        </Animated.View>
      );
    } else {
      return <View style={Object.assign(s, { backgroundColor: this.bgC })} />;
    }
  }
}

export function VideoPlayer() {
  return (
    <View style={styles.container}>
      <OnePlayer />
      <OnePlayer startDelay={62} />
      <OnePlayer startDelay={125} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  halfScreen: {
    height: 120,
    width: 200,
    flex: 1,
  },
});


