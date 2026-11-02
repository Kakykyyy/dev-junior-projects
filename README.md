# Projetos de prática para desenvolvimento júnior

Coleção de quatro exercícios independentes em Python, Java e JavaScript. Cada pasta tem sua própria forma de execução; não há uma aplicação única nem instalação global.

## Projetos

| Pasta | Aplicação | Persistência |
|---|---|---|
| `PYTHON-CLI/` | Agenda de contatos no terminal | `contacts.json` |
| `java-user-mannagment/` | Cadastro e listagem de usuários | Apenas memória |
| `javascript-todo-list/` | Lista de tarefas no navegador | localStorage |
| `python-controle-financ/` | Controle de entradas, saídas e saldo com Tkinter | `data.json` |

Os nomes das pastas acima reproduzem os caminhos existentes, inclusive a grafia de `java-user-mannagment`.

## Preparação

```sh
git clone https://github.com/Kakykyyy/dev-junior-projects.git
cd dev-junior-projects
```

### Agenda Python

Requer Python 3. Execute a partir da pasta do exercício:

```sh
cd PYTHON-CLI
python main.py
```

O menu permite adicionar, listar e sair. Os contatos têm nome e telefone. O arquivo JSON é relativo ao diretório de execução; iniciar em outra pasta pode criar outra base.

### Cadastro Java

Requer um JDK com `javac` e `java` disponíveis:

```sh
cd java-user-mannagment
javac Main.java User.java
java Main
```

Cadastre nome e email e use a listagem para conferir. Os dados são perdidos ao encerrar. O menu espera um número; não há tratamento para entrada não numérica.

### Lista de tarefas

Abra `javascript-todo-list/index.html` no navegador. Também é possível servir a raiz:

```sh
python -m http.server 8000
```

Acesse http://localhost:8000/javascript-todo-list/. É possível criar, editar, concluir, filtrar e excluir tarefas, além de limpar concluídas ou todas. A edição também pode ser acionada com duplo clique no texto. Os dados ficam na chave `tasks` do localStorage do navegador; não são sincronizados entre dispositivos.

### Controle financeiro

Requer Python 3 com Tkinter e ambiente gráfico:

```sh
cd python-controle-financ
python main.py
```

Informe descrição e valor, depois escolha entrada ou saída. Use ponto como separador decimal, por exemplo `25.50`. Os registros são salvos em `data.json` na pasta de execução. Se Tkinter estiver indisponível, instale o componente correspondente à sua distribuição de Python.

## Organização e limites

Os exercícios Python usam a biblioteca padrão; não há `requirements.txt`. A agenda trata falhas de leitura do JSON como uma lista vazia, e o controle financeiro faz o mesmo. Faça cópia dos arquivos antes de editar dados manualmente. Não há autenticação, banco compartilhado nem suíte automatizada de testes.

## Verificação manual

- Agenda: adicionar um contato, encerrar e abrir novamente para conferir a persistência.
- Java: cadastrar e listar; reiniciar para observar que a lista é temporária.
- Tarefas: adicionar, editar, concluir, filtrar e recarregar a página.
- Financeiro: registrar entrada 100 e saída 25; conferir saldo 75 e reabrir.

## Contribuição e licença

Mantenha alterações limitadas à pasta do exercício e descreva como verificar o comportamento. Não há arquivo LICENSE na árvore analisada.

---
Documentação baseada na leitura da branch principal em 2 de novembro de 2026. Os procedimentos não foram executados nesta revisão documental.
