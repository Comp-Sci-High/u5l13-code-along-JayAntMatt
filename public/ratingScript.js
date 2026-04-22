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



// Update a rating
async function updateRating(id){
    const form = document.querySelector(`#form-${id}`);
    const username = form.querySelector(".ratings-username").value;
    const teacher = form.querySelector(".ratings-teacher").value;
    const comment = form.querySelector(".ratings-comment").value;
    const rating = form.querySelector(".ratings-rating").value;

    const response = await fetch('/ratings/' + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, teacher, comment, rating })
    });
    const data = await response.json();
    console.log(data);
    window.location.href = "/ratings";
}