package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pojo.User;



@Controller
@RequestMapping("/user")
public class ActionUser {

    @RequestMapping(value = "/login",method = RequestMethod.POST,consumes ="application/json")
    public Boolean login(@RequestBody User user){
        System.out.println("user = [" + user.getUsername()+"---"+user.getPassword() + "]");
        if("123".equals(user.getUsername())){
            return true;
        }else{
            return false;
        }

    }
}
