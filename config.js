.run(function($ionicPopup) {
  var deploy = new Ionic.Deploy();
  deploy.watch().then(function() {}, function() {}, function(updateAvailable) {
    if (updateAvailable) {
      deploy.download().then(function() {
        deploy.extract().then(function() {
          deploy.unwatch();
          $ionicPopup.show({
            title: 'Update available',
            subTitle: 'An update was just downloaded. Would you like to restart your app to use the latest features?',
            buttons: [
              { text: 'Not now' },
              {
                text: 'Restart',
                onTap: function(e) {
                  deploy.load();
                }
              }
            ]
          });
        });
      });
    }
  });
};