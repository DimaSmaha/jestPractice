export default class User {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  checkNameCorrectness = () => {
    if (/[1-9]/.test(this.firstName) || /[1-9]/.test(this.lastName)) {
      throw new TypeError("Name can not contain numbers");
    }
    return true;
  };

  getFullName = () => {
    if (this.checkNameCorrectness()) {
      return `${this.firstName} ${this.lastName}`;
    }
  };
}
