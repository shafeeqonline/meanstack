app.controller('meetupsController', ['$scope', '$resource', function($scope, $resource){
	var Meetup = $resource('/api/meetups');
	$scope.meetups = [
		{
			name : 'Shafeeq'
		},
		{
			name : 'Rahul'
		},
		{
			name : 'Pooja'
		}
	]
	$scope.createMeetup = function(){
		/*var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save();*/
		$scope.meetups.push({ name : $scope.meetupName});
		$scope.meetupName = '';
		$scope.meetupsCount=$scope.meetups.length;
	};
	$scope.meetupsCount=$scope.meetups.length;
}])