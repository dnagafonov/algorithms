const counter = () => {
	let step = 0;
	return () => ++step;
}

module.exports = {
counter
};