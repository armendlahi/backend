import React, { useState } from 'react';
import { Create, List } from './components/User';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  const [view, setView] = useState('list');

  let content;

  if (view === 'list') {
    content = <List setView={setView} />
  } else if (view === 'create') {
    content = <Create setView={setView} />;
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