import { getEvents } from "@/utils/eventManagement";

export const revalidate = 3600;

export async function GET() {
  const eventColors = await getEvents();
  return new Response(JSON.stringify(eventColors));
}