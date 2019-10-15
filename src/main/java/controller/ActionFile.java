package controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pojo.Question;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/file")
@Controller
public class ActionFile {



    @RequestMapping("/list")
    public @ResponseBody
    List<Question>  getList(HttpServletRequest request, HttpServletResponse response){
        String rootPath=request.getSession().getServletContext().getRealPath("/WEB-INF/chenzone");
        File file =new File(rootPath+"/movie");
        File[] files = file.listFiles();
        List l=new ArrayList();
        for (File e:files
             ) {
            JSONObject jo=new JSONObject();
            jo.put("filename",e.getName());
            jo.put("filepath",getFileURLpath(e.getPath(),rootPath));
            l.add(jo);
        }
        return l;
    }


    public String getFileURLpath(String path,String rootpath){
        if(path.startsWith(rootpath)){
            path=path.substring(rootpath.length());
        }
        return path;
    }
}
