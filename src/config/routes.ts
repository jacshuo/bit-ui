// 助手路由
import {RouteProps} from 'react-router-dom';
import Typography from '../pages/Typography';
import Inputs from '../pages/Inputs';
import ColorPlate from '../pages/ColorPlate';
import Layout from '../pages/Layout';

const bitRoutes: RouteProps[] = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/typography',
    component: Typography,
  },
  {
    path: '/inputs',
    component: Inputs,
  },
  {
    path: '/colors',
    component: ColorPlate,
  },
];
export default bitRoutes;
