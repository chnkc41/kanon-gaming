import React from 'react';

const NoData = () => {
  return (
    <tr className="table-tr-odd">
      <th colSpan={3}> 
          <p className="text-center text-base py-5">It looks like you don’t have any data yet.</p>
      </th>
    </tr>
  );
};

export default NoData;
