import React, { useEffect, useState } from 'react';
import { globalViewStates } from 'constants';
import { fetchCountries } from './io';
import Error from 'features/errorPages/Error';
import Loading from 'components/Loading';
import TableList from 'components/tables/KanonTable';

const Question2 = () => {
  const [viewState, setViewState] = useState(globalViewStates.LOADING);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetchCountries().then(
      ({ success, payload }) => {
        if (!success) {
          setViewState(globalViewStates.ERROR);
          return;
        } 

        const { countries } = payload; 

        setCountryList(countries);
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
    return ( 
      <Error />
    );
  }

  return (
    <>
      <TableList list={countryList} />
    </>
  )
}

export default Question2