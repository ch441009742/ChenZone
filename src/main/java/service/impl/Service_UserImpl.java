package service.impl;

import dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pojo.User;
import service.Service_User;

@Service
public class Service_UserImpl implements Service_User {


    @Autowired
    private UserDao userDao;

    @Override
    public boolean login(User user) {
        return false;
    }

    @Override
    public boolean regis(User user) {
        boolean flag = userDao.addUser(user);
        return flag;
    }

    @Override
    public User[] checkPhoneNum(User user) {
        User[] us=userDao.checkPhoneNum(user);
        return us;
    }
}
