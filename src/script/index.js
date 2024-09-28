function search(searchContent, table) {
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
            const isValid = repated(found[0], table)
            if (isValid) {
                post(found[0], table)
            } else {
                alert('Essa análise já está na tabela.')
            }
        } else {
            alert('Não foi possível encontrar sua análise')
        }
    })
    .catch(e =>{
            alert(e)
    })
    
    document.querySelector('#search').value = ''
}

function repated(found, table) {
    const columns = table.querySelectorAll('td')
    let isValid = true

    for(let column of columns) {
        const testSearchContent = column.innerText === found.nome || column.innerText === found.cas
        if(testSearchContent) {
            isValid = false
            break
        }
    }

    return isValid
}

function post(found, table) {
    const row = table.insertRow()
    const nome = row.insertCell(0)
    const cas = row.insertCell(1)
    const vazMin = row.insertCell(2)
    const vazMax = row.insertCell(3)
    const volMin = row.insertCell(4)
    const volMax = row.insertCell(5)
    // const action = row.insertCell(6)
    
    nome.innerText = found.nome
    cas.innerText = found.cas
    vazMin.innerText = found.VazMin
    vazMax.innerText = found.VazMax
    volMin.innerText = found.VolMin
    volMax.innerText = found.VolMax

    nome.setAttribute('class', 'nameColumn')

    // action.setAttribute('id', 'cleanBtn')
    
    const button = document.createElement('button')
    button.setAttribute('id', 'cleanBtn')
    button.innerText = '-'
    // button.classList.add('remove-btn')
    // action.appendChild(button)
    nome.appendChild(button)

    saveState(table)
}

function clean(table) {
    const columns = table.querySelectorAll('td')
    columns.forEach(column => column.remove())
    saveState(table)
}

function cleanRow(target,table) {
    target.closest('tr').remove()
    saveState(table)
}

function saveState(table){
    const columns = table.querySelectorAll('td')
    const itemValues = []
    
    for(let column of columns){
        let columnText = column.firstChild.textContent.trim()
        itemValues.push(columnText)
    }    
    const itemsJSON = JSON.stringify(itemValues)
    localStorage.setItem('items', itemsJSON)
}

function addSavedState() {
    const restauredContent = []
    const items = localStorage.getItem('items')

    const itemValues = JSON.parse(items)
    for(let i = 0; i< itemValues.length - 5; i += 6) {
        let obj = {
            nome: itemValues[i],
            cas: itemValues[i+1],
            VazMin: itemValues[i+2],
            VazMax: itemValues[i+3],
            VolMin: itemValues[i+4],
            VolMax: itemValues[i+5]
        }
        restauredContent.push(obj)
    }
    const table = document.querySelector('table')
    restauredContent.forEach(obj => post(obj, table))
}

document.addEventListener('click', (e) => {
    const target = e.target
    const searchContent = document.querySelector('#search').value
    const table = document.querySelector('table')
    if(target.innerText === 'Pesquisar') search(searchContent, table)
    if(target.innerText === 'Limpar') clean(table)
    // if(target.classList.contains('remove-btn')) cleanRow(target, table)
    if(target.id === 'cleanBtn') cleanRow(target, table)
})

addSavedState()