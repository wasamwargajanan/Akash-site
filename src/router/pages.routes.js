export default[
    {
        path: '/',
        component: ()=> import('@/components/Home.vue')
    },
    {
        path: '/services',
        name:'Services',
        component: ()=> import('@/components/Services.vue')
    },
    {
        path: '/gallery/',
        name:'Gallery',
        component: ()=> import('@/components/Gallery.vue')
    },
    {
        path: '/aboutus',
        name:'AboutUs',
        component: ()=> import('@/components/AboutUs.vue')
    },
    {
        path: '/contactus',
        name:'ContactUs',
        component: ()=> import('@/components/ContactUs.vue')
    },
    
]