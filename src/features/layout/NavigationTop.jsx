import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const NavigationTop = ({ ...props }) => {
  const [themeMode, setThemeMode] = useState();

  useEffect(() => {
    if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
      setThemeMode(true);
    }
  }, []);

  const darkMode = () => {
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.contains('dark')
      ? localStorage.setItem('dark', true)
      : localStorage.removeItem('dark');
    setThemeMode(!themeMode);
  };

  return (
    <div className="topbar">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600" />
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            onClick={darkMode}
            className={`
              ${
                themeMode === true
                  ? 'relative inline-flex items-center py-1 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none border border-gray-700 bg-slate-700 text-slate-400 focus-visible:ring-slate-500'
                  : 'relative inline-flex items-center py-1 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-sky-500 text-cyan-200 focus-visible:ring-cyan-600 '
              }`}
            id="headlessui-switch-20"
            role="switch"
            type="button"
            tabIndex="0"
            aria-checked="true"
          >
            <span className="sr-only">Enable dark mode</span>
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className={`${
                themeMode === true
                  ? 'transform transition-transform scale-100 duration-300'
                  : 'transform transition-transform scale-0 duration-500'
              }`}
              //className={`${themeMode === true ? "transform transition-transform scale-0 duration-500" : "transform transition-transform scale-100 duration-300"}`}
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              //className={`${themeMode === true ? "ml-3.5 transform transition-transform scale-100 duration-300" : "ml-3.5 transform transition-transform scale-0 duration-500"}`}
              className={`${
                themeMode === true
                  ? 'ml-3.5 transform transition-transform scale-0 duration-500'
                  : 'ml-3.5 transform transition-transform scale-100 duration-300'
              }`}
            >
              <path
                d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            <span
              className={`absolute left-0.5 border bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform 
             ${themeMode === true ? 'translate-x-[2.625rem]' : ''}`}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className={`${
                  themeMode === true
                    ? 'flex-none transition duration-500 transform text-cyan-500 opacity-0 scale-0'
                    : 'flex-none transition duration-500 transform text-cyan-500 opacity-100 scale-100'
                }`}
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className={`${
                  themeMode === true
                    ? 'flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-100 scale-100'
                    : 'flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 scale-0'
                }`}
              >
                <path
                  d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>

          <div className="relative flex justify-center items-center border-l  border-slate-200 ml-4 px-4 dark:border-slate-800 cursor-pointer overflow-hidden">
            <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 mr-2">
              <svg className="h-full w-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <span
              className="hidden sm:flex flex-col text-sm text-center"
              style={{ maxWidth: '11rem' }}
            >
              <span className="text-xs text-gray-700 dark:text-gray-400">Welcome</span>
              <span className="text-sm text-teal-600 dark:text-teal-400 font-semibold ">
                {props.userRole.user || ''}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userRole: state.userReducer
  };
}
export default connect(mapStateToProps)(NavigationTop);
