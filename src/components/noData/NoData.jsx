import React from 'react';

const NoData = () => {
  return (
    <tr className="table-tr-odd">
      <th className="py-3" colSpan={3}>
        <div className="flex flex-col flex-wrap justify-center items-center gap-2">
          <p className="text-center text-base py-5">It looks like you don’t have any data yet.</p>
        </div>
      </th>
    </tr>
  );
};

export default NoData;
