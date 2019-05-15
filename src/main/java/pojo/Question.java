package pojo;

public class Question {
    private String Qname;
    private String Qcontent;
    private String inNum;
    private String inType;
    private String outNum;
    private String outType;
    private String answerfile;

    public String getQname() {
        return Qname;
    }

    public void setQname(String qname) {
        Qname = qname;
    }

    public String getQcontent() {
        return Qcontent;
    }

    public void setQcontent(String qcontent) {
        Qcontent = qcontent;
    }

    public String getInNum() {
        return inNum;
    }

    public void setInNum(String inNum) {
        this.inNum = inNum;
    }

    public String getInType() {
        return inType;
    }

    public void setInType(String inType) {
        this.inType = inType;
    }

    public String getOutNum() {
        return outNum;
    }

    public void setOutNum(String outNum) {
        this.outNum = outNum;
    }

    public String getOutType() {
        return outType;
    }

    public void setOutType(String outType) {
        this.outType = outType;
    }

    public String getAnswerfile() {
        return answerfile;
    }

    public void setAnswerfile(String answerfile) {
        this.answerfile = answerfile;
    }
}
