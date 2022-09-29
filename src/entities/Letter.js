const User = require("./User");
const LetterRepository = require("./../repository/letterRepository");

class Letter {
  #users;
  #posts;

  constructor() {
    this.LetterRepository = new LetterRepository();

    this.#users = [];
    this.#posts = [];
  }

  get users() {
    return this.#users;
  }

  get posts() {
    return this.#posts;
  }

  set users(value) {
    this.#users = value;
  }

  set posts(value) {
    this.#posts = value;
  }

  insertPostsPerUsers(userPosts, userId, posts) {
    userPosts = posts.filter((post) => post.userId === userId);
    return userPosts;
  }
}

module.exports = Letter;
