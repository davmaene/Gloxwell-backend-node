const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const parser = require("express-fileupload");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const { Response } = require("./helpers/helper.message.server.js");
// ----------------------------------------------------------------------------
dotenv.config();

const PORT = process.env.PORT || 8100
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        status: 403,
        message: "it's seems like y'v reached the maximum rate limit of requests",
        data: {}
    }
})

const app = express();

app.use(cors());
app.use(parser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(limiter);


app.get("/", (req, res, next) => {
    return Response(res, 200, {
        app_name: process.env.APP_NAME,
        app_version: process.env.APP_VERSION
    })
});

app.use("/api", require("./routes/routes.routes.js"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

