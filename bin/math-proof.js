#!/usr/bin/env node
var commander = require('commander');
var {mathProof} = require('../index');
var fs = require('fs');
commander
	.version(require('../package').version,'-v,--version')
	.option('-p,--path <inputPath>','Input file path')
	// .option('-e,--encoding [encoding = utf-8]','Input encoding')
	.option('-o,--output [outputPath]','Output file path, default output to origin file. Output to console without output option.')
	.option('--tex','Parse TeX "\\therefore" token')
	.parse(process.argv);
let inputPath = commander.path;
let outputPath = commander.output;
// console.log(outputPath);
// let encoding = commander.encoding;
let enableTeX = commander.tex;
if(!inputPath){
	commander.outputHelp();
	process.exit(1);
}
let outputConsole;
if(outputPath === true){
	outputPath = inputPath;
}else if(outputPath === undefined){
	outputConsole = true;
}
// if(!encoding){
// 	encoding = 'utf-8';
// }
fs.readFile(inputPath,(err,data) => {
	if(err){
		console.log(`\u001b[31m${err.message}`);
		process.exit(1);
	}
	// console.log(data.toString());
	let ans = mathProof(data.toString(),enableTeX);
	if(outputConsole){
		console.log(ans);
	}else{
		fs.writeFile(outputPath,ans,(err) => {
			console.log(`\u001b[31m${err.message}`);
			process.exit(1);
		});
	}
});
