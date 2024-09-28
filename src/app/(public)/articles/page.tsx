import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const page = () => {
  redirect("/");
  return (
    <div>
      If auto navigation is not done. <Link href="/">Go Home</Link>
    </div>
  );
};

export default page;
