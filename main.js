const add = document.getElementById('add');
const section = document.querySelector('.section-a .container');
add.addEventListener("click", () => {
    let b = section.appendChild(document.createElement('div'));
    b.className = 'box';
    b.innerHTML = `
    <div class='tools'>
     <button class='max'>/</button>
        <button class='rem'>X</button>
    </div>
    <textarea class='rem'></textarea>`;
    b.querySelector('.rem').addEventListener("click", () => b.remove());

    b.querySelector('.max').addEventListener("click", () => {
        b.classList.toggle("maxi")
        b.style.zIndex = "2"
        const boxes = document.querySelectorAll(".box");
        boxes[i].style.display = "block";
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i] !== b) {
                if (b.classList.contains("maxi")) {
                    boxes[i].classList.remove("maxi");
                    boxes[i].style.display = "none";
                } else {
                    boxes[i].style.display = "block";
                }
            }
        }
    });


});


