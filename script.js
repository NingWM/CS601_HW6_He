async function fetch_func(url) {
    try {
        console.log("Fetch Function called");
        const response = await fetch(url);
        //return console log if status is 200
        console.log(`Response status: ${response.status}`);
        if(response.status==200){
            console.log("Success!");
        } 
        //pop up a warning if the status is not 200
        else {console.log("Failure");
                const execMsg = document.getElementById("execmsg");
                execMsg.innerHTML = "Meow! Fetch Failed!";
                const failimg = document.getElementById("img-ft");
                failimg.src = "https://frontpagemeews.com/wp-content/uploads/2018/12/lazy-cat-cover-750x517.png";}
                

        const data = await response.json();

        const table = document.createElement("table");
        const trow = document.createElement("tr");

        //get all column headers
        const allHeader = Object.keys(data.degrees[0].degree);

        //create table headers
        allHeader.forEach(function (key) {
            const th = document.createElement('th');
            th.textContent = key;
            trow.appendChild(th);
        })
        table.appendChild(trow);

        //create table body
        data.degrees.forEach((element, index) => {
            const allValue = Object.values(element.degree);
            const trow = document.createElement("tr");
            allValue.forEach(function (value) {
                const td = document.createElement('td');
                td.textContent = value;
                trow.appendChild(td);
            })
            table.appendChild(trow);
        }
        )

        //add to content div
        const ctntDiv = document.getElementById("content");
        ctntDiv.appendChild(table);
    } catch (err) { console.log(err) }

}

//fetch data after clicking on the button
const btn = document.getElementById("fetch-btn");
btn.addEventListener("click",
    async () => {
        try {
            await fetch_func("degree.json");
        } catch (err) { console.log(err) };
    }
);




