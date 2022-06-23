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
  /*if(brand.innerText !==  "Nestlé"){
    brand.innerText = brand.innerText + " is from Nestlé"
  }*/

  brand.style.color = "#FF0000"
  insert_logo(brand,is_from_nestle=true)
  inform_backgroundscirpt(is_from_nestle=true)
}

function mark_company_as_legit(brand){
  console.log(brand.innerText+" is NOT from Nestlé")
  
  //brand.style.color = "#00D100"
  insert_logo(brand,is_from_nestle=false)
  inform_backgroundscirpt(is_from_nestle=false)
}

function inform_backgroundscirpt(is_from_nestle){
  chrome.runtime.sendMessage({nestle: is_from_nestle})
}

function insert_logo(brand,is_from_nestle){
  var img = document.createElement("img");

  if(is_from_nestle === true){
    img.src = chrome.runtime.getURL("img/Nestle.svg");
  }else{
    img.src = chrome.runtime.getURL("img/noNestle.svg");
  }
  
  img.style.height = "1em";
  brand.after(img);

  display_info_on_hover(brand,img,is_from_nestle=is_from_nestle)

}

function display_info_on_hover(brand,img,is_from_nestle){
  const newDiv = document.createElement("div");
  newDiv.innerText = create_suitable_infotext(brand,is_from_nestle)
  newDiv.style.position = "absolute"
  newDiv.style.visibility = "hidden"
  newDiv.style.letterSpacing = "1px"
  newDiv.style.boxShadow = "0 1px 2px 1px rgba( 0, 0, 0, 0.4 )"

  if(is_from_nestle === true){
    newDiv.style.backgroundColor = "#FF0000"
  }else{
    newDiv.style.backgroundColor = "#00FF00"
  }

  document.body.appendChild(newDiv);

  img.onmouseover = function(event){
    console.log(event.pageX)   
    newDiv.style.left = event.pageX- 100  + "px"
    newDiv.style.top = event.pageY+10 + "px"
    newDiv.style.visibility = "visible";
    newDiv.style.padding = "10px 10px 10px 10px";
    newDiv.style.borderRadius = "5px";
  };
  
  img.onmouseout = function(){	
    newDiv.style.visibility = "hidden"};

}

function create_suitable_infotext(brand,is_from_nestle){
  if(is_from_nestle === true){
    return brand.innerText + " is related to Nestlé"
  }else{
    return brand.innerText + " is NOT related to Nestlé"
  }
}

