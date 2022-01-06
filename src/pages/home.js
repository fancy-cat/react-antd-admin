import { Outlet, NavLink, useSearchParams } from 'react-router-dom';
export default function Home() {
  const news = [{
    title: '新闻一', id: 1
  },{
    title: '新闻二', id: 2
  },{
    title: '新闻三', id: 3
  }]
  let [searchParams, setSearchParams] = useSearchParams(); 
  console.log(searchParams.get('type'))
  return (
    <div>
      首页新闻列表
      <ul>
        {
          news.map(v => (<li key={v.id}>
            <NavLink
              style={({isActive}) => {
                return {
                  color: isActive ? 'red': ''
                }
              }}
              to={`/home/${v.id}`}>{v.title+v.id}</NavLink>
          </li>))
        }
      </ul>
      <Outlet />
    </div>
  )
}