import NoData from 'components/noData/NoData';
import React from 'react'

const TableBody = ({list}) => {
  return (
    <>
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
    </>
  )
}

export default TableBody