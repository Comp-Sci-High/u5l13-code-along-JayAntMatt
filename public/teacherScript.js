const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/teacher", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/"
})

// write the async function deleteTeacher
// make sure it redirects to / after
async function deleteTeacher(id){
    await fetch('/teachers/' + id, {method: "DELETE"})
    window.location.href = "/teachers"
}

// write the async function updateTeacher
// make sure it gets the form values and sends them via PATCH
async function updateTeacher(id){
    const form = document.querySelector(`#form-${id}`);
    const name = form.querySelector(".teacher-name").value;
    const department = form.querySelector(".teacher-department").value;
    const image = form.querySelector(".teacher-image").value;

    const response = await fetch('/teachers/' + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, department, image })
    });
    const data = await response.json();
    console.log(data);
    window.location.href = "/";
}