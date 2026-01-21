import json
import tkinter as tk
from tkinter import messagebox

FILE = "data.json"

def load_data():
    try:
        with open(FILE, "r") as f:
            return json.load(f)
    except:
        return []

def save_data():
    with open(FILE, "w") as f:
        json.dump(transactions, f, indent=4)

def add_transaction(t_type):
    desc = entry_desc.get()
    value = entry_value.get()

    if not desc or not value:
        messagebox.showerror("Erro", "Preencha todos os campos")
        return

    try:
        value = float(value)
    except:
        messagebox.showerror("Erro", "Valor inválido")
        return

    transactions.append({
        "type": t_type,
        "description": desc,
        "value": value
    })

    save_data()
    update_list()
    update_balance()

    entry_desc.delete(0, tk.END)
    entry_value.delete(0, tk.END)

def update_list():
    listbox.delete(0, tk.END)
    for t in transactions:
        listbox.insert(
            tk.END,
            f"{t['type'].capitalize()} | {t['description']} | R$ {t['value']}"
        )

def update_balance():
    balance = 0
    for t in transactions:
        if t["type"] == "Entrada":
            balance += t["value"]
        else:
            balance -= t["value"]
    label_balance.config(text=f"Saldo: R$ {balance:.2f}")

# Interface
transactions = load_data()

window = tk.Tk()
window.title("Controle Financeiro")
window.geometry("400x450")

tk.Label(window, text="Descrição").pack()
entry_desc = tk.Entry(window)
entry_desc.pack(fill="x", padx=10)

tk.Label(window, text="Valor").pack()
entry_value = tk.Entry(window)
entry_value.pack(fill="x", padx=10)

tk.Button(window, text="Adicionar Entrada", bg="#a5d6a7",
          command=lambda: add_transaction("Entrada")).pack(pady=5)

tk.Button(window, text="Adicionar Saída", bg="#ef9a9a",
          command=lambda: add_transaction("Saída")).pack(pady=5)

listbox = tk.Listbox(window)
listbox.pack(fill="both", expand=True, padx=10, pady=10)

label_balance = tk.Label(window, text="Saldo: R$ 0.00", font=("Arial", 12, "bold"))
label_balance.pack(pady=10)

update_list()
update_balance()

window.mainloop()
