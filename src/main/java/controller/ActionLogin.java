package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

        System.out.println("user = [" + user.getUsername() + "]");
        if(f){
            model.addAttribute("msg","登陆成功");
        }else{
            model.addAttribute("msg","登陆失败");
        }
        return "success1";
    }

    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public String register(User user, Model model){

        boolean regis = service_user.regis(user);

        if(regis){
            model.addAttribute("msg","注册成功");
        }else{
            model.addAttribute("msg","注册失败");
        }

        return "success";
    }
    @RequestMapping("/checkphonenum")
    public void checkPhoneNum(User user,Model model){
        User[] users = service_user.checkPhoneNum(user);
        if(users.length>0){
            model.addAttribute("msg","手机号已存在");
        }else{
            model.addAttribute("msg","可以注册");
        }
    }
}
