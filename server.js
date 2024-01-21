const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('hello');
    // const randomButtonState = Math.round(Math.random());
    const randomButtonState = Math.random() > 0.2 ? 1 : 0;
    const randomIntensity = Math.floor(Math.random() * 10) + 1;

    const response = {
        buttonState: randomButtonState,
        intensity: randomIntensity,
    };
    res.send(response);
    // console.log(response);
    // Render an HTML page with the JSON data
    // res.send(`
    //     <!DOCTYPE html>
    //     <html>
    //         <head>
    //             <title>Random Values</title>
    //         </head>
    //         <body>
    //             <h1>Random Values</h1>
    //             <pre>${JSON.stringify(response, null, 2)}</pre>
    //         </body>
    //     </html>
    // `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
