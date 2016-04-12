"USE STRICT";
app.controller("mainController", function($scope){

	$scope.menus = [
		{
			name: "Person",
			view: "app/views/person.html",
			active: true
		},
		{
			name: "Product",
			view: "app/views/product.html",
			active: true
		}
	]

	$scope.tabs = [
		{
			name:'Home',
			view:'app/views/home.html',
			active: true
		}
	];

	$scope.addTab = function(options){
		if(options.active){
			for(i in $scope.tabs){
				$scope.tabs[i].active = false;
			}
		}
		$scope.tabs.push(options);
	}
});