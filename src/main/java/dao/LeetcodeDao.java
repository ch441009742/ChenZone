package dao;

import pojo.Question;

import java.util.List;

public interface LeetcodeDao {
    List<Question> getAllQuertionList();
    int addQuertion(Question question);
}
