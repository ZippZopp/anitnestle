$(document).ready(function () {

  let brand_element = get_brand_element()

  if(brand_element) {
    if(is_from_nestle(brand_element.innerText)){
      warn_user(brand_element)
    }else{
      mark_brand_as_legit(brand_element)
    }
  }else{
    inform_backgroundscirpt(is_from_nestle=false) //is_from_nestle  is false because there is nothing to warn about
  }
});

function  get_brand_element(){
  // TODO currently only works in amazone
  return document.querySelectorAll('.a-spacing-small.po-brand .a-span9 .a-size-base')[0]
}

function is_from_nestle(name){
  let all_nestle_companies = ["Carnation","Caro","cocoa D'Onofrio","Enviga","Libby's","Milo","Nescau","Nesquik","Nestea","Ovaltine","Ricacao","Romanette","Special.T","Supligen","Sweet Leaf Tea","Blue Bottle Coffee Company","Bonka","Buondi","Chameleon Cold-Brew","Christina","Dolca","Dolce Gusto","Ecco","El Chaná","International Roast","Kirma","Loumidis","Mountain Blend","Nescafé","Nespresso","Partner's Blend","Ricoffy","Ricoré","Ristretto","Sical","Starbucks","Sunrise","Taster's Choice","Tofa","Zoégas","Acqua Panna","Alaçam","Aqua Mineral","Aqua Pod","Aqua Spring","Aquarel","Arctic","Baraka","Buxton","Charmoise","Ciego Montero","Contrex","Cristalp","Da Shan YunNan Spring","Dar Natury","Eco de los Andes","Erikli","Frische Brise","Gerber","Ghadeer","Glaciar","Henniez","Hépar","Hidden Spring","Κorpi","La Vie","Levissima","Los Portales","Minéré","Nałęczowianka","Nestlé Selda","Nestlé Vera","Neuselters","Pejo","Perrier","Petrópolis","Porvenir","Princes Gate","Recoaro","San Pellegrino","Santa Bárbara","Santa Maria","São Lourenço","Sohat","Springs","Valvert","Viladrau","Vittel","Water Line","Waterman","Cerevita","Cerelac","Cheerios","Chocapic","Cini Minis","Clusters","Cookie Crisp","Curiously Strawberry","Curiously Cinnamon","Estrelitas","Fitness","Force Flakes","Gold Flakes","Golden Grahams","Golden Morn","Golden Nuggets","Honey Stars","Koko Krunch","Lion Cereal","Milo cereals","Nescau Cereal","Nesquik Breakfast  Cereal","Nestlé Corn Flakes","Shredded Wheat","Shreddies","TRIO Cereal","Uncle Tobys","Chamyto","Chambinho","Chandelle","Chiquitín","Club","Hirz","La Laitière","La Lechera","LC1","Le Viennois","Moça","Molico","Munch Bunch","Nestlé","Nesvita","Ninho","Ski","Sollys","Sveltesse","Svelty","Yoco","Abuelita","Aero","After Eight","All Stars","Allen's","Alpia","Alpino","Animal Bar","Bertie Beetle","Besos de Moza","Big Turk","Black Magic","Blue Riband","Boci","Bono","Bon Pari","Breakaway","Cailler","Capri","Caramac","Carlos V","Charge","Chips Ahoy!","Choclait Chips","Choco Crossies","Chocolate Surpresa","Chokito","Cocosette","Coffee Crisp","Crunch","D'Onofrio","Dairy Box","Damak","Drifter","Fizzfindle","Frigor","Galak/Milkybar","Garoto","Heaven","Hercules Bars","Joe","Joff","JOJO","Kit Kat","Lion","Lollo","Mabel's","Cracker","Cremositas","Gauchitas","María Maizena","Moraditas","Rosquitas","Salvado","TOP","Wafer","Yapita","Matchmakers","Maverick","Mio","Minties","Mirage","Moça","Munch","Munchies","Negresco","Negrita","Nestlé Alpine White","Nestlé Candy Shop","Nestlé Classic","Nestlé Dessert","Nestlé Milk Chocolate","Nestlé with Almonds","Nestlé Wonder Ball","Nestlé Yes","Nuts","Orion","Passatempo","Peppermint Crisp","Perugina Baci","Plaistowe","Polo","Prestígio","Princessa","Quality Street","Rolo","Rowntrees","Fruit Gums","Fruit Pastilles","Jelly Tots","Juicy Jellies","Pick & Mix","Randoms","Tooty Frooties","Sahne Nuss","Scorched Almonds","Sensação","Smarties","Suflair","Sublime","Sundy","Super 8","Susy","Svitoch","Szerencsi","Tango","Tango Mini Galletas","Texan Bar","Toffee Crisp","Tola","Nestlé Toll House cookies","Trencito","Triangulo","Turtles","Walnut Whip","XXX mints","Yorkie","Buitoni","California Pizza Kitchen","Delissio Pizza","DiGiorno Pizza","Hot Pockets","Hälsans Kök","Jack's Pizza","Lean Cuisine","Lean Pockets","Papa Giuseppe","Stouffer's","Sweet Earth Foods","Tombstone Pizza","Wagner Pizza","Åhusglass","Aino","Camy","D'Onofrio","Делта","Δέλτα","Nestlé Dibs – Produced in conjunction with Dreyer's Ice Cream. Marketed as Edy's in the midwest and eastern United States.","Dreyer's","Drumstick","Eskimo","Frigor","Frisco","Froneri","Häagen-Dazs","Kimo","Kimy","Maxibon","Mat Kool","Mivvi","Motta","Mövenpick","Nestlé Drumstick – The Original Sundae Cone","Nestlé Ice Cream","Nestlé Princessa","Oreo Frozen Dessert Sandwiches","Outshine","Pingviini","Push-Up","Real Dairy","Savory","Schöller","Skinny Cow","Sorbetes","Temptations","Underground is","zer0% Fat","* Atrium Innovations","Boost","Carnation Instant Breakfast","Compleat","Crucial","Diabetisource","Douglas Laboratories","Fibersource","Garden of Life","Genestra brands","Glytrol","Impact","Isosource","Meritene","Modulen","Nature's Bounty","Novasource Renal","Nutren","Nuun","Optifast","Optifibre","Orgain","Osteo Bi-Flex","Puritan's Pride","Peptamen","Persona Nutrition","Pure Encapsulations","Resorb","Resource","Solgar","Sustagen","Trophic","Vital Proteins","Wobenzym","Alfare","Beba","Bona","Cerelac","Farinha Láctea","FM 85","Freshly","Gerber","Good Start","Guigoz","Lactogen","Mindful Chef","Nan","NAN HA","NanSoy","NaturNes","Neslac","Nestlé","Nestlé Bear Brand","Nestogen","Nestum","Nido","Piltti","PreNan","SMA","Wyeth","Bakers","Beta","Bonio","Bonnie","Castor & Pollux","Chef Michael's Canine Creations","Felix","Fido","Go Cat","Gourmet","Lily's Kitchen","Lucky Dog","Merrick","Mon Petit","PetLife","Purina","Supercoat","Tails .com","Tidy Cats","Totalcare","Whole Earth Farms","Winalot","Alpo","Purina Beggin' Strips","Busy Bone","Beneful","Cat Chow","Dog Chow","Fancy Feast","Friskies","Mighty Dog","Purina","Purina ONE","Purina Pro Plan","Acti-V","ActiPlus","Fruit Selection Yogurt","Hirz","Longa Vida","Molico","Munch Bunch","Nestlé Raita","Rawaytee Maza","Ski","Sweet N Tasty Yogurt","Yelly"]
  company_is_from_nestle = false

  all_nestle_companies.forEach(function(c_company) {
    // first check if full Brand name is in list
    if(c_company.toLowerCase().replace("é", "e") ===  name.toLowerCase().replace("é", "e")){
      company_is_from_nestle = true
    }
    name.trim().split(/\s+/).forEach(function(single_name) {
    // than check if any word of brand is in database / this feature seems helpfull but could result in a wrong detection
      if(c_company.toLowerCase().replace("é", "e") ===  single_name.toLowerCase().replace("é", "e")){
        company_is_from_nestle = true
      }
    });
  });

  return company_is_from_nestle
}

function warn_user(brand_element){
  //console.log(brand_element.innerText+" is probably from Nestlé")
  brand_element.style.color = "#FF0000"
  insert_logo(brand_element,is_from_nestle=true)
  inform_backgroundscirpt(is_from_nestle=true)
}

function mark_brand_as_legit(brand_element){
  //console.log(brand_element.innerText+" is probably NOT from Nestlé")
  //brand_element.style.color = "#00D100"
  insert_logo(brand_element,is_from_nestle=false)
  inform_backgroundscirpt(is_from_nestle=false)
}

function inform_backgroundscirpt(is_from_nestle){
  chrome.runtime.sendMessage({nestle: is_from_nestle})
}

function insert_logo(brand_element,is_from_nestle){
  var img = document.createElement("img");

  if(is_from_nestle === true){
    img.src = chrome.runtime.getURL("img/Nestle.svg");
  }else{
    img.src = chrome.runtime.getURL("img/noNestle.svg");
  } 
  img.style.height = "1em";
  brand_element.after(img);

  display_info_on_hover(brand_element,img,is_from_nestle=is_from_nestle)

}

function display_info_on_hover(brand_element,img,is_from_nestle){
  const newDiv = document.createElement("div");
  newDiv.innerText = create_suitable_infotext(brand_element,is_from_nestle)
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
    newDiv.style.left = event.pageX- 135  + "px"
    newDiv.style.top = event.pageY+10 + "px"
    newDiv.style.visibility = "visible";
    newDiv.style.padding = "10px 10px 10px 10px";
    newDiv.style.borderRadius = "5px";
  };
  
  img.onmouseout = function(){	
    newDiv.style.visibility = "hidden"};

}

function create_suitable_infotext(brand_element,is_from_nestle){
  if(is_from_nestle === true){
    return brand_element.innerText + " is probably related to Nestlé"
  }else{
    return brand_element.innerText + " is probably NOT related to Nestlé"
  }
}

