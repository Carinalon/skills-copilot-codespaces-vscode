function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member: ''
        }
    };
}