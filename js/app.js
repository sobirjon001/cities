let data = [{
    cityname:"Start",
    prcityname:"",
    distance:0,
    layovertime:0
}];

console.log(data);

let curcity = data[data.length-1].cityname

document.getElementById("cityname").value = '';
document.getElementById("prcityname").value = curcity;
document.getElementById("distance").value = '';
document.getElementById("layovertime").value = '';

document.getElementById("dist-label").innerHTML = "Distance from " + curcity;


function drawTable () {
    let table = "<table id='table-1'>"
    table+="<tr>";
        table+="<th>"+"City stops"+"</th>";
        table+="<th>"+"Last City"+"</th>";
        table+="<th>"+"Distance in between"+"</th>";
        table+="<th>"+"Layover time"+"</th>";
        table+="</tr>";

    for (let i = 0; i < data.length; i++) {
        table+="<tr>";
        table+="<td>"+data[i].cityname+"</td>";
        table+="<td>"+data[i].prcityname+"</td>";
        table+="<td>"+data[i].distance+"</td>";
        table+="<td>"+data[i].layovertime+"</td>";
        table+="</tr>";
    }
    table+="</table>";
    document.querySelector('.table').innerHTML = table
}


function addData() {
    let value1 = document.getElementById("cityname").value;
    let value2 = document.getElementById("prcityname").value;
    let value3 = document.getElementById("distance").value;
    let value4 = document.getElementById("layovertime").value;

    if (value1,value2,value3,value4) {
    
        let newcity = {
            cityname:value1,
            prcityname:value2,
            distance:value3 + "mi",
            layovertime:value4 + "h",
        };
        data.push(newcity);
        console.log(data);
    

        
        let curcity = data[data.length-1].cityname

        document.getElementById("cityname").value = '';
        document.getElementById("prcityname").value = curcity;
        document.getElementById("distance").value = '';
        document.getElementById("layovertime").value = '';

        document.getElementById("dist-label").innerHTML = "Distance from " + curcity;

        let div = document.createElement("div");
        Object.assign(div, {className: "city-container", id: curcity});
        document.querySelector('.map').appendChild(div);
        let p = document.createElement("p")
        Object.assign(p, {className: "cityname", id: "city-" + (data.length + 1)});
        p.innerHTML = curcity;
        div.appendChild(p);
        let span = document.createElement("span");
        span.setAttribute('class', "dot")
        div.appendChild(span);

        drawTable();

    } else {
        alert("Please fill up all boxes!")
    }

}


