import { useParams } from "react-router-dom";

export default function News() {
  let params = useParams()
  console.log(params)
  return (
    <div>你现在看的新闻id是{params.newsId}</div>
  )
}