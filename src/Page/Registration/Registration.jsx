import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {


  const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
            event.preventDefault();
            const form =event.target;
            const name =form.name.value;
            const email =form.email.value;
            const password =form.password.value;
            const photo =form.photo.value;
         console.log(name,email,password,photo);



         createUser(email,password)
         .then(result =>{
            const user = result.user;
            console.log(user);
         })
         .catch(error => console.log(error))
    }




    return (

      <div>

      <div className="hero min-h-screen" >
        
          <div className="hero-content text-center">
              <div className="max-w-md">

                  <div className="hero min-h-screen">
                      <div className="hero-content flex-col ">
                          <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Register now!</h1>
                          </div>
                          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                  <form onSubmit={handleRegister}>
                                  {/* <form> */}
                                      <div className="form-control">
                                          <label className="label">
                                              <span className="label-text">Name</span>
                                          </label>
                                          <input type="text" name='name' placeholder="name" className="input input-bordered"  required/>
                                      </div>
                                      <div className="form-control">
                                          <label className="label">
                                              <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                                      </div>
                                      <div className="form-control">
                                          <label className="label">
                                              <span className="label-text">Password</span>
                                          </label>
                                          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                          
                                      </div>

                                      <div className="form-control">
                                          <label className="label">
                                              <span className="label-text">PhotoURL</span>
                                          </label>
                                          <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                                          <label className="label">
                                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                          </label>
                                      </div>
                                      <div className="form-control mt-6">

                                          <input className="btn btn-warning bg-cyan-700 " type="submit" value="Register" />
                                      </div>
                                  </form>
                                  <p> Have an account ?<Link className='text-cyan-700' to="/login">Login</Link></p>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

  </div>
















//         <div>
//             <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col ">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Login now!</h1>
      
//     </div>
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="text" placeholder="email" className="input input-bordered" />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="text" placeholder="password" className="input input-bordered" />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
          
//           <input className="btn btn-primary" type="submit" value="Login" />
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//         </div>
    );
};

export default Registration;