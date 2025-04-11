from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
import json
import uvicorn

# Load environment variables
load_dotenv()

app = FastAPI(title="Synapse Health Prompt Assessment API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    system_prompt: str
    user_prompt: str
    input_text: str
    temperature: float
    max_tokens: int

class PromptResponse(BaseModel):
    json_output: dict
    token_usage: dict
    response_time: float

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/process-prompt", response_model=PromptResponse)
async def process_prompt(request: PromptRequest):
    # Initialize LLM
    llm = ChatOpenAI(
        temperature=request.temperature,
        max_tokens=request.max_tokens,
        model="gpt-4o",
    )
    
    # Start timer
    start_time = time.time()

    # Create messages
    messages = [
        SystemMessage(content=request.system_prompt),
        HumanMessage(content=f"{request.user_prompt}\n\n{request.input_text}")
    ]
    
    # Get response from LLM
    response = llm.invoke(messages)
    
    # Calculate response time
    response_time = time.time() - start_time
    
    # Extract token usage from response
    token_usage = {
        "prompt_tokens": response.usage_metadata["input_tokens"],
        "completion_tokens": response.usage_metadata["output_tokens"],
        "total_tokens": response.usage_metadata["total_tokens"]
    }
    
    # Parse JSON from response
    json_output = json.loads(response.content)
    
    return PromptResponse(
        json_output=json_output,
        token_usage=token_usage,
        response_time=response_time
    )

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)