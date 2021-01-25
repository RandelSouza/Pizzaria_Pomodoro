mongo <<EOF  
use pizzaria  
db.bebidas.insert( { nome: "Coca-Cola, 2 L", tipo: "Refrigerante", preco: 4.99} )  
db.bebidas.insert( { nome: "Coca-Cola, 1 L", tipo: "Refrigerante", preco: 9.99} )
db.bebidas.insert( { nome: "Cerveja Itaipava, 437 ML", tipo: "Alcoólica", preco: 4.99} )  
db.bebidas.insert( { nome: "Cerveja Bramah, 350 ML", tipo: "Alcoólica", preco: 4.99} ) 
exit
EOF  
