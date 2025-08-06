class company {
    String nameofcom;
    String city;

    company(String nameofcom, String city) {
        this.nameofcom = nameofcom;
        this.city = city;
    }

    void displayInfo() {
        System.out.println("Company Name: " + nameofcom);
        System.out.println("City: " + city);
    }
}

class HR extends company {
    HR(String nameofcom, String city) {
        super(nameofcom, city);     }
}

class Finance extends company {
    Finance(String nameofcom, String city) {
        super(nameofcom, city);     }
}

public class Main {
    public static void main(String[] args) {
        HR hrDept = new HR("ABC Corp", "New York");
        Finance finDept = new Finance("XYZ Ltd", "San Francisco");

        System.out.println("HR Department:");
        hrDept.displayInfo();

        System.out.println("\nFinance Department:");
        finDept.displayInfo();
    }
}
