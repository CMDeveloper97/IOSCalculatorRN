import React from 'react';
import {Text, View} from 'react-native';
import {Btn} from '../components/Btn';
import {styles} from '../theme/appTheme';
import {useCalc} from '../hooks/useCalc';

export const CalcScreen = () => {
	const {
		prevNumber,
		number,
		clear,
		positiveNegative,
		btnDelete,
		createNumber,
		btnDivi,
		btnMulti,
		btnSub,
		btnAdd,
		calc,
	} = useCalc();

	return (
		<View style={styles.calcContainer}>
			{prevNumber !== '0' && (
				<Text style={styles.resultLittle}>{prevNumber}</Text>
			)}

			<Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
				{number}
			</Text>

			{/* Button Row */}
			<View style={styles.row}>
				<Btn text="C" color="light" action={clear} />
				<Btn text="+/-" color="light" action={positiveNegative} />
				<Btn text="del" color="light" action={btnDelete} />
				<Btn text="/" color="orange" action={btnDivi} />
			</View>

			{/* Button Row */}
			<View style={styles.row}>
				<Btn text="7" action={createNumber} />
				<Btn text="8" action={createNumber} />
				<Btn text="9" action={createNumber} />
				<Btn text="X" color="orange" action={btnMulti} />
			</View>

			{/* Button Row */}
			<View style={styles.row}>
				<Btn text="4" action={createNumber} />
				<Btn text="5" action={createNumber} />
				<Btn text="6" action={createNumber} />
				<Btn text="-" color="orange" action={btnSub} />
			</View>

			{/* Button Row */}
			<View style={styles.row}>
				<Btn text="1" action={createNumber} />
				<Btn text="2" action={createNumber} />
				<Btn text="3" action={createNumber} />
				<Btn text="+" color="orange" action={btnAdd} />
			</View>

			{/* Button Row */}
			<View style={styles.row}>
				<Btn text="0" action={createNumber} fullWidth />
				<Btn text="." action={createNumber} />
				<Btn text="=" color="orange" action={calc} />
			</View>
		</View>
	);
};
