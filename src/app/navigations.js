export const navigations = [
  { label: 'Quản Trị Hệ Thống, Báo Cáo', type: 'label' },
  {
    name: 'Quản lý visa',
    children: [
      { name: 'Danh sách visa', path: '/admin/visa' },
      { name: 'Sản phẩm dịch vụ', path: '/admin/product-service' },
      { name: 'Phí dịch vụ theo quốc gia', path: '/admin/country-service' },
    ]
  },
  {
    name: 'Thống kê báo cáo',
    children: [
      { name: 'Thống kê tổng Visa, dịch vụ', path: '/admin/report/report-visa' },
      { name: 'Thống kê doanh số đại lý', path: '/admin/report/report-agency' },
    ]
  },
  {
    name: 'Quản lý tài khoản CMS',
    children: [
      { name: 'Danh sách tài khoản', path: '/admin/cms-account' },
    ]
  },
  {
    name: 'Đại lý affiliate ',
    children: [
      { name: 'Danh sách đại lý', path: '/admin/affiliate-agency' },
    ]
  },
  // {
  //   name: 'Session/Auth',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' }
  //   ]
  // },
  // {
  //   name: 'Components',
  //   icon: 'favorite',
  //   badge: { value: '30+', color: 'secondary' },
  //   children: [
  //     { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
  //     { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
  //     { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
  //     { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
  //     { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
  //     { name: 'Form', path: '/material/form', iconText: 'F' },
  //     { name: 'Icons', path: '/material/icons', iconText: 'I' },
  //     { name: 'Menu', path: '/material/menu', iconText: 'M' },
  //     { name: 'Progress', path: '/material/progress', iconText: 'P' },
  //     { name: 'Radio', path: '/material/radio', iconText: 'R' },
  //     { name: 'Switch', path: '/material/switch', iconText: 'S' },
  //     { name: 'Slider', path: '/material/slider', iconText: 'S' },
  //     { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
  //     { name: 'Table', path: '/material/table', iconText: 'T' }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   icon: 'trending_up',
  //   children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }]
  // },
  // {
  //   name: 'Documentation',
  //   icon: 'launch',
  //   type: 'extLink',
  //   path: 'http://demos.ui-lib.com/matx-react-doc/'
  // }
];
