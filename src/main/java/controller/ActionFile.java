package controller;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pojo.Question;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.*;

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
    @RequestMapping(value="/upload",produces="text/html;charset=utf-8",method = RequestMethod.POST)
    public @ResponseBody
    String  upload(@RequestParam("file1") MultipartFile file1, HttpServletRequest request){
        Map<String,Object> map= new HashMap<String,Object>();
        if(file1.isEmpty()){
            map.put( "result", "error");
            map.put( "msg", "上传文件不能为空" );
        } else{
            String originalFilename=file1.getOriginalFilename();
            String fileBaseName=FilenameUtils.getBaseName(originalFilename);
            Date now = new Date();
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String floderName=fileBaseName+"_" +df.format(now);
            try{
                //创建要上传的路径
                File fdir = new File(request.getSession().getServletContext().getRealPath("/WEB-INF/chenzone/movie"));
                if (!fdir.exists()) {
                    fdir.mkdirs();
                }
                //文件上传到路径下
                FileUtils. copyInputStreamToFile(file1.getInputStream(), new File(fdir,originalFilename));
                //coding
                map.put( "result", "success");

            } catch (Exception e) {
                map.put( "result", "error");
                map.put( "msg",e.getMessage());

            }
        }
        return map.toString();

    }

    @RequestMapping(value="/deletefile",method = RequestMethod.POST)
    @ResponseBody
    public JSONObject  deletefile(HttpServletRequest request,@RequestParam("filepath") String filepath){
        JSONObject jsonObject = new JSONObject();
        File fdir = new File(request.getSession().getServletContext().getRealPath("/WEB-INF/chenzone"+filepath));
        boolean delete = fdir.delete();
        jsonObject.put("flag",delete);
        return jsonObject;

    }





    public String getFileURLpath(String path,String rootpath){
        if(path.startsWith(rootpath)){
            path=path.substring(rootpath.length());
        }
        return path;
    }
}
