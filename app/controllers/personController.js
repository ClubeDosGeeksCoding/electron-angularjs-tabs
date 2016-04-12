"USE STRICT";
app.controller("personController", function($scope){
	$scope.getPersons = function(){
		$scope.persons = sqlite.run("SELECT * FROM person");
	}

	$scope.edit = function(data){
		$scope.person = data;
		$('#modalPerson').modal('show');
	}

	$scope.save = function(){
		if($scope.person.id){
			// Edit
			var id = $scope.person.id; 
			delete $scope.person.id;
			delete $scope.person.$$hashKey;
			sqlite.update('person',$scope.person,{id: id});
		}else{
			// new
			var id = sqlite.insert('person',$scope.person);
		}
		$('#modalPerson').modal('hide');
		$scope.getPersons();
		$scope.person = {};
	}

	$scope.delete = function(data){
		if(confirm('Are you sure?')){
			sqlite.delete('person',{id: data.id});
			$scope.getPersons();
		}
	}
});