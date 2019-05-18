package pojo;

import java.util.Date;

public class User {
    private int id;
    //账号
    private String username;
    //密码
    private String password;
    //邮箱
    private String email;
    //手机号
    private String phoneNum;
    //昵称
    private String nickName;
    //注册日期
    private Date reginsDate;
    //生日
    private Date birthday;
    //权限
    private int role;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public Date getReginsDate() {
        return reginsDate;
    }

    public void setReginsDate(Date reginsDate) {
        this.reginsDate = reginsDate;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }
}
