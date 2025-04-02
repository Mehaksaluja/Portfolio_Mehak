import Vapi from "@vapi-ai/web";

export const vapi = new Vapi(import.meta.env.VITE_VAPI_API_KEY);
const assistantId = import.meta.env.VITE_ASSSISTANT_ID;

export const startAssistant = async (firstname, lastname, email, phone) => {
  const assistantOverrides = {
    variableValues: {
      firstname,
      lastname,
      email,
      phone,
    },
  };
  return await vapi.start(assistantId, assistantOverrides);
};

export const stopAssistant = () => {
  vapi.stop();
};
