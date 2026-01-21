import json

FILE = "contacts.json"

def load_contacts():
    try:
        with open(FILE, "r") as f:
            return json.load(f)
    except:
        return []

def save_contacts(contacts):
    with open(FILE, "w") as f:
        json.dump(contacts, f, indent=4)

def add_contact(contacts):
    name = input("Nome: ")
    phone = input("Telefone: ")
    contacts.append({"name": name, "phone": phone})
    save_contacts(contacts)

def list_contacts(contacts):
    for c in contacts:
        print(f"{c['name']} - {c['phone']}")

def main():
    contacts = load_contacts()
    while True:
        print("\n1-Adicionar  2-Listar  0-Sair")
        op = input("Escolha: ")
        if op == "1":
            add_contact(contacts)
        elif op == "2":
            list_contacts(contacts)
        elif op == "0":
            break

main()
