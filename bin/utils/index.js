const CONFIG = require('./config')
const PROCESS = require('./process')
const SYSTEM = require('./system')
const MSG = require('./message')
const WSHELPER = require('./ws')
module.exports = {
    ...CONFIG,
    ...PROCESS,
    ...SYSTEM,
    ...MSG,
    ...WSHELPER,
}