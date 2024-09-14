import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <span>Hello Hockey</span>
      <span>
        <Link
          href="/sports/cricket"
          className="text-blue-500 text-xl">
          Go to Cricket
        </Link>
      </span>
    </div>
  );
};

export default page;
