const { describe, it } = require("mocha");
const LetterRepository = require("../../src/repository/letterRepository");
const sinon = require("sinon");
const assert = require("assert");

describe("LetterRepository Suite Tests", () => {
  let letterRepository = {};

  before(() => {
    letterRepository = new LetterRepository();
  });

  it("should return a lists of users when users is called", async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const mockUsers = require("../mocks/valid-users.json");
    const expectedResponse = await letterRepository.getUsers(mockUsers);

    const stub = sinon.stub(letterRepository, letterRepository.getUsers.name);
    stub.withArgs(url).resolves(expectedResponse);

    const response = await letterRepository.makeRequest(url);

    assert.deepEqual(response, expectedResponse);
  });

  it("should return a lists of posts when posts is called", async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const mockPosts = require("../mocks/valid-posts.json");

    const expectedResponse = await letterRepository.getPosts(mockPosts);

    const stub = sinon.stub(letterRepository, letterRepository.getPosts.name);
    stub.withArgs(url).resolves(expectedResponse);

    const response = await letterRepository.makeRequest(url);

    assert.deepEqual(response, expectedResponse);
  });
});
