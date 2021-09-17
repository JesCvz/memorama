import Game from "./views/Game/Game";
import { Instructions } from "./views/Instructions/Instructions";
import { Portada } from "./views/Portada/Portada";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';

export const routes = [
    {
        name:'Portada',
        path:'/portada',
        component: Portada,
        icon: PeopleIcon,
    },
    {
        name:'Instrucciones',
        path:'/instrucciones',
        component: Instructions,
        icon: ListAltIcon,
    }, 
    {
        name:'Juego',
        path:'/jugar',
        component: Game,
        icon: PlayArrowIcon,
    },
   

]