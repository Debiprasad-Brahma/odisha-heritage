import {Router} from "express"
import {registerUser, login} from "../controllers/auth.controller.js"
import {validate} from "../middlewares/validator.middleware.js"
import {userRegisterValidator, userLoginValidator} from "../validators/index.js"

const router = Router()

router.route("/register").post(userRegisterValidator(), validate, registerUser) //* Route for register
router.route("/login").post(userLoginValidator(), validate, login) //* Route for the login of the user

export default router
