/**
 * 路由格式配置
 */
const menus = {
  // 菜单路由
  menu: [
    { key: '/home', title: '首页', icon: '', component: 'Home', auth: false },
    { key: '/todos', title: '任务', icon: '', component: 'Todos', auth: false },
    { key: '/news', title: '新闻', icon: '', component: 'News', auth: false },
    { 
      key: '/waiting', 
      title: '待开发', 
      icon: '', 
      component: '',
      subs: [
        { key: '/waiting/w1', title: '不需登录', component: 'Waiting', auth: false},
        { key: '/waiting/w2', title: '不需登录', component: 'Waiting', auth: false},
        { key: '/waiting/w3', title: '需要登录', component: 'Waiting', auth: true}
      ]
    }
  ], 
  // 非菜单路由
  others: [
    { key: '/news/:newsId', title: '新闻详情', component: 'News', auth: false}
  ], 
  // 全屏单独路由
  single: [
    { key: '/login', title: '', icon: '', component: 'Login', auth: false}
  ]
}

export default menus
