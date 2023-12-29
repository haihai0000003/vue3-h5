import router from "@/router"
import { getToken } from "@/utils/auth"
import { useUserStore } from "@/store/modules/user"

const whiteListByPath = ["/login","/login/message"]

/** 免登录白名单（匹配路由 name） */
const whiteListByName = []

/** 判断是否在白名单 */
const isWhiteList = (to) => {
  // path 和 name 任意一个匹配上即可
  return whiteListByPath.indexOf(to.path) !== -1 || whiteListByName.indexOf(to.name) !== -1
}

export default isWhiteList

router.beforeEach(async (to, _from, next) => {
    const userStore = useUserStore()
    const token = getToken()
    console.log(token)
    // 判断该用户是否已经登录
    if (!token) {
      // 如果在免登录的白名单中，则直接进入
      if (isWhiteList(to)) {
        next()
      } else {
        // 其他没有访问权限的页面将被重定向到登录页面
        next("/login")
      }
      return
    }
  
    // 如果已经登录，并准备进入 Login 页面，则重定向到主页
    if (to.path === "/login") {
      return next({ path: "/" })
    }
  
    // 如果用户已经获得其权限角色
    if (userStore.roles.length !== 0) return next()
    
    return next()
    // 否则要重新获取权限角色
    // try {
    //   if (routeSettings.async) {
    //     // 注意：角色必须是一个数组！ 例如: ['admin'] 或 ['developer', 'editor']
    //     await userStore.getInfo()
    //     const roles = userStore.roles
    //     // 根据角色生成可访问的 Routes（可访问路由 = 常驻路由 + 有访问权限的动态路由
    //     permissionStore.setRoutes(roles)
    //     await permissionStore.getSyncRouters()
    //     permissionStore.filterRoutes.forEach((route) => router.addRoute(route))
    //   } else {
    //     // 没有开启动态路由功能，则启用默认角色
    //     userStore.setRoles(routeSettings.defaultRoles)
    //     permissionStore.setRoutes(routeSettings.defaultRoles)
    //   }
    //   // 将'有访问权限的动态路由' 添加到 Router 中
    //   permissionStore.dynamicRoutes.forEach((route) => router.addRoute(route))
    //   // 确保添加路由已完成
    //   // 设置 replace: true, 因此导航将不会留下历史记录
    //   next({ ...to, replace: true })
    // } catch (err) {
    //   // 过程中发生任何错误，都直接重置 Token，并重定向到登录页面
    //   userStore.resetToken()
    //   ElMessage.error(err.message || "路由守卫过程发生错误")
    //   NProgress.done()
    //   next("/login")
    // }
  })