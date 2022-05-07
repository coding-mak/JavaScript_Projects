let counter = 0;
document.getElementById('counter-result').innerText = counter;
function increment() {
    counter += 1;
    document.getElementById('counter-result').innerText = counter;

    console.log('hi')
}
function decrement() {
    if (counter >= 0 || counter < 0) {
        counter -= 1
        document.getElementById('counter-result').innerText = counter;
    }
    if (counter < 0) {
        counter = 0;
        document.getElementById('counter-result').innerText = counter;
    }

}
function reset() {
    counter = 0;
    document.getElementById('counter-result').innerText = counter;
}