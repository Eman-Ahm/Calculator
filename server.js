import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

    const filePath = req.url === "/"
        ? "./calculator.html"
        : "." + req.url;

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.statusCode = 404;
            res.end("File not found");
            return;
        }

        res.end(data);
    });

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});