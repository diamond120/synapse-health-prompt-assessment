import React from 'react';

function MetricsDisplay({ tokenUsage, responseTime }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Token Usage</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Input Tokens:</span>
            <span className="font-medium">{tokenUsage.prompt_tokens}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Output Tokens:</span>
            <span className="font-medium">{tokenUsage.completion_tokens}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Tokens:</span>
            <span className="font-medium">{tokenUsage.total_tokens}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Response Time</h3>
        <div className="flex items-center justify-center h-full">
          <span className="text-2xl font-bold text-gray-700">
            {responseTime.toFixed(2)}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default MetricsDisplay; 