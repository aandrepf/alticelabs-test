# Story: List of users and your posts informations

Consuming two [JSONPlaceholder](https://jsonplaceholder.typicode.com) API, this application should return all the users with informations and also a list of posts for each one

### Funcionalities and Entities

1.`Letter Repository`

This repository controls all the calls to API.

2.`Letter`

A class that gets and sets user information and set all the posts related to him.

3. `User`

A class that defines the wich structure User should have.

4. `Utils`

This one manipulates DOM to set the list of users on browser

### Tests

* [x] mocks
* [x] stubs
* [x] spies
* [x] end-2-end tests
* [x] unit tests
* [x] 100% code coverage

## Installing

Cloning project

```bash
git clone https://github.com/aandrepf/alticelabs-test.git
```

Instaling project dependencies

```bash
yarn
# or
npm install
```

Initialize project

```bash
yarn start
# or
npm start
```

Execute tests

```bash
yarn test
# or
npm test
```

Execute tests with code coverage informations

```bash
yarn test:cov
# or
npm test:cov
```
