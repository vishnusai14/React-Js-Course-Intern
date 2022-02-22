import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <h1>This is the new home Page</h1>
      <Link href="/news/">All News</Link>
    </div>
  );
};

export default index;
