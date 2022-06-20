$(document).ready(function () {

  let brand = document.querySelectorAll('.a-spacing-small.po-brand .a-span9 .a-size-base')[0]
  


  if(is_from_nestle(brand.innerText)){
    warn_user(brand)
  }else{
    mark_company_as_legit(brand)
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

function warn_user(brand){
  console.log(brand.innerText+" is from Nestlé")
  if(brand.innerText !==  "Nestlé"){
    brand.innerText = brand.innerText + " is from Nestlé"
  }
  brand.style.color = "#FF0000"
  inform_backgroundscirpt(true)
}

function mark_company_as_legit(brand){
  console.log(brand.innerText+" is NOT from Nestlé")
  brand.style.color = "#00D100"
  inform_backgroundscirpt(false)
}

function inform_backgroundscirpt(is_company_from_nestle){
  chrome.runtime.sendMessage({nestle: is_company_from_nestle})
}