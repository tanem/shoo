# shoo

[![NPM version](https://badge.fury.io/js/shoo.svg)](http://badge.fury.io/js/shoo)
[![Dependency status](https://david-dm.org/tanem/shoo.svg)](https://david-dm.org/tanem/shoo)

[Shoo](http://dictionary.reference.com/browse/shoo) JavaScript to the browser.

Inspired by [hughsk](https://github.com/hughsk)'s awesome little [scat](https://github.com/hughsk/scat). I've just reworked it to suit my own purposes :smiley:

## Huh?

1. Reads JavaScript from `stdin`
2. Wraps it in [`shoo.html`](lib/shoo.html)
3. Starts a server which serves `shoo.html` on port `3000` (default)
4. [Opens](https://github.com/domenic/opener) `http://localhost:3000` so you can see your JavaScript running in a browser.

## Installation

```
$ npm i -g shoo
```

## Usage

To use the default server port (`3000`):

```
$ cat foo.js | shoo
```

You can specify custom ports too:

```
$ cat foo.js | PORT=3001 shoo
```

## License

MIT
