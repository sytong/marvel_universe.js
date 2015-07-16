# marvel_universe.js
Build an AngularJS application with the Marvel Developer API

## Preparations
To use this application, please register an account at [Marvel Developer Portal](http://developer.marvel.com/).
You will need to create a `MyCredentials` module to handle the authentication.
Please clone this repository and then create `credentials.js` in the project directory using the following template:

```javascript
angular.module("marvelApp.credentials", []).
factory('MyCredentials', function() {
  return {
    generate: function(timestamp) {
      var private_key = "YOUR_MARVEL_DEVELOPER_PRIVATE_KEY";
      var public_key = "YOUR_MARVEL_DEVELOPER_PUBLIC_KEY";
      return {
        "public_key": public_key,
        "hash": CryptoJS.MD5(timestamp + private_key + public_key)
      };
    }
  };
});
```

You need to fill in the private key and public key from your Marvel account into the `private_key` and `public_key` variables respectively.
