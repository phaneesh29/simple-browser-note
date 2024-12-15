const notesContainer = document.getElementById("notes")
const loadBtn = document.getElementById("load")
const saveBtn = document.getElementById("save")

saveBtn.addEventListener("click",()=>{
    let notesContent = notesContainer.innerHTML
    localStorage.setItem("notes",notesContent)
    alert("Saved Successfully")
})

loadBtn.addEventListener("click",()=>{
    let notesContent = localStorage.getItem("notes") || ""
    notesContainer.innerHTML = notesContent
    alert("Notes Fetched")
})

notesContainer.innerHTML = localStorage.getItem("notes") || ""