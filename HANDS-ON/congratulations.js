module.exports = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  this.greetThisPerson = function () {
    return 'Hello' + this.firstname + ' and ' + this.lastname;
  };
  this.greetThisPerson = function () {
    return 'Congratulations' + this.firstname + ' and ' + this.lastname;
  };
  this.greetThisPerson = function () {
    return 'Goodbye' + this.firstname + ' and ' + this.lastname;
  };
};
