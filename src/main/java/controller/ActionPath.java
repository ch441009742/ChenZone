package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/")
public class ActionPath {

    @RequestMapping("/")
    public ModelAndView doInit(HttpServletRequest request,HttpServletResponse response ){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("/index");
        return mv;
    }
}
