const core = require("@actions/core")

async function run() {
    try {
        const str = core.getInput("string")
        core.setOutput("reversed", str.split("").reverse().join(""))
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
