import express, { NextFunction, Request, Response } from "express";

import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { authRoutes } from "./modules/auth/auth.routes";
import { vehicleRoutes } from "./modules/vehicles/vehicles.routes";
import { bookingRoutes } from "./modules/bookings/bookings.routes";

const app = express();
app.use(express.json());
initDB()
//---- API Testing Route ----
app.get("/", logger, (req: Request, res: Response) => {
    res.status(200).json({
        code: 200,
        status: "success",
        message: "Next Level Web Development, Assignment-2 --- All API are working fine",
    });
});

//---- API Routes ----
app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/users", userRoutes)
app.use('/api/v1/vehicles', vehicleRoutes)
app.use('/api/v1/bookings', bookingRoutes)


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path,
    });
});
export default app