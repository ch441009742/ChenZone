package service;

import pojo.User;

public interface Service_User {
    boolean login(User user);
    boolean regis(User user);
}
