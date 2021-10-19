import React from 'react';
import Home from './home';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Detalhes from './detalhes';
function SuperHero(){
    return<>
       <div className='container'>
       <BrowserRouter>
           <Link to='/'></Link>
           <Link to='/detalhes'></Link>
           <Switch>
             <Route exact path='/'>
                <Home/>
             </Route>
             <Route path='/detalhes'>
                 <Detalhes/>
             </Route>
           </Switch>
       </BrowserRouter>  
       </div>
    </>
}
export default SuperHero;