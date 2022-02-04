const start = document.querySelector(".start_btn button");
const box = document.querySelector(".box");
const exit_btn =box.querySelector(".buttons .quit");
const continue_btn = box.querySelector(".buttons .restart");
const quiz_box = box.querySelector(".quiz-box");
start.onclick=()=>{
    box.classList.add("active")
}
exit_btn.onclick=()=>{
    box.classList.remove("active")
}
continue_btn.onclick=()=>{
    box.classList.remove("active");
    quiz_box.classList.add("activeQuiz")
}