import React from 'react';
const Login= ()=> {
  return (
    <header >
    <div class="bg-yellow-200  min-h-screen w-screen flex flex-col justify-center items-center  font-sans ">
    <div class=" bg-gray-100 shadow-none sm:shadow-lg px-8 sm:px-12 w-full  xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6  sm:h-auto py-8  ">
    
    <div>
    <h1 class=" text-center p-5  w-full font-bold text-5xl text-gray-600  "> Login </h1>
    </div>
    <div class="w-full bg-gray-200 my-3 h-px" > </div> 
    <form>
    <div>
    <div class="flex flex-col gap-4 px-0 py-4">
                  <p> <label class="text-gray-700 ">Account</label>
                    <input class="py-2 pl-10 border border-gray-200 w-full" placeholder="Phone Number or Email" type="email"/>
                  </p> 
                  </div>
    </div>
    
    <div>
    <div> <label class="text-gray-700">Password</label>
                    <input class="py-2 pl-10 border border-gray-200 w-full" placeholder="Password" type="password"/>
                  </div>
    
    </div>
    
    <div>
    <div class="w-full flex flex-row gap-2 py-4">
                    <button class="border border-gray-300 bg-red-500 hover:bg-red-400 hover:text-white w-6/12 text-white p-2 flex flex-row justify-center items-center gap-1 ">  Sign-up </button>
                    <button class="border border-gray-300 bg-indigo-500 hover:bg-indigo-400 hover:text-white w-6/12 text-white p-0 flex flex-row justify-center items-center gap-1"> Login </button>
                  </div>
      
    </div>
    
    <div>
    <div class="w-full flex flex-row justify-center ">
                    <a class="text-blue-600  " href="#" >Forgot password</a>
                  </div>
      
    </div>
    
    <div>
    <div class="my-2 flex flex-row justify-center py-4">
                    <span class="absolute bg-white px-4">or</span>
                    <div class="w-full bg-gray-200 mt-3 h-px"  ></div>
                  </div>
    </div>
    
    <div>
    <div class="w-full flex flex-col gap-2">
                    <button class="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 "> Sign-in with Google </button>
                    <button class="bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 "> Sign-in with Facebook  </button>
                   
                </div>
    </div>
    
    <div>
    <p class="mt-8"> Dont have an account? <span class="cursor-pointer text-sm text-blue-600">  Sign up to receive offers</span></p>
    </div>
    
    </form>
    </div>
    </div>
        </header>
  );
}

export default Login;
