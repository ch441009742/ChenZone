package dao;

import pojo.User;

public interface UserDao {
    boolean addUser(User user);
    User[] checkPhoneNum(User user);
}
