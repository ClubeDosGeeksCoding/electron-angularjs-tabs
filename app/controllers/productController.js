"USE STRICT";
app.controller("productController", function($scope){
	$scope.getProducts = function(){
		$scope.products = sqlite.run("SELECT * FROM product");
	}

	$scope.edit = function(data){
		$scope.product = data;
		$('#modalProduct').modal('show');
	}

	$scope.save = function(){
		if($scope.product.id){
			// Edit
			var id = $scope.product.id; 
			delete $scope.product.id;
			delete $scope.product.$$hashKey;
			sqlite.update('product',$scope.product,{id: id});
		}else{
			// new
			var id = sqlite.insert('product',$scope.product);
		}
		$('#modalProduct').modal('hide');
		$scope.getProducts();
		$scope.product = {};
	}

	$scope.delete = function(data){
		if(confirm('Are you sure?')){
			sqlite.delete('product',{id: data.id});
			$scope.getProducts();
		}
	}
});