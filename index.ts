import { IncomingMessage, ServerResponse } from 'http'
import { log, success, warn, error, info } from './lib'

const getHTTPversion = (req) => req.httpVersion
const getUrl = (req) => req.url
const getStatus = (req) => {
    switch (req) {
        case req.statusCode.toString().startsWith(1):
            return `[${info(req.statusCode)}]`
        case req.statusCode.toString().startsWith(2):
            return `[${success(req.statusCode)}]`
        case req.statusCode.toString().startsWith(3):
            return `[${warn(req.statusCode)}]`
        case req.statusCode.toString().startsWith(4):
            return `[${error(req.statusCode)}]`
        case req.statusCode.toString().startsWith(5):
            return `[${error(req.statusCode)}]`
        default:
            return undefined
    }
}
const getMethod = (req) => req.method
const getResponseTime = (req, res) => {
    const startTime = process.hrtime()

    let time

    res.on('finish', () => {
        const elapsedTime = process.hrtime(startTime)

        const timeInMs = elapsedTime[0] * 1000 + elapsedTime[1] / 1e6
        time = timeInMs
    })
    return time
}

module.exports = function (format = 'compact') {
    return function (request: IncomingMessage, response: ServerResponse, next) {
        if (format === 'compact') {
            log(
                getStatus(request),
                getMethod(request),
                getResponseTime(request, response)
            )
        } else if (format === 'full') {
            log('not implemented yet')
        }

        next()
    }
}
