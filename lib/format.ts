import { success, warn, error, info } from './log'
import { IncomingMessage, ServerResponse } from 'http'

export const getHTTPversion = (req: IncomingMessage) =>
    `HTTP/${req.httpVersion}`
export const getUrl = (req: IncomingMessage) => req.url
export const getStatus = (res: ServerResponse) => {
    if (res.statusCode >= 200) {
        return `[${success(res.statusCode)}]`
    } else if (res.statusCode >= 300) {
        return `[${info(res.statusCode)}]`
    } else if (res.statusCode >= 400) {
        return `[${warn(res.statusCode)}]`
    } else if (res.statusCode >= 500) {
        return `[${error(res.statusCode)}]`
    }
}
export const getMethod = (req: IncomingMessage) => req.method
export const getIP = (req: IncomingMessage) => req.connection.remoteAddress
export const getBytesSent = (req: IncomingMessage) =>
    req.headers['content-length'] || '-'

export const getDate = () => `[${new Date().toUTCString()}]`
