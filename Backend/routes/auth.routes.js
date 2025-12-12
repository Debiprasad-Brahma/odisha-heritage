import {Router} from "express"
import {registerUser, login, logoutUser} from "../controllers/auth.controller.js"
import {validate} from "../middlewares/validator.middleware.js"
import {userRegisterValidator, userLoginValidator} from "../validators/index.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(userRegisterValidator(), validate, registerUser) //* Route for register
router.route("/login").post(userLoginValidator(), validate, login) //* Route for the login of the user
router.route("/logout").post(verifyJWT, logoutUser) //* Route for looging out the user from the app

export default router
