import Link from "next/link";
import React from "react";
import Button from "../../components/button";

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
      <Button color="red" name="John" />
    </div>
  );
};

export default page;
