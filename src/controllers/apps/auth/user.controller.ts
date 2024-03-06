import { User } from "@src/models/auth/user.model";
import { ApiError } from "@src/utils/ApiError";
import catchAsyn from "@src/utils/catchAsync";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createAndSendToken = (user, statusCode, res) => {
  //! 1. Create the JWT token
  const token = signToken(user._id);

  //! 2. Creating cookie
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };
  //! 3. Setting Cookie - cookiename | data | options
  res.cookie("jwt", token, cookieOptions);

  //! 4. Save the token in the user model
  user.token = token; // Set the token in the user model
  user.save(); // Save the user model with the updated token field

  res.status(statusCode).send({ status: "success", token, data: { user } });
};

export const registerUser = catchAsyn(async (req: Request, res: Response) => {
  //! !. Get the details from the body
  const { username, email, name, password } = req.body;

  //! 2. Check if the User already exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }], // Any one is founded
  });

  if (existedUser)
    throw new ApiError(409, "User with email or username already exists", []);

  //! 3. If User is not there create a new User
  const user = await User.create({
    email,
    password: bcrypt.hashSync(password, 8),
    name,
    username,
  });

  //! 4. Create and send JWT
  createAndSendToken(user, 201, res);
});
