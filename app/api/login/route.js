import { createToken } from "@app/registration/auth";
import connectDb from "@app/registration/connectDb";
import RegistrationModel from "@app/models/registration";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    let { username, password } = await req.json();
    let userData = { username, password };
    connectDb();
    let loginData = await RegistrationModel.findOne({ username: username });
    if (loginData) {
      if (password !== loginData.password) {
        return NextResponse.json({ error: "wrong password" });
      } else if (!loginData.permission) {
        return NextResponse.json({ error: "permission not given" });
      } else {
        let token = createToken(userData);
        return NextResponse.json({ msg: token, userId: loginData._id });
      }
    } else {
      return NextResponse.json({ error: "user not found" });
    }
  } catch (err) {
    return NextResponse.json({ error: "user not found" });
  }
}
