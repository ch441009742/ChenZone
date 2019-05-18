package dao;

import pojo.User;

public interface UserDao {
    boolean login(User user);
    boolean addUser(User user);
    User[] checkPhoneNum(User user);
}
