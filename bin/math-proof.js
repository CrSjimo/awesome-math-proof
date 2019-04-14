#!/usr/bin/env node
var commander = require('commander');
commander
	.version(require('../package').version)
	.option('-p,--path <inputPath>','Input file path')
	.option('-o,--output [outputPath]','Output file path, default output to origin file')
	.option('-t,--tex','Parse "\\therefore" token')
	.parse(process.argv);