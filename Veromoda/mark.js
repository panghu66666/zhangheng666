class Magnifier{
	constructor(newSmallBox,newBigBox,newMask){
		this.smallBox = newSmallBox;
		this.bigBox = newBigBox;
		this.mask = newMask;
	}

//鼠标划上：
	onmouseover(){
		let tHat = this;   //定义中间变量
		this.smallBox.onmouseover = function(){
			tHat.bigBox.style.display = "block";
			tHat.mask.style.display = "block";
		}
	}

//鼠标离开：
	onmouseout(){
		let tHat = this;
		this.smallBox.onmouseout = function(){
			tHat.bigBox.style.display = "none";
			tHat.mask.style.display = "none";
		}
	}

//鼠标移动：
	onmousemove(){
		let tHat = this;

		this.smallBox.onmousemove = function(evt){
			let e = evt || event;
								//tHat可以换成this			 tHat不能换成this
			let Left = e.pageX - tHat.smallBox.offsetLeft - tHat.mask.offsetWidth/2;
			let Top =  e.pageY - tHat.smallBox.offsetTop - tHat.mask.offsetHeight/2;

		//临界问题：
			if(Left < 0){Left = 0;}
			
			let maxLeft = tHat.smallBox.offsetWidth - tHat.mask.offsetWidth;
			if(Left > maxLeft){Left = maxLeft;}
			
			if(Top < 0){Top = 0;}
			
			let maxTop = tHat.smallBox.offsetHeight - tHat.mask.offsetHeight;
			if(Top > maxTop){Top = maxTop;}

			tHat.mask.style.left = Left + "px";
			tHat.mask.style.top = Top + "px";

			let x = tHat.bigBox.offsetWidth*Left/tHat.mask.offsetWidth;
			let y = tHat.bigBox.offsetHeight*Top/tHat.mask.offsetHeight;

			tHat.bigBox.style.backgroundPositionX = -x + "px";
			tHat.bigBox.style.backgroundPositionY = -y + "px";
		}
	}


	eventBind(){
		this.onmouseover();
		this.onmouseout();
		this.onmousemove()
	}

}