const { test, expect } = require("@jest/globals")
const process = require("process")
const cp = require("child_process")
const path = require("path")

test("valid string", () => {
    process.env["INPUT_STRING"] = "Hello World!"
    const ip = path.join(__dirname, "index.js")
    const stdout = cp.execSync(`node ${ip}`, {env: process.env}).toString()
    expect(stdout.trim()).toBe("::set-output name=reversed::!dlroW olleH")
    console.log(stdout)
})
