const { test, expect } = require("@jest/globals")
const process = require("process")
const cp = require("child_process")
const path = require("path")

test("valid string", () => {
    process.env["INPUT_STRING"] = "Hello World!"
    const ip = path.join(__dirname, "index.js")
    const stdout = cp.execSync(`node ${ip}`, {env: process.env}).toString()
    const lines = stdout.split("\n")
    expect(lines[0].trim()).toBe("::set-output name=reversed::!dlroW olleH")
    expect(lines[1].trim()).toBe("::set-output name=repeated::Hello World!Hello World!")
    console.log(stdout)
})
