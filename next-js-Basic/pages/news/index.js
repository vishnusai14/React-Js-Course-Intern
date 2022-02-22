import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <ul>
      <li>
        <Link href="/news/accident-in-america">Accident In America</Link>
      </li>
      <li>
        <Link href="/news/google-ceo">Google Ceo</Link>
      </li>
    </ul>
  );
};

export default index;
