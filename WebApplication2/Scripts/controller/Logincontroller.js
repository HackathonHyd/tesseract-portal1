mdart.controller('loginctrl', function ($scope, loginservcie) {

    loginrecords();
    $scope.LoginPage = "Welcome to Home Page";

    function loginrecords() {
      
        var logincheck = loginservcie.GetLogin(); //The MEthod Call from service

        logincheck.then(function (data)
        {
            $scope.Userdetails = data
        },
              function (errorPl) {
                  $log.error('failure loading ', errorPl);
              });
    }
    $scope.sucesslogin=function()
    {
       
    }
});