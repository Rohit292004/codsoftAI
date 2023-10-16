const gridItems = document.querySelectorAll(".grid-item");
 let symbol="X";
 
 const isFull =()=> {
let  isAllDivFull = true;
	gridItems.forEach((item)=>{
		if(item.innerHTML=== "")
			isAllDivFull = false;
	});	
	return isAllDivFull;
 };

 const isWinning =(symbol)=>{ 
	 const  first = gridItems[0].innerHTML;
	 const  second = gridItems[1].innerHTML;
	 const  third = gridItems[2].innerHTML;
	 const  four = gridItems[3].innerHTML;
	 const  five = gridItems[4].innerHTML;
	 const  six = gridItems[5].innerHTML;
	 const  seven = gridItems[6].innerHTML;
	 const  eight= gridItems[7].innerHTML
	 const  nine = gridItems[8].innerHTML 
if(symbol===first && symbol===second && symbol===third)return true;
if(symbol===four && symbol===five && symbol===six)return true;
if(symbol=== seven && symbol===eight && symbol=== nine )return true;  
if(symbol===first && symbol=== four && symbol===seven  )return true;  
if(symbol===second && symbol ===five && symbol===eight  )return true;  
if(symbol===third && symbol===seven  && symbol===nine  )return true;  
if(symbol===first && symbol===five  && symbol===nine  )return true;  
if(symbol===third && symbol=== five && symbol===seven  )return true;  

 };
 
 
 gridItems.forEach((item)=>{		
	item.addEventListener("click",()=>{
		if(item.innerHTML !=="") return;
		
		item.innerHTML = symbol;
		
		if(isWinning(symbol)){
			
		alert("Player "+ symbol + " Won The Match");	
			return;
		}

		if(isFull()){
			alert("Tie");
			return;
		};
				
		if(symbol==="X")
		   symbol="O";
		else
			symbol="X";
			
		})	;
	 
 })	 ;