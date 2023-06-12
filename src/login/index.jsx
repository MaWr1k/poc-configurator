/*
 *  Document    : Loginvalidation.js
 *  Author      : Novac
 *  Description : Loginvalidation
 */

import LoginForm from "./LoginForm";

const LoginPageIndex = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-5">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-2 py-10 bg-white shadow-lg sm:rounded-3xl sm:pb-5 sm:pr-20 sm:pl-20 sm:pt-10">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl pb-4 font-bold text-primary text-center">
                Login Here...
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Login Validation Page */}
                <LoginForm />
                <div className="flex items-center ">
                  <div className="flex flex-auto justify-center font-semibold py-5">
                    <a
                      href="/signup"
                      className="mx-1 px-6 py-2 hover:rounded hover:text-pink-600 text-blue-400 font-semibold"
                    >
                      New User
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageIndex;
