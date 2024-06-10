"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const {isLoaded, user} = useUser();

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <p>Welcome</p>
          <UserButton />
        </div>
      ) : (
        <p>You need to sign in</p>
      )}
    </div>
  );
}
