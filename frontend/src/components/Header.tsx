import { useState } from 'react';
import { FcCustomerSupport } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { clearLocalStorage } from '../slices/authSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const [hide, setHide] = useState(true);
  const { userInfo } = useAppSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearLocalStorage());
      navigate('/');
    } catch (error: any) {
      toast.error(error?.data?.message || 'Error');
    }
  };
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="/">
          <span className="sr-only"> MERN Stack Authentication Demo</span>

          <FcCustomerSupport size={30} />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              {userInfo ? (
                <div className="justify-center relative">
                  <div
                    className="inline-flex items-center overflow-hidden rounded-md border font-medium bg-white focus:outline-none text-white shadow  focus:ring"
                    onClick={() => setHide(!hide)}
                  >
                    <a
                      href="#"
                      className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                    >
                      {userInfo?.name}
                    </a>
                  </div>

                  <div
                    className={`absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg ${
                      hide ? 'hidden' : ''
                    }`}
                    role="menu"
                  >
                    <div className="p-2">
                      <Link
                        to="/profile"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        My Profile
                      </Link>
                    </div>

                    <div className="p-2">
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                        onClick={handleOnLogout}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
