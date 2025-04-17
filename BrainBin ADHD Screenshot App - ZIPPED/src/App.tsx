import React from 'react';
import { IconButton } from './components/IconButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-8">
      <IconButton iconName="Search" label="Search" />
      <IconButton iconName="Upload" label="Upload" />
      <IconButton iconName="nonexistentIcon" label="Broken icon fallback" />
    </div>
  );
}
export default App;