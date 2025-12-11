import { Request, Response, Router } from "express";
import { auth } from "../../middleware/auth";
import { bookingController } from "./bookings.controller";
import { validateCreateBooking } from "../../middleware/validation";
const router = Router();

router.post('/', auth("admin", "customer"), validateCreateBooking, bookingController.createBooking);
router.get('/', auth("admin", "customer"), bookingController.adminSeeAllCustomerSeeOne);
router.put('/:bookingId', auth("admin", "customer"), bookingController.updateBookingById);

export const bookingRoutes = router;