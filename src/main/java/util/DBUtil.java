package util;

import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

public class DBUtil {

    private static DataSource dataSource;
    private static   Connection conn = null;

    //获取连接
    public static Connection getConnection(DataSource dataSource) {
        try {
            conn = dataSource.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }

    //获取数据
    public static DataSource getSources() {
        try {
            Properties properties = new Properties();
            properties.load(new FileReader("db.properties"));
//            String driverClassName = properties.getProperty("driverClassName");
//            String url = properties.getProperty("url");
//            String username = properties.getProperty("username");
//            String password = properties.getProperty("password");
//            //已经获取properties数据

            //创建数据库连接池    获取数据源，用连接池直接加载Properties
            dataSource = DruidDataSourceFactory.createDataSource(properties);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return dataSource;
    }
    //释放资源
    public  static  void  shifang(){

        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }


}
