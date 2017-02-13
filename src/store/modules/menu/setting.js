/**
 * Created by li on 17-1-31.
 */
import lazyLoading from './lazyLoading'

export default {
  name: '系统设置',
  path: '/setting',
  meta: {
    icon: 'fa-cog',
    expanded: false
  },
  component: lazyLoading('setting', true),

  children: [
    {
      name: '用户管理',
      path: 'user',
      component: lazyLoading('setting/user')
    },
    {
      name: '测试',
      path: 'test',
      component: lazyLoading('setting/mytest')
    }
  ]
}
