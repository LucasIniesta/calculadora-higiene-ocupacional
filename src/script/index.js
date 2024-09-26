function search(searchContent) {
    if(!searchContent) {
        alert('Escreva algo na barra de pesquisa')
        return
    }

    
    fetch('analises.json')
    .then(resposta => resposta.json())
    .then(json => {
        const found = json.filter(obj => {
            return obj.nome.toLowerCase() === searchContent.toLowerCase() || obj.cas === searchContent
        })
        if(found.length > 0) {
            post(found)
        } else {
            throw new Error('Não foi possível encontrar sua análise')
        }
        })
        .catch(e =>{
            alert(e)
        })
    
    document.querySelector('#search').value = ''
}

function post(found) {
    const table = document.querySelector('table')
    const row = table.insertRow()
    const nome = row.insertCell(0)
    const cas = row.insertCell(1)
    const vazMin = row.insertCell(2)
    const vazMax = row.insertCell(3)
    const volMin = row.insertCell(4)
    const volMax = row.insertCell(5)
    const action = row.insertCell(6)
    nome.innerText = found[0].nome
    cas.innerText = found[0].cas
    vazMin.innerText = found[0].VazMin
    vazMax.innerText = found[0].VazMax
    volMin.innerText = found[0].VolMin
    volMax.innerText = found[0].VolMax

    action.setAttribute('id', 'cleanBtn')

    const button = document.createElement('button')
    button.innerText = '-'
    action.appendChild(button)
    
}

function clean() {
    const table = document.querySelector('table')
    const columns = table.querySelectorAll('td')
    columns.forEach(column => column.remove())
}

function cleanRow(target) {
    target.parentElement.parentElement.remove()
}


document.addEventListener('click', (e) => {
    const target = e.target
    const searchContent = document.querySelector('#search').value
    if(target.innerText === 'Pesquisar') search(searchContent)
    if(target.innerText === 'Limpar') clean()
    if(target.innerText === '-') cleanRow(target)
})

