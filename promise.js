const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async function(param) {
	let result = 0;
	const IXX = await promiseTheaterIXX()
	const VGC = await promiseTheaterVGC()
	const TABLE = IXX.concat(VGC)
	TABLE.forEach((data) => {
		if(data.hasil == param) result++
	})
	
return result
};

module.exports = {
  promiseOutput,
};
