/**
 * 路由格式配置
 */
 import {
  HomeOutlined,
  OrderedListOutlined,
  ReadOutlined,
  QuestionOutlined
} from '@ant-design/icons';

const menus = {
  // 菜单路由
  menu: [
    { key: '/home', title: '首页', icon: HomeOutlined, component: 'Home', auth: false },
    { key: '/todos', title: '任务', icon: OrderedListOutlined, component: 'Todos', auth: false },
    { key: '/news', title: '新闻', icon: ReadOutlined, component: 'News', auth: false },
    { 
      key: '/waiting1', 
      title: '待开发', 
      icon: QuestionOutlined, 
      component: '',
      subs: [
        { key: '/waiting1/w1', title: '不需登录', component: 'Waiting', auth: false},
        { key: '/waiting1/w2', title: '不需登录', component: 'Waiting', auth: false},
        { key: '/waiting1/w3', title: '需要登录', component: 'Waiting', auth: true}
      ]
    },
    { 
      key: '/waiting2', 
      title: '待开发', 
      icon: QuestionOutlined, 
      component: '',
      subs: [
        { key: '/waiting2/a1', title: '需要登录', component: 'Waiting', auth: true},
        { key: '/waiting2/a2', title: '不需登录', component: 'Waiting', auth: false},
        { key: '/waiting2/a3', title: '不需登录', component: 'Waiting', auth: false}
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
