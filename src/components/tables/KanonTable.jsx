import { countryColumns } from 'constants';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import TableBody from './TableBody';

const KanonTable = ({ list, filter }) => {
  let [containsText, setContainsText] = useState('');
  const [countryList, setCountryList] = useState(list);

  const searchLog = () => {
    if (containsText === '' || containsText === null) {
      setCountryList(list);
    } else {
      const filteredList = list.filter((item) => item.name.toLowerCase() === containsText.trim().toLowerCase());
      setCountryList(filteredList);
    }
  };

  return (
    <div className="table-container">
      <table className="w-full text-sm leading-5 text-gray-500 dark:text-gray-400">
        <thead>
          {filter && (
            <tr>
              <th colSpan={8}>
                <div className="flex items-center justify-start">
                  <div className="flex items-end">
                    <span className="mr-3">
                      <input
                        value={containsText}
                        onChange={(e) => {
                          setContainsText(e.target.value);
                        }}
                        placeholder={`Filter by full name`}
                        className="input-borderless !w-40 text-center"
                      />
                    </span>
                    <span className="btn-basic" onClick={() => searchLog()}>
                      <BiSearch className="text-base mr-2" />
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          )}

          <tr>
            {countryColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <TableBody list={countryList} />
        </tbody>
      </table>
    </div>
  );
};

export default KanonTable;
