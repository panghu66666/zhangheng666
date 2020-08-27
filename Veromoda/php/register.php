<?php
    header("Content-type:text/html;charset=utf-8");
    $dlTel=$_REQUEST["tel"];
    $dlPwd=$_REQUEST["pWD"];
    $conn=mysql_connect("localhost","root","root");
    if($conn){
        mysql_select_db("newsql");
        $result = mysql_query("select * from userperson where userId = '$dlTel'",$conn);
        $rows = mysql_num_rows($result);

        if($rows ==1){
            echo 0; 
        }else{
            mysql_query("insert into userperson (userId,userPwd) values('$dlTel','$dlPwd')",$conn);
            echo 1;
        }
    }else{
        echo "登录失败";
    }
    mysql_close($conn);
?>