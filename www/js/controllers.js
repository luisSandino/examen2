angular.module('starter.controllers', [])

.controller('CameraCtrl', function($scope) {
  $scope.getPhoto = function(){
    navigator.camera.getPicture(function(uri){
      $scope.lastPhoto = uri;
    }, function(error){
      console.error(error);
    },
    {
      quality: 75,
      targetWidth: 200,
      targetHeight: 200,
      allowEdit: true,
      destinationType : Camera.DestinationType.FILE_URI,
      encodingType : Camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
    }
    );
  };
})

      