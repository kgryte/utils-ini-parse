Parse
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Attempts to parse an input string as [INI](https://en.wikipedia.org/wiki/INI_file).


## Installation

``` bash
$ npm install utils-ini-parse
```


## Usage

``` javascript
var parse = require( 'utils-ini-parse' );
```

#### parse( value[, options] )

Attempts to parse an input `string` as [INI](https://en.wikipedia.org/wiki/INI_file).

``` javascript
var out = parse( 'beep=boop' );
// returns {'beep':'boop'}

out = parse( 'beep boop' );
// returns <Error>
```

The `function` accepts the same `options` as [utils-properties-parse](https://github.com/kgryte/utils-properties-parse), except `sections` is __always__ `true`, `separators` is __always__ `'='`, `strict` is __always__ `true`, and `comments`, by default, begin with `';'`.

``` javascript
var out = parse( '# This is a comment.\nbeep=boop', {
	'comments': [ ';', '#' ]
});
// returns {'beep':'boop'}
```


## Examples

``` javascript
var fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( 'utils-ini-parse' );

// Load an INI file...
var file = '/path/to/file.ini';
file = fs.readFileSync( file, {
	'encoding': 'utf8'
});

// Attempt to parse the file...
file = parse( file );
console.dir( file );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-ini-parse.svg
[npm-url]: https://npmjs.org/package/utils-ini-parse

[travis-image]: http://img.shields.io/travis/kgryte/utils-ini-parse/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-ini-parse

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-ini-parse/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-ini-parse?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-ini-parse.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-ini-parse

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-ini-parse.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-ini-parse

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-ini-parse.svg
[github-issues-url]: https://github.com/kgryte/utils-ini-parse/issues
