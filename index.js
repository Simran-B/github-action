const core = require("@actions/core")

async function run() {
    try {
        const str = core.getInput("string")
        core.setOutput("reversed", str.split("").reverse().join(""))
        core.setOutput("repeated", str.repeat(2))
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
