import React from 'react'

const Login = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 p-0 m-0'>
          <div className='d-flex justify-content-center align-items-center  vh-100'>
            <div className="card w-25 shadow-lg rounded-5   ">
              <div className="card-body  p-4 ">
                <i className="fa-solid fa-lock fa-2x d-block text-center "></i>
                <h3 className="text-center my-2 ">Login Form</h3>
                <form>
                  <label for="">Email</label>
                  <input className="form-control mb-4 rounded-3" type="email" />
                  <label for="">Password</label>
                  <input className="form-control mb-4 rounded-3" type=" password" />
                  <button className="btn btn-danger w-100 mt-2 rounded-3 ">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login