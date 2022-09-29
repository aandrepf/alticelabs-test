const Letter = require("./entities/Letter");
const User = require("./entities/User");
const LetterRepository = require("./repository/letterRepository");
const Utils = require("./utils/Utils");

const letter = new Letter();
const letterRepository = new LetterRepository();

async function initialize() {
  console.log("initialized Letter!!");
  const container = document.getElementById("container");
  await letterRepository.getPosts().then((posts) => {
    letter.posts = Array.from(posts);
  });

  await letterRepository.getUsers().then((users) => {
    const usersArray = users.map((user) => new User(user));
    usersArray.forEach((user) => {
      user.posts = letter.insertPostsPerUsers(
        user.posts,
        user.id,
        letter.posts
      );
    });

    letter.users = usersArray;
  });

  console.log("==== users with posts ====\n", letter.users);
  Utils.generateDOMFromList(letter.users, container);
}

(async () => {
  await initialize();
})();
