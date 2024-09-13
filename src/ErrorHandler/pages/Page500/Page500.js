import React, { useContext } from 'react';
import ErrorHandlerContext from '../../ErrorHandlerContext';


function Page500() {
  useContext(ErrorHandlerContext);
  return <p>Site a crashé</p>;
}

export default Page500;
