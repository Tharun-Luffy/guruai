import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
    id: "aiguru", name: "AIGuru",
    credentials: {
        gemini: {
            apikey: process.env.GEMINI - API - Key,
        }
    }
});
