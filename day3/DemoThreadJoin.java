class Sample extends Thread {
    public void run() {
        for (int i = 0; i < 10; i++) {
            try {
                System.out.println(i);
                Thread.sleep(1000);  // Sleep for 1 second
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class DemoThreadJoin {
    public static void main(String[] args) throws InterruptedException {
        Sample obj1 = new Sample();
        Sample obj2 = new Sample();
        Sample obj3 = new Sample();

        obj1.start();
        obj1.join();  // Wait until obj1 finishes

        obj2.start();
        obj2.join();  // Wait until obj2 finishes

        obj3.start();
        obj3.join();  // Optional: wait until obj3 finishes before main exits
    }
}
