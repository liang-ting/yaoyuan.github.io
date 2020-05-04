"use strict";	
const BOUND =6;
var num;

document.write('<div class="container">');	
for(let i=0; i<BOUND; i=i+1)
{
	document.write('<div>');	
	document.write('<table border=1>');	
	document.write('<tr><td colspan="8">第'+ (i+1) + '張卡片 <input type = "checkbox" name="ans" value="ans">	</td></tr>');
	
	num = Math.pow(2, i);
	for(let j=0; j<4; j=j+1)
	{
		document.write('<tr>');
		
		for(let k=0; k<8; k=k+1)
		{
			document.write('<td>'+ num +'</td>');
			num++;
			if((num&Math.pow(2, i))==0)
				num+=Math.pow(2, i);
		}
		
		document.write('</tr>');
	}
	
	document.write('</table>');
	document.write('</div>');	
}

document.write('</div>');	