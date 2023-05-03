import { lazy } from "react";

const Routes = [
    {
        path: '/home',
        component: lazy(() => import('../Components/Page/main')),
        title: 'Home',
        exact: true,
        type: 'core',
    },
    {
        path: '/detail',
        component: lazy(() => import('../Components/Detail-card/detail')),
        title: 'detail',
        exact: true,
        type: 'core',
    }
];

export default Routes;