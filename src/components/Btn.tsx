import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  action: (text: string) => void;
  color?: string;
  fullWidth?: boolean;
}

interface IColors {
  [key: string]: {
    color: string;
    backgroundColor: string;
  };
}

export const Btn = ({text, color = 'main', fullWidth = false, action}: Props) => {
	return (
		<TouchableOpacity
			onPress={()=>action(text)}
			style={[
				styles.button, 
				fullWidth && styles.fullWidth,
				{ backgroundColor: colors[color].backgroundColor} 
			]}>
			<Text style={[
				styles.btnText, 
				{ color: colors[color].color}
			]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		height: 80,
		width: 80,
		borderRadius: 100,
		justifyContent: 'center',
		marginHorizontal: 10,
	},
	btnText: {
		textAlign: 'center',
		fontSize: 30,
		padding: 10,
		color: 'white',
	},
	fullWidth:{
		width: 180
	}
});

const colors: IColors = StyleSheet.create({
	main: {
		color: 'white',
		backgroundColor: '#2D2D2D',
	},
	light: {
		color: 'black',
		backgroundColor: '#9B9B9B',
	},
	orange: {
		color: 'white',
		backgroundColor: '#FF9427',
	},
});
