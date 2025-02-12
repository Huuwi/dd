const fs = require("fs")

let proxies = fs.readFileSync("./t.txt", "utf-8").split("\r\n")

for (let e of proxies) {
    let a = e.replace("http://", "").replace("socks4://", "")
    fs.appendFileSync("./proxy.txt", a + "\n")
}

