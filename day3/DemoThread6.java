class Sample extends Thread {
    public void run() {
        for (int i = 0; i < 10; i++) {
            try {
                System.out.println(i);
                Thread.sleep(1000);  // Pause current thread for 1 second
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class DemoThread6 {
    public static void main(String[] args) throws InterruptedException {
        Sample obj = new Sample();
        obj.start();

        for (int i = 0; i < 10; i++) {
            System.out.println("main\t" + i);
            Thread.sleep(1000);  // Pause main thread for 1 second
        }
    }
}
