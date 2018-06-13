'use strict';

import _ from 'lodash';
import React, { Component } from 'react';
import {
	View, StyleSheet
} from 'react-native';
import { Button, Avatar, button, Tile } from 'react-native-elements';
import Description from '../components/common/Description';
import gamblerImage from '../../assets/images/general/gambler.png';
import epicDances from '../../assets/images/dances/epic';
import uncommonDances from '../../assets/images/dances/uncommon';
import rareDances from '../../assets/images/dances/rare';

import dances from '../conf/dances';

export default class Roulette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "SPIN",
			tileTitle: "",
			actualDance: gamblerImage,
			danceInfo: "",
			allDances : Object.assign({},epicDances, uncommonDances, rareDances),
			rolling: null
		}

		this.playRandomDance = this.playRandomDance.bind(this);
		this.inspectDance = this.inspectDance.bind(this);
	}

	// take's you to the dance clicked showing on the tail component
	inspectDance() {
		if(this.state.danceInfo === "") return;

		const { navigate } = this.props.navigation;
		
		navigate('Dance', { info: this.state.danceInfo });
	}

	// spin the wheel until user clicks on the button controller
	playRandomDance() {
		if(this.state.rolling) {
			clearInterval(this.state.rolling);
			this.setState({
				status: "SPIN",
				rolling: null
			});
			return;	
		}

		this.setState({
			status: "STOP"
		})

		const imageEnum = Object.keys(this.state.allDances);

		let rollingInterval = setInterval(() =>{ 
			let selectedImage = Math.floor(Math.random() * imageEnum.length);
			let danceInfo, tileTitle, tileDesc;

			_.forEach(dances, function(category){
				var result = _.find(category.list, { 'source': imageEnum[selectedImage]});

				if(result) danceInfo = result;
			})
			if(danceInfo !== undefined) tileTitle = danceInfo.title;
				else tileTitle = "None";
			this.setState({
				actualDance: this.state.allDances[imageEnum[selectedImage]],
				tileTitle: tileTitle,
				danceInfo: danceInfo
			})
		}, 90);
		
		this.setState({
			rolling: rollingInterval
		})

	}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<View style={styles.avatar}>
					<Tile
						xlarge
						imageSrc={this.state.actualDance}
						title={this.state.tileTitle}
						featured
						onPress={this.inspectDance}
						styles
						/>
					<Button
						title={this.state.status}
						backgroundColor="rgba(111, 202, 186, 1)"
						titleStyle={{ fontWeight: "700" }}
						onPress={this.playRandomDance}
						buttonStyle={styles.playButton}
					/>
				</View>
				<Description 
					title="Rules"
					info="It's pretty simple, spin and stop when you feel like and try to imitate the emote
					where the spinner has landed. It's preferable to play with your friends..." 
					/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	avatar: {
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	playButton: {
		marginTop: 10,
		width: 300,
		height: 45,
		borderWidth: 0,
		borderRadius: 5
	  }
  });
