"use strict";

import cors                         from "cors";
import userRouter                   from "../routes/user-route";

export default function ConfigApiRoutes(app) {
    app.use(cors());
    app.use("/api/user", userRouter);
}
