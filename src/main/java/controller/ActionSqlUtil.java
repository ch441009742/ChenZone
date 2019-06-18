package controller;

import com.alibaba.druid.sql.SQLUtils;
import com.alibaba.druid.util.JdbcUtils;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Type;

@RequestMapping("/util")
@Controller
public class ActionSqlUtil {

    @RequestMapping(value="/sqlformat",method = RequestMethod.POST)
    @ResponseBody
    public JSONObject sqlformat(HttpServletRequest request, @RequestBody JSONObject data) {

        JSONObject json=new JSONObject();
        String type= (String) data.get("type");
        String sql=(String) data.get("sql");
        String outsql="";
        System.out.println(" data = [" + data + "]");
        if("Mysql".equals(type)){
            outsql = SQLUtils.formatMySql(sql);
        }else if("Oracle".equals(type)){
            outsql=SQLUtils.formatOracle(sql);
        }else if("Sqlserver".equals(type)){
            outsql=SQLUtils.formatSQLServer(sql);
        }
        json.put("outsql",outsql);
        return json;
    }
}
