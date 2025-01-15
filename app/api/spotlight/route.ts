import { AirtableSpotightManager } from "@/utils/airtable";

export const revalidate = 3600;

export async function GET() {
  const post = await new AirtableSpotightManager().getLatestRecord();
  console.log(post.fields);
  return new Response(JSON.stringify(post.fields));
}