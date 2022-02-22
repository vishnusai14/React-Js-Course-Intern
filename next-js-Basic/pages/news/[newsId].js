import React from "react";
import { useRouter } from "next/router";

const NewsDetail = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>{router.query.newsId}</h1>
      <p>This is a Detail of the news</p>
    </div>
  );
};

export default NewsDetail;
