"use strict";

import helmet       from "helmet";

const responseHeaderConfig = (app) => {

    app.use(helmet.xssFilter());
    app.use(helmet.contentSecurityPolicy({

        directives: {
            defaultSrc: ["'none'"],
            scriptSrc:  ["'self'", "'unsafe-inline'", "http://code.jquery.com"],
            styleSrc:   ["'self'", "'unsafe-inline'", "https:/fonts.googleapis.com"],
            imgSrc:     ["'self'", "'data:'"],
            fontSrc:    ["'self'", "https:/fonts.gstatic.com", "data:"],
            connectSrc: ["'self'"],
            reportUri:  "/cspviolation"
        }
    }));
};

export default responseHeaderConfig;
