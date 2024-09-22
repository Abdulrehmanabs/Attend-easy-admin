import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

    if (email.includes('@') && email.includes('.') && password.length > 3) {
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Log In Successfully");
      window.location.href = "/";
    } else {
      if (!email.includes('@') || !email.includes('.')) {
        toast.error("You have entered an invalid email");
      } else if (password.length < 4) {
        toast.error("Password should be greater than 4 letters");
      } else {
        toast.error("Invalid credentials");
      }
    }
  };



  return (
    <div className="flex p-3 items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please enter your details.
          </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="email"
                required
                className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {/* Add your icon here */}
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 9.15005C19.44 5.52005 16.06 3.43005 12.5 3.43005C10.72 3.43005 8.99 3.95005 7.41 4.92005C5.83 5.90005 4.41 7.33005 3.25 9.15005C2.25 10.7201 2.25 13.2701 3.25 14.8401C5.56 18.4801 8.94 20.5601 12.5 20.5601C14.28 20.5601 16.01 20.0401 17.59 19.0701C19.17 18.0901 20.59 16.6601 21.75 14.8401C22.75 13.2801 22.75 10.7201 21.75 9.15005ZM12.5 16.0401C10.26 16.0401 8.46 14.2301 8.46 12.0001C8.46 9.77005 10.26 7.96005 12.5 7.96005C14.74 7.96005 16.54 9.77005 16.54 12.0001C16.54 14.2301 14.74 16.0401 12.5 16.0401Z"
                          fill="#ADADAD"
                        />
                        <path
                          d="M12.5 9.14001C10.93 9.14001 9.64999 10.42 9.64999 12C9.64999 13.57 10.93 14.85 12.5 14.85C14.07 14.85 15.36 13.57 15.36 12C15.36 10.43 14.07 9.14001 12.5 9.14001Z"
                          fill="#ADADAD"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.77 9.18C21.48 8.72 21.17 8.29 20.85 7.89C20.48 7.42 19.78 7.38 19.36 7.8L16.36 10.8C16.58 11.46 16.62 12.22 16.42 13.01C16.07 14.42 14.93 15.56 13.52 15.91C12.73 16.11 11.97 16.07 11.31 15.85C11.31 15.85 9.87999 17.28 8.84999 18.31C8.34999 18.81 8.50999 19.69 9.17999 19.95C10.25 20.36 11.36 20.57 12.5 20.57C14.28 20.57 16.01 20.05 17.59 19.08C19.2 18.08 20.65 16.61 21.82 14.74C22.77 13.23 22.72 10.69 21.77 9.18Z"
                          fill="#ADADAD"
                        />
                        <path
                          d="M14.52 9.98L10.48 14.02C9.97 13.5 9.64 12.78 9.64 12C9.64 10.43 10.92 9.14 12.5 9.14C13.28 9.14 14 9.47 14.52 9.98Z"
                          fill="#ADADAD"
                        />
                        <path
                          d="M18.75 5.75L15.36 9.14C14.63 8.4 13.62 7.96 12.5 7.96C10.26 7.96 8.46 9.77 8.46 12C8.46 13.12 8.91 14.13 9.64 14.86L6.26 18.25H6.25C5.14 17.35 4.12 16.2 3.25 14.84C2.25 13.27 2.25 10.72 3.25 9.15C4.41 7.33 5.83 5.9 7.41 4.92C8.99 3.96 10.72 3.43 12.5 3.43C14.73 3.43 16.89 4.25 18.75 5.75Z"
                          fill="#ADADAD"
                        />
                        <path
                          d="M15.36 12C15.36 13.57 14.08 14.86 12.5 14.86C12.44 14.86 12.39 14.86 12.33 14.84L15.34 11.83C15.36 11.89 15.36 11.94 15.36 12Z"
                          fill="#ADADAD"
                        />
                        <path
                          d="M22.27 2.23C21.97 1.93 21.48 1.93 21.18 2.23L2.73 20.69C2.43 20.99 2.43 21.48 2.73 21.78C2.88 21.92 3.07 22 3.27 22C3.47 22 3.66 21.92 3.81 21.77L22.27 3.31C22.58 3.01 22.58 2.53 22.27 2.23Z"
                          fill="#ADADAD"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember_me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;