<?php
    header("Content-type:text/html;charset=utf-8");
    $id = $_GET["userID"];
    $name = $_GET["userPwd"];
    $conn=mysql_connect("localhost","root","root");

    if($conn){
        mysql_select_db("newsql");
                                                            //userId(数据库)=$id(在输入框输入的)
        $result = mysql_query("select * from userperson where userId = '$id' and userPwd='$name'",$conn);
        $row = mysql_num_rows($result);

        if($row == 1){
            echo "登录成功";
        }else{
            echo "用户名不存在,请重新输入";
        }

    }else{
        echo "登录失败";
    }

    mysql_close($conn); 
?>