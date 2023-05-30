const express = require("express");
const puppeteer = require("puppeteer");
const {SankeySample} = require("./data/SankeySample");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/chart", async (req, res) => {
    try {
        console.log(req.body);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        let htmlContent = require("fs").readFileSync('public/index.html', 'utf8').replace("##data##",JSON.stringify(SankeySample));
        console.log(htmlContent)
        await page.setContent(htmlContent);
        // Generate a screenshot of the chart
        const chartElementHandle = await page.$("#chart");
        const chartScreenshot = await chartElementHandle.screenshot({ encoding: "binary" });
        await browser.close();
        // Set the response headers
        res.setHeader("Content-Type", "image/png");
        res.setHeader("Content-Disposition", "attachment; filename=chart.png");
        // Send the screenshot as a byte stream
        res.send(chartScreenshot);
    } catch (error) {
        console.error("Error generating chart:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
