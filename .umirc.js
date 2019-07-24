
// 更多配置参见 https://umijs.org/config/

export default {
  // base:'/Fun/AntD-Blog-Admin/',
  // publicPath:'/Fun/AntD-Blog-Admin/',
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: '博客后台',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  define: {
    // everything you want in build
  },
}
