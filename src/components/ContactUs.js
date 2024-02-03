import React from 'react'

const ContactUs = () => {
  return (
    <div className='loginbg'>
      <div className="d-flex justify-content-center align-items-center  vh-100 ">
        <div className="card w-25 h-75 shadow-lg rounded-5  ">
          <div className="card-body p-4">
            <i className="fa-solid fa-lock fa-2x d-block text-center " />
            <h3 className="text-center my-2  ">Contact Form</h3>
         
              <div>
                <label htmlFor="">Name</label>
                <input className="form-control mb-4 rounded-3" type="text" name="name"   />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input className="form-control mb-4 rounded-3" type="email" name="email"  />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea className="form-control mb-4 rounded-3" rows={3} cols={30} type="String" name="message" />
              </div>

              <div>
                <button type='submit' className="btn btn-danger w-100 mt-2 rounded-3 ">Submit</button>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs