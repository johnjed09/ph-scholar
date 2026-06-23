import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 },
    );
  }

  try {
    const openAlexUrl = `https://api.openalex.org/works?search=${encodeURIComponent(query)}&mailto=getesjohnjed09@gmail.com`;

    const response = await fetch(openAlexUrl);
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from OpenAlex API:", error);
    return NextResponse.json(
      { error: "Failed to fetch data." },
      { status: 500 },
    );
  }
}
