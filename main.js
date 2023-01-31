const add = document.getElementById('add');
const section = document.querySelector('.section-a .container');
add.addEventListener("click", () => {
    let b = section.appendChild(document.createElement('div'));
    b.className = 'box';
    b.innerHTML = `
    <div class='tools'>
        <button class='rem'>X</button>
    </div>
    <textarea class='rem'></textarea>`;
    b.querySelector('.rem').addEventListener("click", () => b.remove());
});


