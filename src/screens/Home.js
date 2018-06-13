'use strict';

import React, { Component } from 'react';
import {
	View, Text, ScrollView, ImageBackground, StyleSheet
} from 'react-native';
import CardImage from '../components/common/CardImage';
import dances from '../conf/dances';
//image imports
import images_uncommon from '../../assets/images/dances/uncommon/';
import images_epic from '../../assets/images/dances/epic/';
import images_rare from '../../assets/images/dances/rare/';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	displayAllEmotes() {
		const { navigate } = this.props.navigation;

		return dances.map(function (dances, index) {
			let images;
			let { category, list } = dances;
			switch (category) {
				case "UNCOMMON DANCES AND EMOTES":
					images = images_uncommon;
					break;
				case "EPIC DANCES":
					images = images_epic;
					break;
				case "RARE DANCES":
					images = images_rare;
					break;
				default:
					break;
			}
			return (
				<View key={index} style={styles.categoryContainer} >
					<Text style={styles.categoryHeader}>{category}</Text>
					<View style={{ flex: 1 }}>
						{loadCategoryDances(list, images)}
					</View>
				</View>
			);
		});
		function loadCategoryDances(dancesList, images) {
			var rows = [];

			for (let index = 0; index < dancesList.length; index += 3) {

				rows.push(
					<View key={index} style={styles.cardList}>
						{makeCard(0)}
						{makeCard(1)}
						{makeCard(2)}
					</View>
				);

				function makeCard(position) {
					if (!dancesList[index + position]) return;
					return (
						<CardImage
							onPress={() => navigate('Dance', { info: dancesList[index + position] })}
							src={images[dancesList[index + position].source]}
						/>
					)
				}
			}
			return rows;
		}
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<ImageBackground
					style={styles.imgBG}
					source={{ uri: 'https://i.pinimg.com/originals/e0/cf/82/e0cf826de84d4d37ebbef5d53b6bf5c8.jpg' }}>
					{this.displayAllEmotes()}
				</ImageBackground>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imgBG: {
		width: null,
		height: null
	},
	cardList: {
		flex: 1,
		marginTop: 8,
		flexDirection: 'row'
	},
	categoryContainer: {
		marginTop: 40,
	},
	categoryHeader: {
		flex: 1,
		textAlign: 'center',
		fontSize: 30,
		fontFamily: 'BurbankBigCondensed'
	}
});