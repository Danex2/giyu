import { IncomingMessage, ServerResponse } from 'http'
import { log } from './lib/log'
import {
    getStatus,
    getMethod,
    getUrl,
    getIP,
    getHTTPversion,
    getBytesSent,
    getDate,
} from './lib/format'

module.exports = function (format = 'compact') {
    return function (request: IncomingMessage, response: ServerResponse, next) {
        if (format === 'compact') {
            log(
                getStatus(response),
                `"${getMethod(request)} ${getUrl(request)} ${getHTTPversion(
                    request
                )}"`
            )
        } else if (format === 'full') {
            log(
                getStatus(response),
                getIP(request),
                getDate(),
                `"${getMethod(request)} ${getUrl(request)} ${getHTTPversion(
                    request
                )}"`,
                getBytesSent(request)
            )
        }

        next()
    }
}
