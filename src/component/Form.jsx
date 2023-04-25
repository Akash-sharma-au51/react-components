import React from 'react'

 function Form() {
  return (
    <div className='container'>
        <form>
  <div className="mb-3">
    <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your email '/>
    <div id="emailHelp" className="form-text">beware of sharing emails and password</div>
  </div>
  <div className="mb-3">
    <label htmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='enter your password'/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlhtmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-info">Submit</button>
</form>
      
    </div>
  )
}
export  {Form};
