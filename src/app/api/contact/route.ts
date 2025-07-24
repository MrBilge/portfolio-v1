import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Gelen veri:", body);

  return NextResponse.json(
    { message: "Form başarıyla alındı!" },
    { status: 200 }
  );
}

export const AddContact = async (payload: any) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    console.error("failed", res.status);
    throw new Error(` failed with status ${res.status}`);
  }
};
