function checkForm(createForm){
	if(createForm.irum.value==""){
		alert("이름을 입력하세요");
		createForm.irum.focus();
		return false;
	}
	
	if(createForm.irum.value.length < 6){
		alert("이름을 정확히 입력하세요.");
		createForm.irum.focus();
		return false;
	}
	
	if(createForm.siteUrl.value==""){
		alert("이동할 사이트를 선택하세요.");
		createForm.siteUrl.focus();
		return false;
	}
	
	var test=false;
	for(var i=0;i<createForm.fruit.length;i++){
		if(createForm.fruit[i].checked==true) test=true;
	}
	if(test==false){
		alert("좋아하는 과일을 선택하세요.");
		createForm.fruit[0].focus();
		return false;
	}
	
	var count=0;
	var str="";
	for(var i=0;i<createForm.interest.length;i++){
		if(createForm.interest[i].checked==true){
			str+=createForm.interest[i].value+",";
			count++;
		}
		// alert(str);
	}
	createForm.abc.value=str;
	
	if(count==0){
		alert("관심사를 하나 이상 체크하세요.");
		createForm.interest[0].focus();
		return false;
	}
}