'use strict';

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image
} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import { Icon, Button, Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

class Dance extends Component {
  constructor(props) {
    super(props);

    this.returnHome = this.returnHome.bind(this);
    this.drawStars = this.drawStars.bind(this);
  }

  // takes you to the home screen
  returnHome() {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  // Draws the rate in form of stars
  drawStars(difficulty) {
    var starsRow = [];
    for (let i = 0; i < 5; i++) {
      (i < difficulty)
        ? starsRow.push(
          <Icon key={i} name="star" size={35} color="yellow" style={styles.star} />
        )
        : starsRow.push(
          <Icon key={i} name="star" size={35} style={styles.star} />
        )
    }
    return starsRow;
  }


  render() {
    const { title, difficulty, description, display, cost } = this.props.navigation.state.params.info;

    return (

      <View style={styles.container}>
        <Card
          title={title}
          titleStyle={styles.title}
          imageProps={{ resizeMode: "cover" }}
        >
          <Image
            style={{ width: 350, height: 250 }}
            resizeMode="cover"
            source={{ uri: display }}
          />
          <View style={styles.contentCard}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.cost}>{cost}</Text>
            <View style={styles.starStack}>
              {this.drawStars(difficulty)}
            </View>
          </View>
        </Card>
        <Button
          title="GO BACK"
          backgroundColor="purple"
          onPress={this.returnHome}
          buttonStyle={styles.returnButton}
        />
        <AdMobBanner
          adSize="smartBannerPortrait"
          adUnitID="ca-app-pub-9390140992935339/1884265882"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.log(error)}
          style={styles.banner}
        />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  title: {
    fontSize: 30,
    fontFamily: 'BurbankBigCondensed'
  },
  starStack: {
    flexDirection: 'row',
    marginTop: 10
  },
  star: {
    flex: 1
  },
  description: {
    fontSize: 20
  },
  cost: {
    fontSize: 15
  },
  contentCard: {
    marginTop: 10
  },
  returnButton: {
    marginTop: 20
  },
  banner: {
    position: "absolute",
    bottom: 0,
    right: 0
  }
});

export default Dance;