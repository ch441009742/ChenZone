package controller;


import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pojo.Question;
import service.Service_Leetcode;
import util.DBUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RequestMapping("/leetcode")
@Controller
public class ActionLeetcode {

    /**
     * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
     *
     * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
     *
     * 注意：给定 n 是一个正整数。
     */

    @Autowired
    private Service_Leetcode service_leetcode;

    @RequestMapping("/v1")
    public String pl(HttpServletRequest request, HttpServletResponse response){

        return "";
    }

    @RequestMapping(value="/list",method = RequestMethod.GET)
    public String getList(HttpServletRequest request, HttpServletResponse response){
        Question allQuertionList = service_leetcode.getAllQuertionList();
        String s = JSON.toJSONString(allQuertionList);
        return s;
    }
}

