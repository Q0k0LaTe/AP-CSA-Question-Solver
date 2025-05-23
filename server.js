const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { OpenAI } = require('openai');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Initialize DeepSeek API client
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY
});

// API endpoint for analyzing AP CSA/CSP questions
app.post('/api/analyze', async (req, res) => {
  try {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    // Create system prompt for AP CSA/CSP question analysis
    const systemPrompt = `You are an expert in AP Computer Science A (Java) and AP Computer Science Principles. 
    Provide a detailed analysis of the following question. Your analysis should include:
    
    1. A clear explanation of the concepts being tested
    2. A step-by-step solution with detailed reasoning
    3. Key insights and common misconceptions related to this topic
    4. For coding questions, provide working code with explanations
    5. For conceptual questions, explain the underlying principles
    
    Format your response with clear headings, code blocks where appropriate, and a summary of the key takeaways.`;

    // Call DeepSeek API
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question }
      ],
      model: "deepseek-chat",
    });

    // Return the analysis
    res.json({ 
      analysis: completion.choices[0].message.content,
      success: true 
    });
    
  } catch (error) {
    console.error('Error analyzing question:', error);
    res.status(500).json({ 
      error: 'Failed to analyze question', 
      details: error.message,
      success: false 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend available at http://localhost:${PORT}`);
});
