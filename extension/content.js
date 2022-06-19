$(document).ready(function () {

  let brand_name = document.getElementsByClassName("a-spacing-small po-brand")[0].getElementsByClassName("a-span9")[0].innerText;


  if(is_from_nestle(brand_name)){
    warn_user()
  }else{
    console.log(brand_name+" is fine")
  }

});


function is_from_nestle(name){
  let all_nestle_companies = ["Nestlé","Cerelac","Gerber","NaturNes","Acqua Panna","Perrier","S.Pellegrino", "San Pellegrino","Cheerios","Fitness","Lion","Nesquik Cereal","Aero","KitKat","Milkybar","Nestlé Les Recettes de l'Atelier","Quality Street","Smarties and a selection of our local confectionery brands","Blue Bottle Coffee","Nescafé","Nescafé Dolce Gusto","Nespresso","Starbucks Coffee At Home","Buitoni","Hot Pockets","Lean Cuisine","Maggi","Stouffer's","Thomy","Carnation","Coffee-Mate","La Laitière","Nido","Milo","Nesquik","Nestea","Chef","Chef-Mate","Maggi","Milo","Minor’s","Nescafé","Nestea","Sjora","Lean Cuisine","Stouffer's","Dreyer’s","Extrême","Häagen-Dazs","Mövenpick","Nestlé Ice Cream","Alpo","Bakers Complete","Beneful","Cat Chow","Dog Chow","Fancy Feast","Felix","Friskies","Gourmet","Purina","Purina ONE","Pro Plan"]

  for(n_c in all_nestle_companies){
    c = all_nestle_companies[n_c];
    if(c.toLowerCase().replace("é", "e") ===  name.toLowerCase().replace("é", "e")){
      return true
    } 
    /* 
    if(accordance === true){
      console.log(c +" = "+ name)
    }else{
      console.log(c +" / "+ name)
    }*/
  }
  return false
}

function warn_user(){
  console.log(brand_name+" is from nestle")
}