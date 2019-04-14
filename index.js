const rplG = [
	'易证',
	'显然',
	'=>',
	'易得',
	'可证',
	'可得',
	'可知',
	'故',
];
const normalTarget = '∴';
const TeXTarget = '\\therefore';
function randInt(a,b){
	return Math.round(Math.random()*(b-a)+a);
}
function getRandItem(arr){
	let index = randInt(0,arr.length - 1);
	return arr[index];
}
function mathProof(originStr,enableTeX){
	const rpl = [...rplG];
	let target = enableTeX ? TeXTarget : normalTarget;
	rpl.push(target);
	let thereforeSplit = originStr.split(target);
	let result = '';
	for(str of thereforeSplit.slice(0,thereforeSplit.length-1)){
		result += (str + getRandItem(rpl));
	}
	result += thereforeSplit[thereforeSplit.length - 1];
	return result;
}
module.exports = {mathProof,rplG};