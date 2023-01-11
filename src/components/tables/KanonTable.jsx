import NoData from 'components/noData/NoData';
import { countryColumns } from 'constants';
import React from 'react';

const KanonTable = ({ list }) => {
  return (
    <table className="mx-auto text-sm leading-5 text-gray-500 dark:text-gray-400">
      <thead>
        <tr>
          {countryColumns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {list.length === 0 ? (
          <NoData />
        ) : (
          list &&
          list.map((list, i) => {
            return (
              <tr key={list.name} className={i % 2 === 0 ? 'table-tr-odd' : 'table-tr-even'}>
                <td>
                  <img src={list.flag} alt="Country Flag" width="50px" height="50px" />
                </td>
                <td className="px-6 py-4 md:table-cell block">{list.name || ''}</td>
                <td>{list.capital}</td>
                <td>{list.region}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default KanonTable;
