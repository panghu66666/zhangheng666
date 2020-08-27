 	function random(max,min){
        return Math.round(Math.random()*(max-min)+min);
    }
    function randomStr(){
       //创建一个空字符，用于后期拼接字符串
        var strData = "";
		//生成随机字符库 
        for(var i=0;i<4;i++){
            var num = random(0,9);//0-9的随机数
            var az = String.fromCharCode(random(97,122));//a-z
            var AZ = String.fromCharCode(random(65,90));//A-Z

            strData = strData + num + az + AZ;//拼接成字符串
           
        }
        // 取出四个随机字符
        var str = "";
        for(var i=0;i<4;i++){
            str += strData[random(0,strData.length-1)]
        }
        return str;
    }
    randomStr();
