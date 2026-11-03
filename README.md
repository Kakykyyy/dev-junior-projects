<div align="center">

# Dev Junior Projects

**Pequenos projetos, fundamentos aplicados**

![Python](https://img.shields.io/badge/Python-20232a?style=flat-square) ![Java](https://img.shields.io/badge/Java-20232a?style=flat-square) ![JavaScript](https://img.shields.io/badge/JavaScript-20232a?style=flat-square) ![HTML](https://img.shields.io/badge/HTML-20232a?style=flat-square) ![CSS](https://img.shields.io/badge/CSS-20232a?style=flat-square)

[Sobre](#sobre) · [Como executar](#como-executar) · [Documentação](DOCUMENTACAO.md)

</div>

---

## Sobre

Coleção de exercícios práticos que transforma fundamentos de programação em pequenas aplicações. Cada projeto explora uma interface e uma forma de organizar dados.

## Destaques

- Agenda de contatos pelo terminal com persistência JSON.
- Cadastro de usuários em Java com orientação a objetos.
- Lista de tarefas com filtros e armazenamento no navegador.
- Controle financeiro com interface gráfica em Tkinter.

## Como executar

Clone o repositório:

```sh
git clone https://github.com/Kakykyyy/dev-junior-projects.git
cd dev-junior-projects
```

Requer Python 3 para a agenda. Execute cada exercício dentro da própria pasta para manter os arquivos de dados no lugar correto.

```sh
cd PYTHON-CLI
python main.py
```

## Organização

```text
PYTHON-CLI/             # Agenda no terminal
java-user-mannagment/   # Cadastro em Java
javascript-todo-list/   # Tarefas no navegador
python-controle-financ/ # Interface Tkinter
```

## Escolha um projeto

| Projeto | Como iniciar | Dados |
|---|---|---|
| Agenda | `cd PYTHON-CLI` → `python main.py` | `contacts.json` |
| Usuários Java | Na pasta do projeto: `javac Main.java User.java` → `java Main` | Memória |
| Tarefas | Abra `javascript-todo-list/index.html` | localStorage |
| Financeiro | `cd python-controle-financ` → `python main.py` | `data.json` |

Para Java, instale um JDK. Para o controle financeiro, o Python precisa incluir Tkinter.

## Documentação técnica

O [guia técnico](DOCUMENTACAO.md) reúne configuração, comportamento dos dados, limitações conhecidas e verificações manuais. As instruções foram elaboradas a partir da leitura do código; a execução dos projetos não foi validada nesta revisão.

## Autor

Desenvolvido por [Kayky Erick · @Kakykyyy](https://github.com/Kakykyyy).
