import React from 'react';

const LoginHeader = ({title, description}) => {
  return (
    <div className="flex flex-col justify-items-start text-left sm:w-4/5 mb-8">
      <h1 className="text-lg font-semibold text-black"> {title || ""} </h1>
      <p className="text-sm text-gray-400"> {description || ""}</p>
    </div>
  );
};

export default LoginHeader;
