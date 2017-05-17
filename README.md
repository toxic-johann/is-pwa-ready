# Is PWA Ready Yet ?

[![Build Status](https://api.travis-ci.org/toxic-johann/is-pwa-ready.svg)](https://travis-ci.org/toxic-johann/is-pwa-ready)
[![devDependency Status](https://david-dm.org/toxic-johann/is-pwa-ready.svg)](https://david-dm.org/toxic-johann/is-pwa-ready)

Tracks the features of PWA supported in browsers (especially Chinese browser).[View the site](https://ispwaready.toxicjohann.com).

Provide auto test page for developer.[Auto Test demo](https://ispwaready.toxicjohann.com/auto/)

> Inspired by Jake's [isserviceworkerready](https://github.com/jakearchibald/isserviceworkerready).  Mainly focus on Chinese browser and environment.  Offer english version for foreigner because some Chinese browser is used not only in China. 


## Contribute

Found your browser has not been tested?

My data is out of date?

Open [Auto Test demo](https://ispwaready.toxicjohann.com/auto/) and run the test.

**If test finished**

Press the `Copy` button to copy the result which in JSON format.

Paste it on the issue.

If convenient, offer more information.

**else if test failed**

Back to [Home Page](https://ispwaready.toxicjohann.com), use the test demo beside each feature to test manually.

Or use v-console on the auto page to find the bug.

**If you have your own data**

open server/i18n/index/en.json, update the data, and take a pull request.

The data format it's like this.

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