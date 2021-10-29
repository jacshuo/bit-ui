// 助手路由
import {RouteProps} from 'react-router-dom';
import TypographyPage from '../pages/TypographyPage';
import InputsPage from '../pages/InputsPage';
import ColorPlattePage from '../pages/ColorPlattePage';
import Layout from '../pages/Layout';

const bitRoutes: RouteProps[] = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/typography',
    component: TypographyPage,
  },
  {
    path: '/inputs',
    component: InputsPage,
  },
  {
    path: '/colors',
    component: ColorPlattePage,
  },
];
export default bitRoutes;
