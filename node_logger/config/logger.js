const winston = require('winston'); // 로그 라이브러리
const winstonDaily = require('winston-daily-rotate-file'); // 로그파일 일자별로 생성
const appRoot = require('app-root-path'); // app root 경로를 가져오는 lib
const process = require('process');


const logDir = `${appRoot}/logs` // logs 폴더 하위에 log파일 저장

const { combine, timestamp, label, printf } = winston.format;

const logFormat = printf(({
    level, message, label, timestamp
}) => {
    return `${timestamp} [${label}] ${level}: ${message}`; // 로그 출력 포맷 정의
});


/*
log level 
error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
*/

const logger = winston.createLogger({
    format: combine(
        label({
            label: 'LogTestSystem'
        }),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat
    ),
    transports: [
        new winstonDaily({ level: 'info', dataPattern: 'YYY-MM-DD', dirname: logDir, filename: `%DATE%.log`, maxFiles: 30, zippedArchive: true }),
        new winstonDaily({ level: 'error', dataPattern: 'YYY-MM-DD', dirname: logDir, filename: `%DATE%.error.log`, maxFiles: 30, zippedArchive: true }),
    ],
    exceptionHandlers: [
        new winstonDaily({ level: 'error', dataPattern: 'YYY-MM-DD', dirname: logDir, filename: `%DATE%.exception.log`, maxFiles: 30, zippedArchive: true }),
    ]
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
        )
    }));
}

module.exports = logger;