import { success, warn, error, info } from './log'
import { IncomingMessage, ServerResponse } from 'http'

export const getHTTPversion = (req: IncomingMessage) =>
    `HTTP/${req.httpVersion}`
export const getUrl = (req: IncomingMessage) => req.url
export const getStatus = (req: ServerResponse) => {
    if (req.statusCode.toString().startsWith('1')) {
        return `[${info(req.statusCode)}]`
    } else if (req.statusCode.toString().startsWith('2')) {
        return `[${success(req.statusCode)}]`
    } else if (req.statusCode.toString().startsWith('3')) {
        return `[${warn(req.statusCode)}]`
    } else if (req.statusCode.toString().startsWith('4')) {
        return `[${error(req.statusCode)}]`
    } else if (req.statusCode.toString().startsWith('5')) {
        return `[${error(req.statusCode)}]`
    }
}
export const getMethod = (req: IncomingMessage) => req.method
export const getIP = (req: IncomingMessage) => req.connection.remoteAddress
export const getBytesSent = (req: IncomingMessage) =>
    req.headers['content-length'] || '-'

export const getDate = () => `[${new Date().toUTCString()}]`
