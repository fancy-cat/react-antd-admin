import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
export default function Home() {

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
      <div>
        <button onClick={() => goLoginPage()}>去登录页面</button>
      </div>
    </div>
  )
}