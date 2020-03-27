mongo <<EOF  
use pizzaria  

db.pizzas.insert( {"nome": "Mussarela", "descricao": "Molho, mussarela, tomate em rodelas e orégano.", "preco": "44.90" } )
db.pizzas.insert( {"nome": "Calabresa", "descricao": "Molho, mussarela, calabresa, cebola fatiada e orégano.", "preco": "34.90" } )
db.pizzas.insert( {"nome": "Margherita", "descricao": "Molho, mussarela, tomates em rodelas e manjericão.", "preco": 24.5 } )
db.pizzas.insert( {"nome": "Basca", "descricao": "Molho, mussarela, bacon, rodelas de tomates, catupiry e orégano.", "preco" : "54.90" } )
db.pizzas.insert( {"nome": "Mafiosa", "descricao": "Molho, mussarela, calabresa apimentada, berinjela, cebola fatiada e orégano.", "preco" : "19.90"} )
db.pizzas.insert( {"nome": "Brócolis c/ Catupiry", "descricao": "Molho, mussarela, brócolis refogado com azeite de oliva e alho, catupiry e orégano.", "preco" : "20.99" } )
db.pizzas.insert( {"nome": "Alho e Óleo", "descricao": "Molho, mussarela, alho, azeite de oliva e orégano.", "preco" : "35.99"} )
db.pizzas.insert( {"nome": "Escarola", "descricao": "Molho, chicória refogada com azeite de oliva e alho e mussarela.", "preco": "25.99"} )

exit
EOF  
