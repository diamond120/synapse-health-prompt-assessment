import React from 'react';

function JsonDisplay({ data }) {
  return (
    <div className="bg-gray-50 p-4 rounded-md overflow-auto max-h-96">
      <pre className="text-sm text-gray-800 whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default JsonDisplay; 