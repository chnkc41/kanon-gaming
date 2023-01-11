import React, { useEffect, useState } from 'react';
import { globalViewStates } from 'constants';
import { fetchCountry } from './io';
import Error from 'features/errorPages/Error';
import Loading from 'components/Loading';
import TableList from 'components/tables/KanonTable';

const Question1 = () => {
  const [viewState, setViewState] = useState(globalViewStates.LOADING);
  const [countryName] = useState('malta');
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetchCountry(countryName).then(
      ({ success, payload }) => {
        if (!success) {
          setViewState(globalViewStates.ERROR);
          return;
        }

        const { country } = payload;

        setCountryList(country);
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

export default Question1;
