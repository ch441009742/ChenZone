import org.junit.Test;

public class Test1 {


    @Test
    public void test1(){
        Integer x=1001;
        run(x);

    }
    public Integer run(Integer x){
        if(x==1){

        }else if(x%2!=0){
            x=isOdd(x);
            run(x);
        }else{
            x=isEven(x);
            run(x);
        }
        return x;
    }


    //奇数
    public Integer isOdd(Integer x){
        x=x*3+1;
        System.out.println("x = " + x);
        return x;
    }
    //偶数
    public Integer isEven(Integer x){
        x=x/2;
        System.out.println("x = " + x);
        return x;
    }
}
