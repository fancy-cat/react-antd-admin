import { Outlet, NavLink, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
export default function Home() {
  const news = [{
    title: '新闻一', id: 1
  },{
    title: '新闻二', id: 2
  },{
    title: '新闻三', id: 3
  }]
  let [searchParams] = useSearchParams(); 
  console.log(searchParams.get('type'))
  let location = useLocation()
  console.log(location)
  const navigate = useNavigate()

  const goLoginPage = () => {
    navigate('/login')
  }
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
              to={`/home/${v.id}?type=100${v.id}`}>{v.title+v.id}</NavLink>
          </li>))
        }
      </ul>
      <Outlet />
      <div>
        <button onClick={() => goLoginPage()}>去登录页面</button>
      </div>
    </div>
  )
}