import dotenv from "dotenv";
dotenv.config();

import chalk from "chalk";
import { Handler } from "express";

export const console_logger_middleware: Handler = (req, res, next) => {
    let start = performance.now();
    console.log(chalk.bold.bgHex("#262626")(chalk.blueBright("REQUEST  "), chalk.hex("#00ff00")(req.method.toUpperCase().padEnd(5, " ")), chalk.cyan(req.originalUrl.padEnd(48, " "))));
    res.on("finish", () => {
        console.log(
            chalk.bold.bgHex("#363636")(
                chalk.hex("#FFA500")("RESPONSE "),
                chalk.hex("#00ff00")(req.method.toUpperCase().padEnd(5, " ")),
                chalk.cyan(req.originalUrl.substring(0, 26).padEnd(36, " ")),
                chalk.hex(res.statusCode >= 400 ? "#ff0000" : res.statusCode >= 300 ? "#FFA500" : "#00ff00")(res.statusCode),
                chalk.hex("#000000")(
                    Math.round(performance.now() - start)
                        .toString()
                        .padStart(5, " ") + "ms"
                )
            )
        );
    });
    next();
};
