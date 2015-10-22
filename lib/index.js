'use strict';

// MODULES //

var merge = require( 'utils-merge2' )(),
	ini = require( 'utils-properties-parse' );


// PARSE //

/**
* FUNCTION: parse( value[, options] )
*	Attempts to parse a value as INI.
*
* @param {*} value - value to parse
* @param {Object} [options] - function options
* @returns {Object|Error} parsed value or an error
*/
function parse( value, options ) {
	var opts = {};
	if ( arguments.length > 1 ) {
		opts = merge( {}, options );
	}
	opts.sections = true;
	opts.comments = opts.comments || ';';
	opts.separators = '=';
	opts.strict = true;
	return ini( value, opts );
} // end FUNCTION parse()


// EXPORTS //

module.exports = parse;
