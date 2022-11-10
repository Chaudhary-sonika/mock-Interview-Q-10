var contDiv = document.querySelector("#content");

var url = "https://jsonplaceholder.typicode.com/todos";

function dataList() {
    fetch(url)
    .then(response => response.json())
    .then( (todos) => {
        let result = " ";

        contDiv.innerHTML = todos.map((todo) => {
            result += `<p> Tittle: ${todo.tittle} </p>
            <p> completed: ${todo.completed} </p> <br/>`;
            return result;
        })
        .join(" ");
    });
    

}
dataList();