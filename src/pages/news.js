import { useParams, NavLink } from "react-router-dom";

export default function News() {
  let params = useParams()
  console.log(params)

  const news = [{
    title: '新闻一', id: 1
  },{
    title: '新闻二', id: 2
  },{
    title: '新闻三', id: 3
  }]
  return (
    <>
      <h1>新闻列表</h1>
        <ul>
          {
            news.map(v => (<li key={v.id}>
              <NavLink
                style={({isActive}) => {
                  return {
                    color: isActive ? 'red': ''
                  }
                }}
                to={`/news/${v.id}`}>{v.title+v.id}</NavLink>
            </li>))
          }
        </ul>
      <div>你现在看的新闻id是{params.newsId}</div>
    </>
  )
}