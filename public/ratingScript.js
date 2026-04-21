const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/rating", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/ratings"
})

// write the async function deleteRating
// make sure it redirects to /ratings after

async function deleteRating(id){
    await fetch('/ratings/' + id, {method: "DELETE"})
    window.location.href = "/ratings"
}



//
async function updateRating(id){
    const form = document.querySelector(`#form-${id}`);
    const name = form.querySelector(".rating-name").value;
    const department = form.querySelector(".rating-department").value;
    const image = form.querySelector(".rating-image").value;

    const response = await fetch('/rating/' + id, {
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