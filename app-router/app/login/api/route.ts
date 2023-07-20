import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await fetch(`http://localhost:3200/oauth`, {cache: 'no-store'});
  const data = await response.json();

  return NextResponse.json({data});
}