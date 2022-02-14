import React, { useRef, useState } from 'react'; 


enum Operators {
	add, substract, divide, multiply
}

export const useCalc = () => {
	const [number, setNumber] = useState('0');
	const [prevNumber, setPrevNumber] = useState('0');

	const lastOperation = useRef<Operators>();

	const clear = () =>{
		setNumber('0');
		setPrevNumber('0');
	};

	const createNumber = (numberText: string) => {
		//Don't accept double decimal
		if(number.includes('.') && numberText === '.') return; 

		if(number.startsWith('0') || number.startsWith('-0')){ 
			//Decimal
			if(numberText === '.'){
				setNumber(number + numberText);
				//If numberText is 0 and exists a decimal.
			} else if(numberText === '0' && number.includes('.')){
				setNumber(number + numberText);
				//If numberText is diferent of 0 and doenst have decimal
			} else if( numberText !== '0' && !number.includes('.')){ 
				setNumber(numberText);
				//Avoid 0000.0
			} else if( numberText === '0' && !number.includes('.')){
				setNumber(number);
			} else { 
				setNumber(number + numberText); 
			} 
		}else { 
			setNumber(number + numberText); 
		}

	};

	const positiveNegative = () =>{
		if(number.includes('-')) setNumber(number.replace('-', ''));
		else setNumber('-' + number); 
	};

	const btnDelete = () => {
		let negative = '';
		let tempNumber = number;

		if(number.includes('-')){
			negative = '-';
			tempNumber = number.substring(1);
		}

		if(tempNumber.length > 1) {
			setNumber(negative + tempNumber.slice(0, -1));
		} else{
			setNumber('0');
		}

	};

	const changeNumForPrevNum = () => {
		if(number.endsWith('.')){ 
			setPrevNumber(number.slice(0,-1));
		}else{
			setPrevNumber(number);
		}

		setNumber('0');
	};

	const btnDivi = () =>{
		changeNumForPrevNum();
		lastOperation.current = Operators.divide; 
	};

	const btnMulti = () =>{
		changeNumForPrevNum();
		lastOperation.current = Operators.multiply; 
	};

	const btnAdd = () =>{
		changeNumForPrevNum();
		lastOperation.current = Operators.add; 
	};

	const btnSub = () =>{
		changeNumForPrevNum();
		lastOperation.current = Operators.substract; 
	};

	const calc = () => {
		const num1 = Number(number);
		const num2 = Number(prevNumber); 

		switch (lastOperation.current) {
		case Operators.add:
			setNumber(`${num1 + num2}`);
			break;
		case Operators.substract:
			setNumber(`${num2 - num1}`);
			break;
		case Operators.multiply:
			setNumber(`${num1 * num2}`);
			break;
		case Operators.divide:
			setNumber(`${num2 / num1 }`);
			break; 
		}  

		setPrevNumber('0');
		
	};

	return {
		number,
		prevNumber,
		clear,
		createNumber,
		positiveNegative,
		btnDelete,
		btnDivi,
		btnMulti,
		btnAdd,
		btnSub,
		calc,
	};

};
