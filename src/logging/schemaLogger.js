const winston = require("winston");

module.exports = function (schema) {
    const messageOnly = winston.format.printf(({
        message
    }) => {
        return message;
    });

    const logger = winston.createLogger({
        level: "info",
        format: messageOnly,
        defaultMeta: {
            service: 'user-service'
        },
        transports: [
            new winston.transports.File({
                filename: "exports/magikarp-schema.graphql"
            })
        ]
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.log("info", schema);
    }
}