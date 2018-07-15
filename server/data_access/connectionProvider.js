"use strict";
/* eslint-disable no-console */

import mongoose from "mongoose";
import Promise from "bluebird";

mongoose.Promise = Promise;
const _internalConnectionPool = {};

export default function (url, options) {
    const opts = Object.assign({}, {
        server: { poolSize: 1 }
    }, options);

    return new Promise(function (resolve, reject) {
        const address = `${url}`;
        if (!(_internalConnectionPool[address])) {
            try {
                const conn = mongoose.createConnection(address, opts);
                conn.on("open", function () {
                    _internalConnectionPool[address] = conn;
                    resolve(_internalConnectionPool[address]);
                });
                conn.on("error", function (err) {
                  console.error("MongoDB error: %s", err);
                });
            } catch (err) {
                reject(err);
            }
        } else {
            return resolve(_internalConnectionPool[address]);
        }
    });
}
