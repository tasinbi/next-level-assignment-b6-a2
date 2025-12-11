import { NextFunction, Request, Response } from "express";

// Signup validation
export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, phone, role } = req.body || {};

    if (!name || typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({ success: false, message: "Valid name is required" });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ success: false, message: "Valid email is required" });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
        return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
    }

    if (!role || typeof role !== "string" || !["admin", "customer"].includes(role)) {
        return res.status(400).json({ success: false, message: "Role must be 'admin' or 'customer'" });
    }

    next();
};

// Login validation
export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body || {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ success: false, message: "Valid email is required" });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
        return res.status(400).json({ success: false, message: "Valid password is required" });
    }

    next();
};

// Create vehicle validation
export const validateCreateVehicle = (req: Request, res: Response, next: NextFunction) => {
    const { vehicle_name, type, registration_number, daily_rent_price, availability_status } = req.body || {};

    if (!vehicle_name || typeof vehicle_name !== "string" || vehicle_name.trim().length === 0) {
        return res.status(400).json({ success: false, message: "Valid vehicle_name is required" });
    }

    if (!type || typeof type !== "string" || type.trim().length === 0) {
        return res.status(400).json({ success: false, message: "Valid type is required" });
    }

    if (!registration_number || typeof registration_number !== "string" || registration_number.trim().length === 0) {
        return res.status(400).json({ success: false, message: "Valid registration_number is required" });
    }

    if (!daily_rent_price || typeof daily_rent_price !== "number" || daily_rent_price <= 0) {
        return res.status(400).json({ success: false, message: "daily_rent_price must be a positive number" });
    }

    if (!availability_status || typeof availability_status !== "string" || !["available", "unavailable"].includes(availability_status)) {
        return res.status(400).json({ success: false, message: "availability_status must be 'available' or 'unavailable'" });
    }

    next();
};

// Create booking validation
export const validateCreateBooking = (req: Request, res: Response, next: NextFunction) => {
    const { customer_id, vehicle_id, rent_start_date, rent_end_date } = req.body || {};

    if (!customer_id || typeof customer_id !== "number" || customer_id <= 0) {
        return res.status(400).json({ success: false, message: "Valid customer_id is required" });
    }

    if (!vehicle_id || typeof vehicle_id !== "number" || vehicle_id <= 0) {
        return res.status(400).json({ success: false, message: "Valid vehicle_id is required" });
    }

    if (!rent_start_date || isNaN(new Date(rent_start_date).getTime())) {
        return res.status(400).json({ success: false, message: "Valid rent_start_date is required" });
    }

    if (!rent_end_date || isNaN(new Date(rent_end_date).getTime())) {
        return res.status(400).json({ success: false, message: "Valid rent_end_date is required" });
    }

    if (new Date(rent_start_date) >= new Date(rent_end_date)) {
        return res.status(400).json({ success: false, message: "rent_end_date must be after rent_start_date" });
    }

    next();
};
