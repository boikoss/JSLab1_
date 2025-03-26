function isIPAddress(ip) {
    let parts = ip.split(".");
    if (parts.length !== 4) return false;

    for (let part of parts) {
        let num = Number(part);
        if (isNaN(num) || num < 0 || num > 255) return false;
    }

    return true;
}
function findRGBA(text) {
    let start = text.indexOf("rgba(");
    if (start === -1) return null;

    let end = text.indexOf(")", start);
    if (end === -1) return null;

    return text.slice(start, end + 1);
}
function findHexColor(text) {
    let color = text.match(/#[0-9a-fA-F]{3,6}/);
    return color ? color[0] : null;
}
function findTags(text, tag) {
    let result = [];
    let index = 0;

    while (true) {
        let start = text.indexOf("<" + tag, index);
        if (start === -1) break;

        let end = text.indexOf(">", start);
        if (end === -1) break;

        result.push(text.slice(start, end + 1));
        index = end + 1;
    }

    return result;
}
function findPosNum(text) {
    let numbers = text.match(/\d+(\.\d+)?/g);
    return numbers ? numbers.map(Number) : [];
}
function findDates(text) {
    let dates = text.match(/\d{4}-\d{2}-\d{2}/g);
    return dates || [];
}
function findEmail(text) {
    let emails = text.match(/[a-z0-9._]+@[a-z]+\.[a-z]{2,}/gi);
    return emails || [];
}
