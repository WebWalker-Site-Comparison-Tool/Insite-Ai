import React from 'react';
import Navbar from './Navbar';

const DataPageContainer = ({ URL }) => {
  return (
    <body className="bg-[url(https://www.pixel4k.com/wp-content/uploads/2018/10/color-waves-abstract_1539371252.jpg)]">
      <Navbar URL={URL} />
    </body>
  );
};

export default DataPageContainer;
