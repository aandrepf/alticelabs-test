const { describe, it } = require("mocha");
const { join } = require("path");
const { expect } = require("chai");
const sinon = require("sinon");
const { readFile } = require("fs/promises");

const Letter = require("./../../src/entities/Letter");
const User = require("./../../src/entities/User");

const mocks = {
  validUsers: require("./../mocks/valid-users.json"),
  validUsersAddedPosts: require("./../mocks/valid-user-added-posts.json"),
  validUsersWithPosts: require("./../mocks/valid-users-posts.json"),
};

const letter = new Letter();

describe("#letter suite test", () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  function getLetterInstance() {
    return new Letter();
  }

  function insertPosts(postsList, usersPost, userId) {
    usersPost = postsList.filter((post) => post.userId === userId);
    return usersPost;
  }

  it("should have a getter property 'users'", function () {
    const letterInstance = getLetterInstance();
    expect(letterInstance.users).to.be.an("Array");
  });

  it("should have a setter property 'users'", function () {
    const letterInstance = getLetterInstance();
    letterInstance.users = [];
    expect(letterInstance.users).to.be.an("Array").and.to.deep.equal([]);
  });

  it("should have a getter property 'posts'", function () {
    const letterInstance = getLetterInstance();
    expect(letterInstance.posts).to.be.an("Array");
  });

  it("should have a setter property 'posts'", function () {
    const letterInstance = getLetterInstance();
    letterInstance.posts = [];
    expect(letterInstance.posts).to.be.an("Array").and.to.deep.equal([]);
  });

  it("#should initialize letter with users setted property posts as a list", async () => {
    const expected = mocks.validUsersAddedPosts;

    letter.users = Array.from(expected).map((user) => {
      return new User(user);
    });

    expect(letter.users).to.be.deep.equal(expected);
  });

  it("should insert spcecific posts to an user", () => {
    const letterInstance = getLetterInstance();
    letterInstance.insertPostsPerUsers = insertPosts;

    const usersAddedPostProperty = Object.create(mocks.validUsersAddedPosts);
    const posts = require("./../mocks/valid-posts.json");
    const expected = mocks.validUsersWithPosts;

    const result = usersAddedPostProperty.map((user) => {
      user.posts = letter.insertPostsPerUsers(
        user.posts,
        user.id,
        posts
      );

      return user;
    });

    expect(result).to.be.deep.equal(expected)
  });
});
