let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.innerText = count;

}
function save() {
    countstr = count + "-";
    saveEl.textContent += countstr;
}
countEl.textContent = 0;
count = 0;