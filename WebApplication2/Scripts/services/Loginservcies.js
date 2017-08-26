mdart.service('loginservcie', ['$http', function ($http) {

    var result;
    this.GetLogin=function()
    {
        var url = 'api/Subscriber/';
        return $http(
        {
            method: "post",
            data: {},
            url: url
        });
    }
}


]);