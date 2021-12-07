import {createRouter, createWebHashHistory} from 'vue-router';
import isAuthenticatedGuard from './auth-guard';

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        name: 'PokemonLayout',
        path: '/pokemon',
        component: () => import(
            /* webpackChunkName: "PokemonLayout" */
            '@/modules/pokemon/layouts/PokemonLayout'
        ),
        children: [
            {
                name: 'PokemonHome',
                path: 'home',
                component: () => import(
                    /* webpackChunkName: "ListPage" */
                    '@/modules/pokemon/pages/ListPage'
                )
            },
            {
                name: 'PokemonPage',
                path: ':id',
                component: () => import(
                    /* webpackChunkName: "PokemonPage" */
                    '@/modules/pokemon/pages/PokemonPage'
                ),
                props: (route) => {
                    const id = Number(route.params.id);
                    if (isNaN(id)) {
                        return {
                            id: 1
                        }
                    } else {
                        return {
                            id: id
                        }
                    }
                }
            },
            {
                path: '',
                redirect: {
                    name: 'Home'
                }
            }
        ]
    },
    {
        name: 'OnePieceLayout',
        path: '/onepiece',
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(
            /* webpackChunkName: "OnePieceLayout" */
            '@/modules/onepiece/layouts/OnePieceLayout'
        ),
        children: [
            {
                name: 'OnePieceCharacters',
                path: 'characters',
                component: () => import(
                    /* webpackChunkName: "OnePieceCharacters" */
                    '@/modules/onepiece/pages/Characters'
                )
            },
            {
                name: 'OnePieceAbout',
                path: 'about',
                component: () => import(
                    /* webpackChunkName: "OnePieceAbout" */
                    '@/modules/onepiece/pages/About'
                )
            },
            {
                path: '',
                redirect: {
                    name: 'OnePieceCharacters'
                }
            }
        ]
    },
    {
        name: 'AboutPage',
        path: '/about',
        component: () => import(
            /* webpackChunkName: "AboutPage" */
            '@/modules/pokemon/pages/AboutPage'
        )
    },
    {
        name: 'NoPageFound',
        path: '/:pathMatch(.*)*',
        component: () => import(
            /* webpackChunkName: "NoPageFound" */
            '@/modules/shared/pages/NoPageFound'
        )
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// Guard Global - síncrono
// router.beforeEach((to, from, next) => {
//     console.log({to, from, next});
//     next();
//     // next() allows access
// });

// Guard Global - asíncrono
// const canAccess = () => {
//     return new Promise(resolve => {
//         resolve(true);
//     });
// }
// router.beforeEach(async(to, from, next) => {
//     const authorized = await canAccess();
//     authorized ? next() : next({name: 'PokemonPage'});
// });

export default router;
