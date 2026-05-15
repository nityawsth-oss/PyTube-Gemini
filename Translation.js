const API_KEY = "AIzaSyDAlSQo6qom-NWZc8-FYVYBMssv6NwreLY";

fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        contents: [{
            parts: [{ text: "Hello Gemini" }]
        }]
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
