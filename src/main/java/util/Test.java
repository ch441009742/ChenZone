package util;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.FileOutputStream;


//获取html页面的文本方法

public class Test {
    public static void main(String[] args) {
        try {

            for(int i =9;i<100;i++){
                String num="scp-";
                if(i<10){
                    num=num+"00"+i;
                }else{
                    num=num+"0"+i;
                }
                String url="http://scp-wiki-cn.wikidot.com/"+num;
                File txt=new File("C:\\Users\\Administrator\\Desktop\\scp\\"+num+".txt");
                FileOutputStream fos=new FileOutputStream(txt);


                Document document = Jsoup.connect(url).get();
                Element content = document.getElementById("page-content");
                Elements allElements = content.getAllElements();
                //System.out.println(content.text());
                for (Element e:
                        allElements
                ) {
                    fos.write(e.text().getBytes());
                    fos.write("\r\n".getBytes());


                }

                fos.close();
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
        }


    }
    private static void input(Element element){
        //if()
        element.childNodeSize();
    }
}
