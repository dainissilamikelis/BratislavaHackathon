import React from 'react';

const FormExample = ({id}) => {
  if (id === 2) {
    return <div>
      <h2>More forms...</h2>
    </div>
  }
  return (
    <div>
      <h2>Form example {id}</h2>
    </div>
  );
};

export default FormExample;
