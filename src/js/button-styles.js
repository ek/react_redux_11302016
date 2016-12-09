
const styles = {
	background: 'blue'
}

const stylesA = {
	background: 'green'
}
const stylesB = {
	fontSize: '14px',
	background: 'red'
}
const stylesAll = Object.assign({},styles,stylesA,stylesB);

const styleFn = () => {
	return {
		width: window.innerWidth * 0.5,
		background: 'pink'
	}
}

export { styleFn };