# Synapse Health Prompt Assessment

A tool for extracting structured data from clinical notes using LLMs.

## Features

- Input system and user prompts
- Process clinical notes with OpenAI's GPT models
- Extract structured JSON data
- Display token usage and response time metrics
- Adjust temperature and max tokens parameters

## Tech Stack

- **Backend**: FastAPI, LangChain, OpenAI
- **Frontend**: React, Tailwind CSS
- **Deployment**: Local development server 

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- Python (v3.11+)
- OpenAI API key

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up your environment variables:
   - Create a `.env` file in the backend directory
   - Add your OpenAI API key: `OPENAI_API_KEY=your_api_key_here`

5. Start the backend server:
   ```
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Prompt Strategy

The default prompts are designed to:

1. Set clear expectations for the LLM through the system prompt
2. Provide specific extraction instructions in the user prompt
3. Force structured JSON output without additional explanations

The system prompt establishes the LLM's role as a medical data extraction assistant, while the user prompt specifies exactly what fields to extract from the clinical notes.

For best results:
- Keep the system prompt focused on the extraction task
- Be explicit about the desired output format in the user prompt
- Adjust temperature based on how creative you want the model to be (lower for more deterministic outputs)

## Future Improvements

With more time, I would add:

1. **Prompt/Output History**: Save previous runs for comparison
2. **Export Functionality**: Allow users to download JSON outputs
3. **Prompt Quality Rating**: Use the LLM to evaluate and suggest improvements to prompts
4. **Side-by-Side Comparison**: Compare outputs from different prompt versions
5. **Error Handling**: More robust error handling and validation
6. **Authentication**: Secure API endpoints
7. **Caching**: Implement response caching for repeated prompts
8. **Custom Templates**: Allow users to save and load prompt templates
9. **Batch Processing**: Process multiple clinical notes at once
