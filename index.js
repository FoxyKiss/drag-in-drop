const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeHolders) {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave',dragLeave)
    placeholder.addEventListener('drop',dragDrop)
}

function dragstart (evt) {
    evt.target.classList.add('hold')
    setTimeout(() => evt.target.classList.add('hide'), 0)
}

function dragend (evt) {
    evt.target.classList.remove('hold', 'hide')
}

function dragOver (evt) {
    evt.preventDefault()
}

function dragEnter (evt) {
    evt.target.classList.add('hovered')
}

function dragLeave (evt) {
    evt.target.classList.remove('hovered')
}

function dragDrop (evt) {
    evt.target.classList.remove('hovered')
    evt.target.append(item)
}