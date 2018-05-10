import Vue from 'vue'
import Router from 'vue-router'
import Discovery from '@/pages/Discovery'
import NoteDetail from '@/pages/NoteDetail'
import NoteComment from '@/pages/NoteComment'
import Attention from '@/pages/Attention'
import Purchase from '@/pages/Purchase'
import SearchPage from '@/pages/SearchPage'
import SearchResultsPage from '@/pages/SearchResultsPage'
import UserProfile from '@/pages/UserProfile'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: '/discovery'
        },
        {
            path: '/attention',
            name: 'attention',
            component: Attention
        },
        {
            path: '/discovery',
            name: 'discovery',
            component: Discovery
        },
        {
            path: '/purchase',
            name: 'purchase',
            component: Purchase
        },
        {
            path: '/search',
            name: 'search',
            component: SearchPage
        },
        {
            path: '/SearchResultsPage/:name',
            name: 'SearchResultsPage',
            component: SearchResultsPage
        },
        {
            path: '/noteDetail/:id',
            name: 'noteDetail',
            component: NoteDetail
        },
        {
            path: '/noteComment/:id',
            name: "noteComment",
            component: NoteComment
        },
        {
            path: '/userProfile/:id',
            name: "userProfile",
            component: UserProfile
        }
    ]
})