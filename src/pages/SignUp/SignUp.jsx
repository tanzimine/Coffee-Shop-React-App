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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50 py-12 px-4">
            <div className="max-w-md w-full">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl shadow-lg mb-6">
                        <span className="text-white text-3xl font-bold">☕</span>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                        Join BrewCraft
                    </h1>
                    <p className="text-gray-600">Create your account to start exploring</p>
                </div>

                {/* Sign Up Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Enter your email" 
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500" 
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Create a strong password" 
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500" 
                                required
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Must contain: lowercase, uppercase, 2+ digits, and special character ($#%&)
                            </p>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <input 
                                type="password" 
                                name="conPassword"
                                placeholder="Confirm your password" 
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500" 
                                required
                            />
                        </div>
                        
                        <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Create Account
                        </button>
                    </form>

                    {/* Sign In Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/signin" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">
                                Sign in here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;