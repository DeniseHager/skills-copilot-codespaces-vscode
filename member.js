function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'CSS', 'HTML'],
        sayName: function () {
            console.log(this.name);
        }
    };
    member.sayName();
    console.log(member.skills[0]);
    console.log(member.skills[1]);
    console.log(member.skills[2]);
}       