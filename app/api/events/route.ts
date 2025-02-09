import { AirtableEventsManager } from "@/utils/airtable";
import { NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
  const events = await new AirtableEventsManager().getAllEvents();
  return NextResponse.json(events);
}