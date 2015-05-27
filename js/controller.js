var mainapp = angular.module('fileApp',[]);

mainapp.controller('fileCtrl',['$scope','$http', '$timeout',function($scope, $http,$timeout) {
	$scope.files = [];
	getfile("testfiles/file1.js", getresult);
	getfile("testfiles/file2.js", getresult);
	getfile("testfiles/file3.js", getresult);
	
	
	function getfile(filename, callback) {
		$http.get(filename)
    .success(function(response) {
		console.log(response.files);
		callback(response.files);
	});
	};
	
	function getresult(filecont) {
		console.log(filecont);
		$scope.files.push(filecont);
	}
//	function getresults(filecount)
//	{
//		$timeout(function(){$scope.files.push(filecount);}, 3000); 
//	}
}]);