class User {
  constructor({ address, company, email, id, name, phone, username, website }) {
    this.address = address;
    this.company = company;
    this.email = email;
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.username = username;
    this.website = website;
    this.posts = [];
  }
}

module.exports = User;
