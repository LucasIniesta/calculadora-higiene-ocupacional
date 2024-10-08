# Calculadora Higiene Ocupacional
Este projeto consiste em uma funcionalidade de pesquisar análises em um arquivo JSON (`analises.json`). Ele permite que o usuário faça uma busca por nome ou por CAS, retornando os resultados encontrados e exibindo-os em uma tabela HTML.

**Esta é a primeira versão do projeto**, que continuará recebendo novas funcionalidades à medida que evolui. O principal objetivo deste projeto é aprofundar e colocar em prática meus conhecimentos em JavaScript enquanto resolvo um problema específico no meu atual emprego.

## Funcionalidades

- Busca dados em um arquivo JSON com base no nome ou no número CAS.
- Exibe os resultados encontrados em uma tabela HTML.
- Gera uma mensagem de erro caso a pesquisa não retorne resultados ou se o item já estiver na tabela.
- Possibilidade de remover uma linha específica da tabela ao clicar no botão correspondente.
- Opção para remover todas as linhas da tabela com um clique no botão "Limpar".

## Estrutura do Projeto

- **HTML:** O arquivo HTML deve conter uma barra de pesquisa (`<input>`), um botão de pesquisa (`<button>`) e uma tabela (`<table>`).
- **JavaScript:** O arquivo principal de script contém a lógica de busca e exibição dos dados.

## Exemplo de Uso

1. O usuário insere um nome ou número CAS na barra de pesquisa.
2. Ao clicar no botão de pesquisa, o código faz uma requisição para o arquivo JSON local (`analises.json`).
3. Se for encontrado um objeto correspondente ao nome ou número CAS fornecido, os dados são exibidos na tabela.
4. Caso contrário, é exibida uma mensagem de erro.
5. O usuário pode remover uma linha específica da tabela clicando no botão correspondente ou limpar todas as linhas de uma vez clicando no botão "Limpar".
6. Estado mantido em local storage. Mantendo pesquisas anteriores entre sessoes.

### Estrutura do arquivo `analises.json`

O arquivo `analises.json` deve conter objetos com a seguinte estrutura:

```json
[
  {
    "nome": "Nome do Composto",
    "cas": "123-45-6",
    "VazMin": "Valor mínimo de vazão",
    "VazMax": "Valor máximo de vazão",
    "VolMin": "Valor mínimo de volume",
    "VolMax": "Valor máximo de volume"
  }
]
```
## Instalação e Configuração

1.Clonar o repositório:
```bash
git clone https://github.com/LucasIniesta/calculadora-higiene-ocupacional.git
```
2.Estrutura do projeto:

Certifique-se de que o arquivo analises.json está no mesmo diretório que o arquivo HTML e o arquivo de script JavaScript.

## Uso

1. Inicie o projeto abrindo o arquivo HTML no navegador.Insira um nome ou número CAS na barra de pesquisa.
2. Clique no botão "Pesquisar" para buscar os dados.
3. O resultado será exibido na tabela abaixo do botão de pesquisa.
4. Para remover um resultado específico da tabela, clique no botão de remoção correspondente.
5. Para limpar todos os resultados da tabela, clique no botão "Limpar".

## Tratamento de erros
- Caso a barra de pesquisa esteja vazia, o usuário será alertado para escrever algo.
- Se nenhum resultado for encontrado para o nome ou CAS fornecido, uma mensagem de erro será exibida.
- Se o usuário tentar adicionar um item que já está presente na tabela, uma mensagem de erro será exibida.

## Próximas Funcionalidades

Estou planejando adicionar as seguintes melhorias ao projeto nas próximas versões:

- Tornar a busca mais dinâmica, permitindo que o usuário pesquise por partes do nome ou CAS, ao invés de exigir uma correspondência exata.
- Incluir uma funcionalidade para **calcular os possíveis tempos de amostragem**, com base nas vazões e volumes permitidos por cada método, auxiliando nas decisões operacionais.
- **Melhorar o layout**, tornando a interface mais amigável e intuitiva, com uma melhor disposição visual dos elementos e resultados.


## Objetivo do Projeto
Este projeto foi criado como uma forma de aplicar e aprofundar meus conhecimentos em JavaScript, ao mesmo tempo em que resolvo um problema prático no meu ambiente de trabalho atual.

## Contribuindo
1. Faça um fork deste repositório.
2. Crie uma nova branch para sua funcionalidade ou correção: git checkout -b minha-nova-funcionalidade.
3. Commit suas alterações: git commit -m 'Adiciona minha nova funcionalidade'.
4. Faça um push para a branch: git push origin minha-nova-funcionalidade.
5. Envie um Pull Request.

## O que mudou

Nesta atualização, as seguintes funcionalidades e melhorias foram implementadas:

### Atualização 1

- **Remoção de linhas específicas da tabela:** Agora é possível remover uma linha específica da tabela ao clicar no botão de remoção correspondente.
- **Limpar todas as linhas da tabela:** Adicionada a funcionalidade de limpar todas as linhas da tabela com um único clique no botão "Limpar".
- **Tratamento de erros aprimorado:** Agora, o sistema exibe uma mensagem de erro caso o usuário tente adicionar um item que já esteja presente na tabela.

### Atualização 2

- **Memória de estado mantida:** Agora, os resultados de pesquisas anteriores são mantidos entre sessões.




