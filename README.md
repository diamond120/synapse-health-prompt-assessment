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
   source venv/bin/activate  # On Windows: venv\Scripts\activate
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
