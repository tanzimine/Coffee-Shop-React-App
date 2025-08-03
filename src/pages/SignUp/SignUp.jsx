import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";

const SignUp = () => {
    const {handleSignUp} = useContext(authContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        if(password.length <6){
            alert("Password must be at least 6 characters");
            return;
        }
        if(password !=conPassword){
            alert("Passwords didn't match")
            return
        }

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){2,})(?=.*[$#%&]).+$/.test(password)){
            alert("password not valid");
            return;
        }
        // console.log(email,password,conPassword)
        handleSignUp(email,password);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold mb-6">Sign Up</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="email@example.com" 
                                className="input input-bordered" 
                                required
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="••••••••" 
                                className="input input-bordered" 
                                required
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="conPassword"
                                placeholder="••••••••" 
                                className="input input-bordered" 
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                    </form>
                    
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? 
                        <a href="/signin" className="link link-primary ml-1">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;