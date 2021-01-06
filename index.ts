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

export enum Format {
    Compact = 'compact',
}

module.exports = function (format: Format) {
    return function (request: IncomingMessage, response: ServerResponse, next) {
        next()
        switch (format) {
            case Format.Compact:
                log(
                    getStatus(response),
                    `"${getMethod(request)} ${getUrl(request)} ${getHTTPversion(
                        request
                    )}"`
                )
                break
            default:
                log(
                    getStatus(response),
                    getIP(request),
                    getDate(),
                    `"${getMethod(request)} ${getUrl(request)} ${getHTTPversion(
                        request
                    )}"`,
                    getBytesSent(request)
                )
                break
        }
    }
}
