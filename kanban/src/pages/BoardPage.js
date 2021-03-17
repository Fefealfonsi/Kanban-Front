import React from 'react';
import Card from '../components/Card';
import CreateCard from '../components/CreateCard';
import UpdateCard from '../components/UpdateCard';

function BoardPage() {
 

  return (
    <div>
      <h1>BoardPage</h1>

      <Card/>
      <CreateCard/>
      <UpdateCard/>



    </div>
  );
}
export default BoardPage;