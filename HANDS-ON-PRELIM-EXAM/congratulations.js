module.exports = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  this.name1 = function () {
    return 'Hello, ' + this.firstname + this.lastname + '.';
  };
  this.name2 = function () {
    return 'Congratulations, ' + this.firstname + this.lastname + '.';
  };
  this.name3 = function () {
    return 'Goodbye, ' + this.firstname + this.lastname + '.';
  };
};
