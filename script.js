
const button = document.getElementById("button")

const fetchingText = async () => {
    const res = await fetch(`
    https://icanhazdadjoke.com/`, {
        method: "get",
        headers: {
            Accept: "application/json"
        }
    })
    const data = await res.json()
    console.log(data.joke)

    const div = document.createElement("div")
    div.innerHTML = `
	<div class = "text"></div>
        <P> ${data.joke}</p>
	</div>
	`
    document.getElementById("text").appendChild(div)
}



function init() {
    button.addEventListener("click", fetchingText)
}

init()