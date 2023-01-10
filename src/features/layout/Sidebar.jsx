import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Sidebar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const menuToggle = (e) => {
    setMobileActive(!mobileActive);
  };

  const menuContent = [
    {
      to: 'question1',
      name: 'Question 1'
    },
    {
      to: 'question2',
      name: 'Question 2'
    },
    {
      to: 'question3',
      name: 'Question 3'
    }
  ];

  return (
    <React.Fragment>
      <div className={`md:relative absolute z-20 ${mobileActive ? 'hidden' : ' md:hidden'}`}>
        <div className="logo flex items-center justify-between pr-4">
          <button className="toggle-icon" onClick={menuToggle}>
            <BiMenu className='text-2xl' />
          </button>
        </div>
      </div>

      <div className={`sidebar h-full ${mobileActive ? '!flex absolute' : ''}`}>
        <div className="flex flex-col w-64">
          <div className="logo flex items-center justify-between pr-4">
            <img src={Logo} alt="Kanon Gaming Logo" width="90px" />

            <span className={`${mobileActive ? '' : 'hidden'}`}>
              <button className="toggle-icon" onClick={menuToggle}>
                <BiX className='text-3xl mt-2' />
              </button>
            </span>
          </div>

          <div className="flex-1 flex flex-col overflow-y-auto ">
            <nav className="side-menu">
              {menuContent.map((menu) => {
                return (
                  <NavLink
                    key={menu.to}
                    to={menu.to}
                    className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
                  >
                    {menu.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
