import React, { useState } from 'react';
import { Create, Edit, List } from './components/User';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  const [view, setView] = useState('list');
  const [currentUser, setCurrentUser] = useState();

  let content;

  if (view === 'list') {
    content = <List setView={setView} setCurrentUser={setCurrentUser} />
  } else if (view === 'create') {
    content = <Create setView={setView} />;
  } else if (view === 'edit') {
    content = (
      <Edit
        setView={setView}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    );
  } else {
    content = <h1>Not found</h1>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default App;