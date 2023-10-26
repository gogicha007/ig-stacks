import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "../../../../../prisma/script";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { name, email, role, username, password } = await req.json();
    if (!username || !password)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    // const user = prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //     role,
    //     username,
    //     // hashedPassword,
    //   },
    // });
    // return NextResponse.json({ user }, {status: 201})
  } catch (error) {
  } finally {
  }
};
