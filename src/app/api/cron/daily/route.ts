import { NextResponse } from "next/server"
export async function GET() {
  console.log("Daily cron ran at", new Date().toISOString())
  return NextResponse.json({ ok: true, ran: new Date().toISOString() })
}
