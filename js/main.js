function DropMenu(id){
	var menu = document.getElementById('drop_'+ id).style; 
	if(menu.display == 'none'){
		menu.display = 'block';
	} else{
		menu.display = 'none';
	}
}