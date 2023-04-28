let shareIcon = document.querySelector(".icon")

shareIcon.onclick = (e) => {
    document.querySelector(".social").classList.toggle("open")
    document.querySelector(".icon").classList.toggle("open")
    document.querySelector(".icon").classList.toggle("active")
}