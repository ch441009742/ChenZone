package util;


import com.sun.tools.javac.util.List;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.util.*;

import java.util.regex.Pattern;

public class Test3 {

    public final static String DATE_OUTPUT_PATTERNS = "yyyy-MM-dd'T'HH:mm:ss.SSSZ";

    public static void main(String[] args) {
        HashMap map= intoExcelgetMap();
        ArrayList l=getMean(map,"白沙洲大道");
        //误差
        Double x=0.1;
        ArrayList l2=getroad(map,l,x);

        for(int i=0;i<l2.size();i++){
            HashMap m=(HashMap) l2.get(i);
            System.out.println(m.get("name"));
        }

    }

    //计算经纬度平均值
    //map:所有的道路集合
    public static ArrayList getMean(HashMap map,String roadname){
        ArrayList a=new ArrayList();
        //ls
        Double ls=0.000000;
        Double ds=0.000000;
        int x=0;
        for(int i=0;i<map.size();i++){
            HashMap road = (HashMap) map.get(i);
            String name=(String)road.get("name");
            if(name.startsWith(roadname)){
                Double l=(Double)road.get("经度");
                Double d=(Double)road.get("纬度");
                ls+=l;
                ds+=d;
                x++;
            }
        }
        Double ll=ls/x;
        Double dd=ds/x;
        a.add(ll);
        a.add(dd);
        return a;
    }

    //根据平均的经纬度,给定误差取到对应的道路
    public static ArrayList getroad(HashMap map,ArrayList a,Double x){
        ArrayList re=new ArrayList();
        //a1平均经度   a2平均纬度
        Double a1=(Double) a.get(0);
        Double a2=(Double) a.get(1);
        for(int i=0;i<map.size();i++){
            HashMap road = (HashMap) map.get(i);

                Double l=(Double)road.get("经度");
                Double d=(Double)road.get("纬度");
                if(l!=null&&d!=null){
                    if(l<=a1+x && l>=a1-x&&d<=a2+x&&a2>=a2-x){
                        re.add(road);
                    }
                }

            }

        return re;
    }

    public static HashMap findroad(HashMap roadmap){
        HashMap TopRoads=new HashMap();
        for(int i=0;i<roadmap.size();i++){
           HashMap road=new HashMap();

            // if(TopRoads.get().containsValue(map.get(i))){

            }
               


        return null;
    }

    //从Excel中获取所有道路集合
    /*
    * @Author ccz
    * @Description //TODO
    * @Date 上午2:11 2021/4/21
    * @Param []
    * @return java.util.HashMap
    **/
    public static HashMap intoExcelgetMap(){
        HashMap<Integer, HashMap> map=new HashMap<Integer,HashMap>();

        String filePath="/Users/ccz/Downloads/2021-4-19.xlsx";//文件路径
        try{
            FileInputStream stream = new FileInputStream(filePath);
            XSSFWorkbook workbook = new XSSFWorkbook(stream);//读取现有的Excel
            XSSFSheet sheet = workbook.getSheetAt(0);//得到第一个sheet

            Iterator<Row> rows = sheet.iterator();

            while(rows.hasNext()){
                HashMap<String, Object> road=new HashMap<String,Object>();
                XSSFRow row=(XSSFRow) rows.next();
                Iterator<Cell> cells = row.iterator();
            //行
                while(cells.hasNext()){

                    XSSFCell cell =(XSSFCell)cells.next();

                        cell.setCellType(Cell.CELL_TYPE_STRING);
                        String value=cell.getStringCellValue();
                        if(cell.getColumnIndex()==8){
                            //取道路名
                            road.put("name",value);
                        }
                        if(cell.getColumnIndex()==13){
                            //取经度
                            road.put("经度",transformStringToDecimal(value));
                        }else if(cell.getColumnIndex()==14){
                            //取纬度
                            road.put("纬度",transformStringToDecimal(value));
                        }

                    }
                map.put(row.getRowNum(),road);

            }

        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return map;
    }
    //小数字符串格式检查
    public static boolean StringIsDecimals(String str){
        return Pattern.matches("^((-|\\+)?(([1-9]\\d*)|0)(\\.\\d*)?)|0$", str);
    }

    //字符串转小数
    public static Double transformStringToDecimal(String string){
        Double result = null;
        if(StringIsDecimals(string)){
            result = Double.parseDouble(string);
        }
        return result;
    }
}
