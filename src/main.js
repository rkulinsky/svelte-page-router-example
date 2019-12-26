import Router from 'svelte-page-router';
 
import App from './App.svelte';
 
const options = {
    click: true,
    popstate: true,
    dispatch: true,
    hashbang: false,
};
 
const router = new Router({
    routes: [{
        path: '/',
        component: import('./pages/Page1.svelte')
    },{
        path: '/page2',
        component: import('./pages/Page2.svelte')
    }],
    ...options
});
 
// simple integrate with Svelte
 
const app = new App({
    target: document.body,
    props: {
        component: null,
        name: 'svelte-page-router sample'
    },
});
 
router.enter((ctx, next) => {
    app.$set({ ...ctx });
    tick().then(next);
});
 
router.exit((ctx, next) => {
    app.$set({ component: null });
    tick().then(next);
});
 
router.start();