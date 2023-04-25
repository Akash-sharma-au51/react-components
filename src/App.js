import React from 'react';
import { Form } from "./component/Form.jsx";
import {NavBar,} from './component/Navbar.jsx';

function App() {
  return (
<div>
  <div>
    <NavBar/>
  </div>
  <div className='my-5'>
    <Form/>
  </div>
</div>
      
  


  );
}

export default App;
