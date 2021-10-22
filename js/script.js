const myJokes = document.getElementById("select")


function chucknorisJokesCategories() {
    const categoriesUrl = "https://api.chucknorris.io/jokes/categories";
    fetch(categoriesUrl)
        .then(response => response.json())
        .then((categories) => {
            console.log(categories)
            categories.forEach((item) => {

                const randomJoke = document.createElement("option")
                console.log(randomJoke)
                randomJoke.textContent = item;
                myJokes.appendChild(randomJoke)
                randomJoke.setAttribute("value", item)


            });
            myJokes.addEventListener('change', () => {
                const myValue = myJokes.options[myJokes.selectedIndex].value;
                console.log(myValue)
                const jokePerCategory = "https://api.chucknorris.io/jokes/random?category=" + myValue
                fetch(jokePerCategory)
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data)

                        const myButton=document.getElementById("random")
                        const para=document.getElementById("para")
                        para.innerHTML=`
                        <p>${data.value}</p>
                        <p>${data.created_at}</p>`
                    })
                    })


            })

        }
chucknorisJokesCategories();













