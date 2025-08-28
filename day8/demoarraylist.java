
import java.util.*;
 
class sample
 {
    ArrayList<String> a=new ArrayList<String>();
           
       sample()
        {
           
            a.add("Audi");
            a.add("BMW");
            a.add("Corvette");
            a.add("Dodge");
            a.add("E-Tron");
         
 
        //    System.out.println(a.get(0));    
        // Iterator itr=a.iterator();
        // while(itr.hasNext())
        // {
        //     System.out.println(itr.next());
        // }
 
        // ListIterator lis=a.listIterator();
       
        // System.out.println("From order");
        // while(lis.hasNext())
        // {
        //     System.err.println(lis.next());
        // }
 
        // System.out.println("******************");
        // while(lis.hasPrevious())
        // {
        //     System.out.println(lis.previous());
        // }
 
       for(String x:a)
       {
        System.out.println(x);
       }
 
      a.forEach(x->System.out.println(x.toUpperCase()));
       
     }
 
 }
 
class demoarraylist
 {
     public static void main(String[] args) {
         new sample();
     }
 }
 
