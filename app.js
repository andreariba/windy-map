const API_KEY = ""

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "davinci",
            prompt: "Hello, how are you today?",
            max_tokens: 7
        })
    })

    const data = await response.json()
    console.log(data)
}

fetchData()