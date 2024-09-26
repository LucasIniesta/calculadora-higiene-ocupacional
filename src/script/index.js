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
            const isValid = repated(found[0])
            if (isValid) {
                post(found[0])
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

function repated(found) {
    const table = document.querySelector('table')
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
    nome.innerText = found.nome
    cas.innerText = found.cas
    vazMin.innerText = found.VazMin
    vazMax.innerText = found.VazMax
    volMin.innerText = found.VolMin
    volMax.innerText = found.VolMax

    action.setAttribute('id', 'cleanBtn')

    const button = document.createElement('button')
    button.innerText = '-'
    button.classList.add('remove-btn')
    action.appendChild(button)
    
}

function clean() {
    const table = document.querySelector('table')
    const columns = table.querySelectorAll('td')
    columns.forEach(column => column.remove())
}

function cleanRow(target) {
    target.closest('tr').remove()
}


document.addEventListener('click', (e) => {
    const target = e.target
    const searchContent = document.querySelector('#search').value
    if(target.innerText === 'Pesquisar') search(searchContent)
    if(target.innerText === 'Limpar') clean()
    if(target.classList.contains('remove-btn')) cleanRow(target)
})

