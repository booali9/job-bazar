"use server";
import connect from "@/utils/db";
import User from "@/models/User";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";


export async function mailAction({ email }: { email: string }) {
  await connect();

  // Check if the user exists
  const user = await User.findOne({ email });

  if (user) {
    // Generate a token
    const token = nanoid(32);

    // Configure the email transporter
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const htmlbody = `Click here to <a href="http://localhost:3000/reset/${token}">RESET</a>`;

    const info = await transport.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: email, // recipient's email
      subject: "Password Reset", // Subject line
      text: "Click the link to reset your password.", // plain text body
      html: htmlbody, // html body
    });

    console.log("Message sent: %s", info.messageId);

    // Update the user's verify token
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { verifytoken: token },
      { new: true } // Return the updated document
    );

    if (updatedUser) {
      console.log("Token saved to database:", updatedUser.verifytoken);
    } else {
      console.log("Failed to update the token.");
    }
  } else {
    console.log("User does not exist");
  }
}
