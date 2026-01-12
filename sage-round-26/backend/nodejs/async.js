async function getDate(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    console.log(await data.json() )
    console.log("hi")
}

getDate()