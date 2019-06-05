package service;

import org.springframework.stereotype.Component;
import pojo.Question;

import java.util.List;

@Component
public interface Service_Leetcode {
    public List<Question> getAllQuertionList();
    int addQuertion(Question question);
}
