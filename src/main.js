import Router from 'svelte-page-router';
 
import App from './App.svelte';
import Page1 from './pages/Page1.svelte';
import Page2 from './pages/Page2.svelte';
 
const options = {
    click: true,
    popstate: true,
    dispatch: true,
    hashbang: false,
};
 
const router = new Router({
    routes: [{
        path: '/',
        component: Page1
    },{
        path: '/page2',
        component: Page2
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