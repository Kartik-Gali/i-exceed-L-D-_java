class Sample extends Thread {
    public void run() {
        Thread.currentThread().setName("i-exceed thread");
        System.out.println("Inside run method\t" + Thread.currentThread().getName());
    }
}

class DemoThread3 {
    public static void main(String[] args) {
        System.out.println("Name in Main method\t" + Thread.currentThread().getName());
        Sample obj = new Sample();
        obj.start();
    }
}
