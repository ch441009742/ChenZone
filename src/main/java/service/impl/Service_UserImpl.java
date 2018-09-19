package service.impl;

import org.springframework.stereotype.Service;
import pojo.User;
import service.Service_User;

@Service
public class Service_UserImpl implements Service_User {
    @Override
    public boolean login(User user) {
        return false;
    }
}
