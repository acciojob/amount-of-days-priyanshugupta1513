//your JS code here. If required.
function getDays(year){
	if(year%400==0 || (year%4==0 && year%100 !==0)){
		return 366 ;
	}else{
		 return 365 ;
	}
}
let year = prompt("enter valid year: ") 
alert(getDays(year));