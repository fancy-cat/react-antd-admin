/**
 * 路由格式配置
 */
const menus = {
  // 菜单路由
  menu: [
    { key: '/home', title: '首页', icon: '', component: 'Home'},
    { key: '/todos', title: '任务', icon: '', component: 'Todos'},
    { key: '/news', title: '新闻', icon: '', component: 'News'},
    { 
      key: '/waiting', 
      title: '待开发', 
      icon: '', 
      component: '',
      subs: [
        { key: '/waiting/w1', title: '项目1', component: 'Waiting'},
        { key: '/waiting/w2', title: '项目2', component: 'Waiting'},
        { key: '/waiting/w3', title: '项目3', component: 'Waiting'}
      ]
    }
  ], 
  // 非菜单路由
  others: [
    { key: '/news/:newsId', title: '新闻详情', component: 'News'}
  ], 
  // 全屏单独路由
  single: [
    { key: '/login', title: '', icon: '', component: 'Login'}
  ]
}

export default menus
