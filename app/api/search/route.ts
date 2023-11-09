import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const query = req.url.split("?")[1].split("=")[1];
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&page=1&per_page=1}`
    );
    const users = await response.json();

    //console.log(users);

    const userResponse = await fetch(
      `https://api.github.com/users/${users.items[0].login}`
    );

    const user = await userResponse.json();

    //console.log(user);

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
