import React, { useEffect, useState } from 'react';
import { globalViewStates } from 'constants';
import { fetchCountries } from './io';
import Error from 'features/errorPages/Error';
import Loading from 'components/Loading';
import TableList from 'components/tables/KanonTable';

const Question2 = () => {
  const [viewState, setViewState] = useState(globalViewStates.LOADING);
  const [countryNames] = useState(['Turkey', 'Malta', 'Germany', 'Ireland']);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetchCountries(countryNames).then(
      ({ success, payload }) => {
        if (!success) {
          setViewState(globalViewStates.ERROR);
          return;
        }

        const { countries } = payload;

        const countryListData = countries.filter((item) => {
          for (let i = 0; i < countryNames.length; i++) {
            if (item.name === countryNames[i]) return true;
          }
          return false;
        });

        setCountryList(countryListData);
        setViewState(globalViewStates.DONE);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }, []);

  if (viewState === globalViewStates.LOADING) {
    return <Loading />;
  }

  if (viewState === globalViewStates.ERROR) {
    return <Error />;
  }

  return (
    <>
      <TableList list={countryList} />
    </>
  );
};

export default Question2;
