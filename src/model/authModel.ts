export class Email {
  private email: string;
  constructor(email: string) {
    this.email = email;
  }

  getMaskedEmail() {
    const mask = "****";
    const [local, domain] = this.email.split("@");
    let length = local.length;
    let half = Math.round(length / 2);

    let maskedEmail = local.slice(0, half).concat(mask + "@" + domain);
    return maskedEmail;
  }

  isEmailValid() {
    let regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(this.email);
  }
}

export class Password {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  isPasswordValid() {
    let regex = /^[\w\S]{6,20}$/;

    return regex.test(this.password);
  }

  testEquality(password: string) {
    return this.password === password;
  }
}
