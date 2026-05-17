PyTube-Gemini

An AI-powered YouTube video summarizer and assistant built using Python, Gemini AI, and PyTube. This project allows users to fetch YouTube video content, process transcripts, and generate intelligent summaries or responses using Google Gemini AI.

Features
Download and process YouTube videos using PyTube
Extract video transcripts/subtitles
Generate AI-based summaries using Gemini API
Simple and beginner-friendly Python project
Clean project structure
Easy API integration
Fast and lightweight
Tech Stack
Python
PyTube
Google Gemini API
YouTube Transcript API
Flask / Streamlit (if used in your project)
Installation

Clone the repository:

git clone https://github.com/nityawsth-oss/PyTube-Gemini.git

Move into the project folder:

cd PyTube-Gemini

Install dependencies:

pip install -r requirements.txt
Setup Gemini API Key

Create a .env file in the root directory and add your Gemini API key:

GEMINI_API_KEY=your_api_key_here

You can get your API key from:

Google AI Studio

Usage

Run the project:

python app.py

Or if you are using Streamlit:

streamlit run app.py
Example Workflow
Paste a YouTube video link
Fetch transcript/video details
Send content to Gemini AI
Get summarized output or AI-generated response
Project Structure
PyTube-Gemini/
│
├── app.py
├── requirements.txt
├── .env
├── README.md
└── assets/
Future Improvements
Multi-language transcript support
Download video/audio options
Better UI design
Chat with YouTube videos
Timestamp-based summaries
Contributing

Contributions are welcome.

Fork the repository
Create a new branch
Commit your changes
Open a Pull Request
