
var p = document.createElement('h2');
var exam = document.querySelector('#header-2');
p.textContent = "This is my new header";

var ans = document.querySelector('#name');
ans.appendChild(p);
ans.classList.add('color');

var app = document.querySelector('#nav');
app.firstElementChild.addEventListener("click", ()=>{
    var p2 = document.createElement('h1')
    p2.innerHTML = "Today i have an Exam";
    exam.appendChild(p2);
    exam.classList.add('color');
})
app.firstElementChild.nextSibling.addEventListener("click", ()=>{
    exam.removeChild(exam.firstElementChild);
});

