# marvel_universe.js
Build an AngularJS application with the Marvel Developer API

## Preparations
To use this application, please register an account at [Marvel Developer Portal](http://developer.marvel.com/).
You will need to create a `MyCredentials` module to handle the authentication.
Please clone this repository and then create `credentials.js` in the project directory `app/js` using the following template:

```javascript
angular.module("marvelApp.credentials", []).
factory('MyCredentials', function() {
  return {
    generate: function() {
      var timestamp = new Date().getTime();
      var private_key = "YOUR_MARVEL_DEVELOPER_PRIVATE_KEY";
      var public_key = "YOUR_MARVEL_DEVELOPER_PUBLIC_KEY";
      var hash = CryptoJS.MD5(timestamp + private_key + public_key);
      return {ts: timestamp,  apikey: public_key, hash: hash.toString()};
    }
  };
});
```

You need to fill in the private key and public key from your Marvel account into the `private_key` and `public_key` variables respectively.

## Usage
TBA

## Development
TBA

## License

marvel_universe.js is provided under the terms of the MIT license.

Copyright &copy; 2015, Willie Tong. All rights reserved. Please see the {file:LICENSE} file for further details.
