import Elysia from "elysia"
import logixlysia from "logixlysia"

export const loggerMiddleware = (): Elysia => {
    return logixlysia({
        config: {
            showStartupMessage: true,
            startupMessageFormat: 'simple',
            timestamp: {
                translateTime: 'yyyy-mm-dd HH:MM:ss'
            },
            ip: true,
            logFilePath: './logs/example.log',
            customLogFormat:
                '🦊 {now} {level} {duration} {method} {pathname} {status} {message} {ip} {epoch}',
        }
    })
}