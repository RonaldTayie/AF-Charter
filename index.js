const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/chart", async (req, res) => {
  try {
    console.log(req.body);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const data = {
      nodes: [
        { node: 0, name: "node0" },
        { node: 1, name: "node1" },
        { node: 2, name: "node2" },
        { node: 3, name: "node3" },
        { node: 4, name: "node4" },
      ],
      links: [
        { source: 0, target: 2, value: 2 },
        { source: 1, target: 2, value: 2 },
        { source: 1, target: 3, value: 2 },
        { source: 0, target: 4, value: 2 },
        { source: 2, target: 3, value: 2 },
        { source: 2, target: 4, value: 2 },
        { source: 3, target: 4, value: 4 },
      ],
    };
    let jsContent = require("fs").readFileSync("public/sankey.js", "utf8");
    let htmlContent = require("fs")
      .readFileSync("public/index.html", "utf8")
      .replace("--DATA--", JSON.stringify(data).replaceAll("\"", "\\\""))
      .replace("// CODE", jsContent);
    console.log(htmlContent);
    await page.setContent(htmlContent);
    // Generate a screenshot of the chart
    const chartElementHandle = await page.$("#chart");
    const chartScreenshot = await chartElementHandle.screenshot({
      encoding: "binary",
    });
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
