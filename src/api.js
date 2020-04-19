import axios from 'axios'

export default axios.create({
    baseURL: `http://localhost:8081/api`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJraWQiOiIvcHJpdmF0ZUtleS5wZW0iLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJwaW90ci5zY2hvZHppbnNraSIsInVwbiI6InRlc3RAdGVzdC5vcmciLCJncm91cHMiOlsiUkVHVUxBUl9VU0VSIl0sInVzZXJJZCI6MSwiem9uZSI6IkV1cm9wZS9XYXJzYXciLCJpYXQiOjE1ODcyOTM4NzAsImF1dGhfdGltZSI6MTU4NzI5Mzg3MCwiZXhwIjoxNTg4MTkzODcwLCJqdGkiOiI3bDBLTFdaazc3am9KWmVsOGQyd2JBIn0.SSVw6sjooxu_Sfob-rWZFtcfiA4p5OSzQ9SawccUkCY5xuGeaT2GsxWXLPOdOMpjs-Fi_BWHW8GNQh0ofFm7EXC-0dHK-aINxtB10-du951VarnwvElvpIx18J-QKRXFtLFYrj4pr9J-PZAIk-PXEPOk5pvgS6fvYUjgfDIqe7UypPUkMtn-MNjt_QLj67HfI7cji2ZDKkQadtPaSp8dDd16pfGXLbIeLz1GgRr-r578IORuKiAqB_gYAEuRmNyuzIKeRXUyEchcIRhRPMlC_LI0knkIm6Qr57ijOX7REPeF7Z0EU4QxzvOfhiOXQakNbapYHqn3A41MNc74ZfIAAw'
    }
})