# Sample AP CSA/CSP Questions for Testing

## AP Computer Science A (Java) Questions

1. **Java Inheritance Question:**
   Consider the following code:
   ```java
   public class Animal {
       public void makeSound() {
           System.out.println("Animal makes a sound");
       }
   }
   
   public class Dog extends Animal {
       public void makeSound() {
           System.out.println("Dog barks");
       }
       
       public void fetch() {
           System.out.println("Dog fetches");
       }
   }
   
   public class Test {
       public static void main(String[] args) {
           Animal a = new Dog();
           a.makeSound();
           a.fetch();
       }
   }
   ```
   What is the result when the Test class is executed?

2. **Array Manipulation Question:**
   What is the output of the following code?
   ```java
   int[] arr = {1, 2, 3, 4, 5};
   for (int i = 0; i < arr.length - 1; i++) {
       arr[i + 1] = arr[i] + arr[i + 1];
   }
   for (int num : arr) {
       System.out.print(num + " ");
   }
   ```

3. **Recursion Question:**
   What is the output of the following recursive method when called with mystery(5)?
   ```java
   public static int mystery(int n) {
       if (n <= 1) {
           return 1;
       }
       return n * mystery(n - 2);
   }
   ```

## AP Computer Science Principles Questions

1. **Binary Representation Question:**
   What is the decimal value of the binary number 10110?

2. **Algorithm Efficiency Question:**
   Consider two algorithms for finding a specific value in a sorted list:
   - Algorithm A: Start at the beginning and check each element until the value is found.
   - Algorithm B: Compare the middle element, then search only the half where the value must be.
   
   Which algorithm is more efficient for large lists and why?

3. **Internet Protocol Question:**
   Explain how packets of data are routed through the Internet using IP addresses and routing tables.
