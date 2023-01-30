module.exports = function (firstPerson, secondPerson) {
  
  this.firstPerson = firstPerson;
  this.secondPerson = secondPerson;

  this.greetThisPerson = function () {
    return 'Hello Greetings' + this.firstPerson + ' and ' + this.secondPerson;
  };
};
