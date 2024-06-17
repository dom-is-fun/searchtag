const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const tags = []

const input = $('#search')
const ul = $('ul')

function render() {
    ul.innerHTML = ''
    tags.forEach((val, idx) => {
        let a = `      <li>${val}
        <i class="fa-solid fa-xmark" onclick="remove(${idx})"></i>
           </li>`

        ul.innerHTML += a
    })
    ul.appendChild(input);

}
// render()

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        const tag = event.target.value.trim()
        if (tag != '' && !tags.includes(tag)) {
            tags.push(tag)
            render(event)
        }
        input.focus();
        event.target.value = ''

    }
});

function remove(idx) {
    // const liNeedTodelete = $$("li")[idx]
    // liNeedTodelete.style.display = 'none'
    console.log(idx);
    tags.splice(idx, 1)
    render()
    input.focus()
}


function removeAll() {
    tags.splice(0, tags.length)
    ul.innerHTML = ''
    ul.appendChild(input)
    input.focus()
}
// const a = [1, 2, 3, 4, 5]
// // const index = a.indexOf(5)
// a.splice(2, 1)
// console.log(a);
