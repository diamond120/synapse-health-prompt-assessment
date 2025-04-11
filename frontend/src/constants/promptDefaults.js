// Default prompt texts
export const DEFAULT_SYSTEM_PROMPT = `You are a medical data extraction expert. 
Your task is to extract structured JSON from unstructured clinical notes written by healthcare providers.
Each note describes a patient's diagnosis, condition, medical equipment needs, and related clinical details.

Follow these strict instructions:
- Output only a valid, minified JSON object.
- Include only fields that are explicitly mentioned in the text.
- Use consistent key naming conventions based on prior examples of DME-related data.
- Do not make assumptions or infer missing information.
- Do not include explanations, comments, or extra text — only return the JSON object.

Only include fields that are directly present in the input note. Omit anything irrelevant or ambiguous.`;

export const DEFAULT_USER_PROMPT = `Extract structured data from a clinical note using the following output schema as a guideline.
You do not need to strictly follow the schema — maintain flexibility to include all clearly relevant properties mentioned in the note, even if they don't perfectly match the structure.

Output Schema:
{
  "type": "object",
  "properties": {
    "device": { "type": "string" },
    "product": { "type": "string" },
    "type": { "type": "string" },
    "features": { "type": "array", "items": { "type": "string" } },
    "components": { "type": "array", "items": { "type": "string" } },
    "accessories": { "type": "array", "items": { "type": "string" } },
    "mask_type": { "type": "string" },
    "add_ons": { "type": "array", "items": { "type": "string" } },
    "qualifier": { "type": "string" },
    "diagnosis": { "type": "string" },
    "SpO2": { "type": "string" },
    "usage": { "type": "array", "items": { "type": "string" } },
    "compliance_status": { "type": "string" },
    "mobility_status": { "type": "string" },
    "ordering_provider": { "type": "string" }
  },
  "required": ["ordering_provider"],
  "additionalProperties": true
}

Now extract structured data from the below clinical note:`;

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