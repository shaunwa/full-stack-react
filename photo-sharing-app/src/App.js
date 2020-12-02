import React from 'react';
import { Routes } from './Routes';
import { useUser } from './auth';

function App() {
  const { isLoading, user } = useUser();

  return (
    <div className="App">
      <Routes isLoading={isLoading} user={user} />
    </div>
  );
}

export default App;
