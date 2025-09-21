
import React from 'react';
import MemberList from './components/MemberList';

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">CRM da Igreja</h1>
      <MemberList />
    </div>
  );
};

export default App;
                