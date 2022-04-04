import Vue from 'vue'
import VueRouter from 'vue-router'

//import BoasVindas from './components/BoasVindas'
import CadastroFilmes from './components/CadastroFilmes'
import FormFilmes from './components/FormFilmes'
import FormLogin from './components/FormLogin'
import HomePage from "./components/HomePage.vue";
import PropostaFilmes from './components/PropostaFilmes.vue'
import GraficoFilmesGeneros from './components/GraficoFilmesGeneros'
import EnviarProposta from "./components/EnviarProposta.vue";

Vue.use(VueRouter)
const vueRouter = new VueRouter({
    mode: "history",

    routes: [
        { path: '/', component: HomePage },
        //{ path: '/', component: BoasVindas },
        { path: '/cadfilmes', component: CadastroFilmes ,meta: {login: true} },
        { path: '/formfilmes', component: FormFilmes,meta: {login: true} },
        { path: '/homepage', component: HomePage },
        { path: '/formlogin', component: FormLogin },
        { path: '/propostas', component: PropostaFilmes },
        { path: '/graffilmes', component: GraficoFilmesGeneros ,meta: {login: true} },
        { path: '/propostas/:id', name: 'propostas', component: EnviarProposta  },
    ]
})

vueRouter.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.login)) {
        if (!localStorage.token) {
            alert("Por favor, faça o login para ter acesso a página de cadastro")
            next("/formlogin");
        } else {
            next();
        }
    } else {
        next();
    }
});
export default vueRouter

// export default new VueRouter({
//     mode: 'history',
//     routes // short for `routes: routes`
// })