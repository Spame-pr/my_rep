function showSpinner() {
    let loader = document.getElementById('loader');
    loader.style.display = 'block'
    document.body.style.backgroundColor = 'grey'
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.backgroundColor = 'white'
    }, 1500)
}


async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let content = await response.json()


    let table = document.getElementById('table');
    let key;
    for (key in content) {
        table.innerHTML += `
        <tr>
        <td>${content[key].id}</td>
      <td>${content[key].name}</td>
      <td>${content[key].phone}</td>
      <td >${content[key].email}</td>
      <td >${content[key].company.name}</td>
      <td >${content[key].address.city}</td>
        <td>
        <button id =${content[key].id}>Change</button>
        <button id = '${content[key].id}del'>Delete</button>
      </td>
      </tr>
      
    `

    }
    let change = document.getElementById(`${content[key].id}`),
        del = document.getElementById(`${content[key].id}del`),
        elem = change.closest('tr'),
        clickVal = false;

    change.onclick = function () {

        if (!clickVal) {

            elem.contentEditable = true;
            elem.style.color = ' red'
            change.innerHTML = 'Save'
            clickVal = true

        } else if (clickVal) {
            elem.contentEditable = false;
            elem.style.color = 'black'
            change.innerHTML = 'Change'
            clickVal = false;
            saveReq(content[key].id, content[key].name, content[key].phone, content[key].address,
                content[key].email, content[key].company)

        }
    }
    del.onclick = function () {
        elem.innerHTML = ''
        deletReq(content[key].id);
    }
}

function saveReq(id, name, phone, address, email, company) {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
            name,
            phone,
            address,
            email,
            company
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

        .then((content) => content.json())
        .then((json) => console.log(json))
        .then(showSpinner())
}


function deletReq(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
    });
}
getResponse()
