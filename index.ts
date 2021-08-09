import * as shelljs from 'shelljs'

function out() {
	shelljs.exec("echo 'Hello World'");
	shelljs.cat('one.txt')
}