import Vue from 'vue';
import Router from 'vue-router';
import Alunos from './components/Aluno/Alunos'
import Professor from './components/Professor/Professor'
import Sobre from './components/Sobre/Sobre'

Vue.use(Router);

export default new Router({
    routes:[
        {
            patch:'/professor',
            nome: 'Professores',
            component: 'Professor'
        },
        {
            patch:'/aluno',
            nome: 'Alunos',
            component: 'Alunos'
        },
        {
            patch:'/sobre',
            nome: 'Sobre',
            component: 'Sobre'
        }
    ]
})