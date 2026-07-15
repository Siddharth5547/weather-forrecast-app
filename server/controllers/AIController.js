const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const getWeatherAdvice = async (req, res) => {
    console.log("BODY:", req.body);
    console.log("Gemini Key Exists:", !!process.env.GEMINI_API_KEY);
    console.log("Gemini Key:", process.env.GEMINI_API_KEY?.substring(0, 10));
  try {
    const {
      city,
      temperature,
      humidity,
      condition,
      wind,
      feelsLike,
    } = req.body;

    if (!city || temperature === undefined || !condition) {
      return res.status(400).json({
        message: "Missing weather information.",
      });
    }

    const prompt = `
You are a professional AI Weather Assistant.

Weather Details:
City: ${city}
Temperature: ${temperature}°C
Feels Like: ${feelsLike ?? temperature}°C
Humidity: ${humidity}%
Wind Speed: ${wind} km/h
Condition: ${condition}

Give a short and professional weather report.

Include:
- Overall weather summary
- Clothing recommendation
- Whether to carry an umbrella
- Outdoor activity suggestion
- Health & safety advice

Keep the response under 120 words.
`;

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({
      advice: result.text,
    });
  } catch (error) {
  console.error("Gemini Error:", error);

  res.status(500).json({
    message: error.message,
    details: error,
  });
}
};

module.exports = {
  getWeatherAdvice,
};