
document.addEventListener('DOMContentLoaded', () => {

    const APILink = "https://api.windy.com/api/webcams/v2"

    let webcamImg = document.getElementById('webcam-img')

    console.log(webcamImg)

    async function getWebcam() {

        let response = await fetch(APILink+"/list/nearby=44.4293,7.19170,200/orderby=distance/limit=1?show=webcams:image,location;", {
            method: "GET",
            headers: {
                "x-windy-key": `${API_KEY}`,
                "Content-Type": "application/json"
            }
        })

        let GETData = await response.json()

        const webcamId = GETData["result"]["webcams"][0]['id']
        const webcamImage = GETData["result"]["webcams"][0]['image']['current']['preview']

        console.log(webcamId, webcamImage)

        return webcamImage
    }

    getWebcam().then(webcamImage => {
        webcamImg.src = webcamImage
    })

})

