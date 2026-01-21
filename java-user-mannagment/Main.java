import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    static ArrayList<User> users = new ArrayList<>();
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("1-Cadastrar | 2-Listar | 0-Sair");
            int op = sc.nextInt();
            sc.nextLine();

            if (op == 1) addUser();
            else if (op == 2) listUsers();
            else break;
        }
    }

    static void addUser() {
        System.out.print("Nome: ");
        String name = sc.nextLine();
        System.out.print("Email: ");
        String email = sc.nextLine();
        users.add(new User(name, email));
    }

    static void listUsers() {
        for (User u : users) {
            System.out.println(u.getName() + " - " + u.getEmail());
        }
    }
}
