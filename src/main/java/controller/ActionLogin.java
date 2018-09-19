package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import pojo.User;
import service.Service_User;



@Controller
@RequestMapping("/user")
public class ActionLogin {
    @Autowired
    private Service_User service_user;

    @RequestMapping("login")
    public String login (User user, Model model){

        boolean f = service_user.login(user);
        //判断登录是否成功
        if(f){
            model.addAttribute("msg","登陆成功");
        }else{
            model.addAttribute("msg","登陆失败");
        }
        return "success";
    }
}
