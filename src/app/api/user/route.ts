import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName,name, lastName, company, email, phone, message } =
      await req.json();
    // console.log(firstName)

    const parsePhone = parseInt(phone)
    const response = await db.user.create({
      data: {
        firstname: firstName || name,
        lastname: lastName,
        company,
        email,
        phone_no: parsePhone,
        message,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("[CONTACT] Error:", error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
