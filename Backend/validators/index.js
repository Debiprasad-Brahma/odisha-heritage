import {body} from "express-validator"

//REVIEW -  Validator for the user register
const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invlid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLowercase()
      .withMessage("username must be lower case")
      .isLength({min: 3})
      .withMessage("username must be at least 3 characters long"),
    body("password").trim().notEmpty().withMessage("Password field must not be empty"),
  ]
}

//REVIEW -  Validator for the user register
const userLoginValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
  ]
}

export {userRegisterValidator, userLoginValidator}
