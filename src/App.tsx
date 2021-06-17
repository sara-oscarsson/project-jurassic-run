import React from 'react';
import ErrorBoundary from './components/errorBoundry';
import Layout from './components/layout'; 

function App() {
  return (
    <ErrorBoundary>
        <Layout/>
    </ErrorBoundary>
  );
}

export default App;
