var intervalID = setInterval(logTime, 1000)

function logTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
