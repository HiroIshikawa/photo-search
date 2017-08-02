# Photo search app with React/Redux, bootstrap, and flickr API

## Getting started

Clone the repo
```
git clone https://github.com/
cd photo-search
```

Thne install the packages and start the server.
```
npm install
npm start
```

Open http://localhost:3000 with browser.

* NOTE: for the testing purpose, without undisable the safety feature of the browser, it cannot fetch the images from flickr API. One of the way would be opening the browser with disabling the safety feature temporaly. 

For chrome:
- Windows
```
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```
```
- OSX
open -a Google\ Chrome --args --disable-web-security --user-data-dir
```
```
google-chrome --disable-web-security
```

References:
[Redux](http://redux.js.org/)
[Getting Started With React Redux: An Intro](https://www.codementor.io/mz026/getting-started-with-react-redux-an-intro-8r6kurcxf)
[Disable same origin policy in Chrome](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome)
[Grid image search app with lightbox functionality.](https://github.com/ron2911/gridImageSearch)