# Is PWA Ready Yet ?

[![Build Status](https://api.travis-ci.org/toxic-johann/is-pwa-ready.svg)](https://travis-ci.org/toxic-johann/is-pwa-ready)
[![devDependency Status](https://david-dm.org/toxic-johann/is-pwa-ready.svg)](https://david-dm.org/toxic-johann/is-pwa-ready)

Tracks the features of PWA supported in browsers.
[View the site](https://ispwaready.toxicjohann.com).

## Run locally

To install, run the following in the root of your cloned copy of the repo:

```sh
npm install
```

To serve the site on `localhost:3000`:

```sh
npm start
```

To build the site:

```sh
npm run build
```

## Contribute

To update data, edit [`zh.json`](server/data/zh.json) for Chinese version

To update data, edit [`en.json`](server/data/zh.json) for English version

```js

  //...

  "features": [

      //...

      {
        "name", "Feature name or <code>interface.whatever</code>",
        "description", "Brief feature details, html <strong>allowed</strong>",
        "chrome": {
          // 1 = supported
          // 0.8 = supported with little bug
          // 0.5 = supported with caveats (eg flags, nightlies, special builds)
          // 0 = not supported
          "supported": 1
          // (optional) browser version
          "minVersion": 35,
          // (optional) alternate icon, currently supports:
          // "chrome-canary"
          // "firefox-nightly"
          // "webkit"
          // "opera-developer"
          "icon": "canary",
          // (optional) details, cavats, links to tickets, flags etc
          "details": [
            "Requires <a href=\"https://www.google.co.uk/intl/en/chrome/browser/canary.html\">Chrome Canary</a>"
          ]
        },
        "firefox": {},
        "opera": {},
        "safari": {},
        // (optional) details that don't apply to a single browser
        "details": [
          "<strong>Chrome & Firefox</strong>: sitting in a tree K-I-S-S-I-N-G"
        ]
      },

      // ...

  ]
```
