import Home from '../components/Home/Home.jsx'
import Wedding from '../components/Wedding/Wedding.jsx'
import Prewedding from '../components/Prewedding/Prewedding.jsx'
import Cinematic from '../components/Cinematic/Cinematic.jsx'
import About from '../components/About/About.jsx'
import More from '../components/More/More.jsx'
export default [
  // {
  //   exact:true,
  //   path:'/',
  //   component:Admin
  // },
  {
    exact:true,
    path:'/home',
    component:Home
  },
  {
    exact:true,
    path:'/wedding',
    component:Wedding
  },
  {
    exact:true,
    path:'/prewedding',
    component:Prewedding
  },
  {
    exact:true,
    path:'/cinematic',
    component:Cinematic
  },
  {
    exact:true,
    path:'/about',
    component:About
  },
  {
    exact:true,
    path:'/more',
    component:More
  }
]