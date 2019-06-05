package service.impl;

import dao.LeetcodeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pojo.Question;
import service.Service_Leetcode;

import java.util.List;

@Service("Service_Leetcode")
public class Servcie_LeetcodeImpl implements Service_Leetcode {


    @Autowired
    private LeetcodeDao LeetcodeDao;

    @Override
    public List<Question> getAllQuertionList() {
        return LeetcodeDao.getAllQuertionList();
    }
}
