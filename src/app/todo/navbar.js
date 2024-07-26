"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar';
import '../bootstrap-5.0.2-dist/css/bootstrap.min.css';
// import '../bootstrap-5.0.2-dist/js/bootstrap.min.js';
import "../index.css"
import{
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
  } from 'react-router-dom'

function MyNavbar(){
    // const navigate=useNavigate()
    
    // const login=useNavigate()
    // const home=useNavigate()
    // const todo=useNavigate()
    // const users=useNavigate()
    const toHome = () => {
        // navigate('/');
    };
    const toTask = () => {
        // navigate('/Tasks/');
    };
    const toLogin = () => {
        // navigate('/Login/');
    };
     return <Navbar className="bg-blue-500">
          <NavbarBrand>Mon Logo</NavbarBrand>
          <NavbarContent>
            <NavbarItem>
              <Link href="/">Accueil</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/todo">Todo</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/log">Login</Link>
            </NavbarItem>
            <NavbarMenuToggle>User</NavbarMenuToggle>
            <NavbarMenu>
              <NavbarMenuItem>
                <Link href="#">User</Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link href="#">Userinfo</Link>
              </NavbarMenuItem>
            </NavbarMenu>
          </NavbarContent>
        </Navbar>
      
    
    
     
     {/* <nav className="bg-light">
     <div className="container mx-auto">
       <div className="flex items-center justify-between py-4">
         <a href="#" className="text-lg font-bold">Navbar</a>
         <button
           className="block lg:hidden text-blue-500 hover:text-blue-600 focus:outline-none"
           type="button"
           data-toggle="collapse"
           data-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="hidden lg:flex space-x-4" id="navbarNav">
           <ul className="flex space-x-4">
             <li>
               <a onClick={toHome} href="#" className="nav-link">
                 Home
               </a>
             </li>
             <li>
               <a onClick={toTask} href="#" className="nav-link">
                 Todo
               </a>
             </li>
             <li className="relative group">
               <a href="#" className="nav-link">
                 Users
               </a>
               <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-md mt-2">
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                   Action
                 </a>
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                   Another action
                 </a>
                 <div className="border-t"></div>
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                   Something else here
                 </a>
               </div>
             </li>
             <li>
               <a onClick={toLogin} href="#" className="nav-link">
                 Login
               </a>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </nav>
    */}
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //             <a class="navbar-brand" href="#">Navbar</a>
    //             <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarNav">
    //                 <ul className="navbar-nav mr-auto">
    //                     {/* <li className="nav-item active">
    //                         <a onClick={toHome} className="nav-link">Home<span className="sr-only"></span></a>
    //                     </li> */}
    //                     <li className="nav-item">

    //                         <a onClick={toHome} className="nav-link" href="#"><span className="sr-only"/>Home</a>
    //                     </li>
    //                     <li className="nav-item">

    //                         <a onClick={toTask} className="nav-link" href="#">Todo</a>
    //                     </li>
    //                     <li className="nav-item dropdown" >
    //                         <a href="#" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-Toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                             Users
    //                         </a>
    //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <a className="dropdown-item" href="#">Action</a>
    //                             <a className="dropdown-item" href="#">Another action</a>
    //                             <div className="dropdown-divider"></div>
    //                             <a className="dropdown-item" href="#">Something else here</a>
    //                         </div>
    //                     </li>
    //                     <li className="nav-item">

    //                         <a onClick={toLogin} className="nav-link" href="#">Login</a>
    //                     </li>
    //                 </ul>
    //                 {/* <form class="form-inline my-2 my-lg-0">
    //                     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //                     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //                 </form> */}
    //             </div>
    //         </nav>

}
export default Navbar;