// Default prompt texts
export const DEFAULT_SYSTEM_PROMPT = `You are a medical data extraction assistant.
Extract structured information from clinical notes about medical equipment orders.
Output ONLY valid JSON with no additional text or explanation.`;

export const DEFAULT_USER_PROMPT = `Extract the following information from the clinical note into a structured JSON format:

- device/product name
- any specifications, features or accessories
- diagnosis if mentioned
- ordering provider
- any other relevant medical details

Return ONLY a valid raw JSON object. Do NOT include any code block, explanation, or Markdown formatting.`;

export const DEFAULT_INPUT_TEXT = `Patient requires a full face CPAP mask with humidifier due to AHI > 20. Ordered by Dr. Cameron.`;

// Default parameter values
export const DEFAULT_TEMPERATURE = 0.5;
export const DEFAULT_MAX_TOKENS = 1024;

// Parameter ranges
export const TEMPERATURE_MIN = 0;
export const TEMPERATURE_MAX = 2;
export const TEMPERATURE_STEP = 0.1;

export const MAX_TOKENS_MIN = 256;
export const MAX_TOKENS_MAX = 4096;
export const MAX_TOKENS_STEP = 256; 