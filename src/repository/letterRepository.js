const https = require("https");

const BASE_URL = "https://jsonplaceholder.typicode.com";

class LetterRepository {
  async makeRequest(url) {
    let chunks = [];
    return await new Promise((resolve, reject) => {
      https.get(url, (response) => {
        response.on("data", function (chunk) {
          chunks.push(chunk);
        });
        response.on("end", function () {
          resolve(JSON.parse(Buffer.concat(chunks)));
        });
        response.on("error", reject);
      });
    });
  }

  async getUsers() {
    const data = await this.makeRequest(`${BASE_URL}/users`);
    return data;
  }

  async getPosts() {
    const data = await this.makeRequest(`${BASE_URL}/posts`);
    return data;
  }
}

module.exports = LetterRepository;
