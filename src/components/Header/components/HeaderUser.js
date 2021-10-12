import { Link } from "react-router-dom";

export function Login() {
  return (
    <Link
      to="/login"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      Đăng nhập
    </Link>
  );
}

export function LoginItem() {
  return (
    <Link
      to="/login"
      className="w-full inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    >
      Đăng nhập
    </Link>
  );
}

export function Signup() {
  return (
    <Link
      to="/signup"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      Đăng ký
    </Link>
  );
}

export function SignupItem() {
  return (
    <p className="mt-6 text-center text-base font-medium text-gray-500">
      Bạn chưa có tài khoản?{" "}
      <Link to="/signup" className="text-indigo-600 hover:text-indigo-500">
        Đăng ký
      </Link>
    </p>
  );
}

export function User(props) {
  const {user} = props;
  return (
    <Link
      to="/profile"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      {user.name}
    </Link>
  );
}

export const HeaderUser = {
  Login,
  LoginItem,
  Signup,
  SignupItem,
  User,
};
