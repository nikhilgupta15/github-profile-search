import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = params;
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`
    );
    const repos = await response.json();

    //console.log(repos);

    return NextResponse.json(repos);
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
