import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import JsonDisplay from './components/JsonDisplay';
import MetricsDisplay from './components/MetricsDisplay';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:8000/api/process-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
      console.error('Error processing prompt:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Prompt Wrangler</h1>
          <p className="text-gray-600 text-center">Extract structured data from clinical notes using LLMs</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <PromptForm onSubmit={handleSubmit} loading={loading} />
          </div>
          
          <div className="space-y-6">
            {result && (
              <>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Structured Output</h2>
                  <JsonDisplay data={result.json_output} />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Metrics</h2>
                  <MetricsDisplay 
                    tokenUsage={result.token_usage} 
                    responseTime={result.response_time} 
                  />
                </div>
              </>
            )}
            
            {error && (
              <div className="bg-red-50 p-6 rounded-lg shadow border border-red-200">
                <h2 className="text-xl font-semibold text-red-700 mb-2">Error</h2>
                <p className="text-red-600">{error}</p>
              </div>
            )}
            
            {!result && !error && !loading && (
              <div className="bg-blue-50 p-6 rounded-lg shadow border border-blue-200">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Getting Started</h2>
                <p className="text-blue-600">
                  Enter a system prompt, user prompt, and sample text, then click "Process" to see the structured output.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 