interface MyInter1 {
    public void display();

    default void display1() {
        System.out.println("Default method from MyInter1");
    }
}

interface MyInter2 {
    default void display1() {
        System.out.println("Default method from MyInter2");
    }
}

class Sample implements MyInter1, MyInter2 {

    @Override
    public void display() {
        System.out.println("Display method overridden in Sample class");
    }

    @Override
    public void display1() {
        System.out.println("Calling default methods from both interfaces:");
        MyInter2.super.display1();
        MyInter1.super.display1();
    }
}

public class DemoInterface1 {
    public static void main(String[] args) {
        Sample obj = new Sample();
        obj.display();
        obj.display1();
    }
}
