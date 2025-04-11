import React, { useState } from 'react';
import {
  DEFAULT_SYSTEM_PROMPT,
  DEFAULT_USER_PROMPT,
  DEFAULT_INPUT_TEXT,
  DEFAULT_TEMPERATURE,
  DEFAULT_MAX_TOKENS,
  TEMPERATURE_MIN,
  TEMPERATURE_MAX,
  TEMPERATURE_STEP,
  MAX_TOKENS_MIN,
  MAX_TOKENS_MAX,
  MAX_TOKENS_STEP
} from '../constants/promptDefaults';

function PromptForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    system_prompt: DEFAULT_SYSTEM_PROMPT,
    user_prompt: DEFAULT_USER_PROMPT,
    input_text: DEFAULT_INPUT_TEXT,
    temperature: DEFAULT_TEMPERATURE,
    max_tokens: DEFAULT_MAX_TOKENS,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'temperature' || name === 'max_tokens' 
        ? parseFloat(value) 
        : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* First Column: System Prompt and Parameters */}
      <div className="space-y-4">
        <div>
          <label htmlFor="system_prompt" className="block text-sm font-medium text-gray-700 mb-1">
            System Prompt
          </label>
          <textarea
            id="system_prompt"
            name="system_prompt"
            rows={25}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.system_prompt}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
              Temperature: {formData.temperature}
            </label>
            <input
              type="range"
              id="temperature"
              name="temperature"
              min={TEMPERATURE_MIN}
              max={TEMPERATURE_MAX}
              step={TEMPERATURE_STEP}
              className="w-full"
              value={formData.temperature}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="max_tokens" className="block text-sm font-medium text-gray-700 mb-1">
              Max Tokens: {formData.max_tokens}
            </label>
            <input
              type="range"
              id="max_tokens"
              name="max_tokens"
              min={MAX_TOKENS_MIN}
              max={MAX_TOKENS_MAX}
              step={MAX_TOKENS_STEP}
              className="w-full"
              value={formData.max_tokens}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Second Column: User Prompt, Input Text, and Button */}
      <div className="space-y-4">
        <div>
          <label htmlFor="user_prompt" className="block text-sm font-medium text-gray-700 mb-1">
            User Prompt
          </label>
          <textarea
            id="user_prompt"
            name="user_prompt"
            rows={20}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.user_prompt}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="input_text" className="block text-sm font-medium text-gray-700 mb-1">
            Input Text
          </label>
          <textarea
            id="input_text"
            name="input_text"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.input_text}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              loading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Process Prompt'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default PromptForm; 