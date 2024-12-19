import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      className="w-[90%] max-w-md p-6 bg-black rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl font-bold mb-6">Sign up account</h1>
      <p className="text-gray-400 mb-6">
        Enter your personal data to create your account.
      </p>
      <div className="flex gap-4 mb-4">
        <button className="bg-gray-800 text-white py-2 px-4 rounded">G</button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded">
          GitHub
        </button>
      </div>
      <div className="my-4 text-gray-400 text-center">or</div>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-900 py-2 px-4 mb-4 rounded text-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-gray-900 py-2 px-4 mb-6 rounded text-gray-300"
        />
        <button className="w-full bg-white text-black py-2 px-4 rounded">
          Sign up →
        </button>
      </form>
      <p className="mt-4 text-gray-500 text-center">
        Already have an account?{" "}
        <a href="#" className="text-white">
          Log in
        </a>
      </p>
    </motion.div>
  );
};

export default Login;
