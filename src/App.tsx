import React from 'react';
import ErrorBoundary from './components/errorBoundry';
import Layout from './components/layout'; 

function App() {
  return (
    <ErrorBoundary>
      <div style={ styleWidth }>
        <Layout/>
      </div>
    </ErrorBoundary>
  );
}

export default App;

const styleWidth: React.CSSProperties = {
  width: '100%',
  overflow: 'hidden'

	 
}
