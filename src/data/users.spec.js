const assert = require("assert")
const userData1 = require("./users").data
const userData2 = require("./users2").data

describe("users data 1", function() {
  it("is complete/valid", () => {
    userData1.forEach(user => {
      sharedChecks(user)
      assert.ok(
        typeof user.dateOfBirth === "string",
        "user dateOfBirth property should be a non-empty string"
      )
    })
  })
})

describe("users data 2", function() {
  it("is complete/valid", () => {
    userData2.forEach(user => {
      sharedChecks(user)
      assert.ok(
        user.birthday && typeof user.birthday === "number",
        "user birthday property should be a non-zero number"
      )
    })
  })
})

function sharedChecks(user) {
  assert.ok(user.name, "user name property should be a non-empty string")
  assert.ok(user.getBirthday, "the user object " + JSON.stringify(user) + " is missing a getBirthday function")
  assert.equal(typeof user.getBirthday, "function", "the user object " + JSON.stringify(user) + " has a getBirthday property, but it's not a function")
}
