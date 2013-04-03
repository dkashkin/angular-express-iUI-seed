# Angular Express iUI Seed
Seed project for making hybrid mobile apps with the following stack:

* Cordova (adding soon)
* iUI
* AngularJS
* Jade
* Express
* Node.js

This uses [angular-express-blog](https://github.com/btford/angular-express-blog) and [angular-mobile-nav](https://github.com/ajoslin/angular-mobile-nav).
A few "opinionated" changes:
* Client-side main module is called "main.js" instead of traditional "app.js" because this collides with Node's traditional app.js
* Minification strategy is based on [ngmin](https://github.com/btford/ngmin) so this seed does not have the ugly arrays found in most Angular apps.


Licensed under MIT License.