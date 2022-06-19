text = "Cerelac,Gerber,NaturNes,Acqua Panna,Perrier,S.Pellegrino,Cheerios,Fitness,Lion,Nesquik Cereal,Aero,KitKat,Milkybar,Nestlé Les Recettes de l'Atelier,Quality Street,Smarties and a selection of our local confectionery brands,Blue Bottle Coffee,Nescafé,Nescafé Dolce Gusto, Nespresso, Starbucks Coffee At Home,Buitoni, Hot Pockets, Lean Cuisine, Maggi, Stouffer's, Thomy,Carnation, Coffee-Mate, La Laitière, Nido,Milo, Nesquik, Nestea,Chef, Chef-Mate, Maggi, Milo, Minor’s, Nescafé, Nestea, Sjora, Lean Cuisine, Stouffer's,Dreyer’s, Extrême, Häagen-Dazs, Mövenpick, Nestlé Ice Cream,Alpo, Bakers Complete, Beneful, Cat Chow, Dog Chow, Fancy Feast, Felix, Friskies, Gourmet, Purina, Purina ONE, Pro Plan"

text = text.split(",")
new_text = ""

for tt in text:
  tt = tt.split(" ")
  filtert_t = ""
  for t in tt:
    if len(t) > 0:
      t = t.replace(' ', '')
      filtert_t += t + " "
  filtert_t =  filtert_t[:-1]
  new_text  += "\""+ filtert_t +"\""+","


print(new_text[:-1])


