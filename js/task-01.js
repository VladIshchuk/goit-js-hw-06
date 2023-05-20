const liEl = document.querySelectorAll(`.item`)
console.dir(`Number of categories: ${liEl.length}`)

liEl.forEach(item =>{
    const elName = item.querySelector(`h2`).textContent;
    const elCount = item.querySelectorAll(`li`).length;

    console.log(`Category: ${elName}`)
    console.log(`Elements: ${elCount}`)
})