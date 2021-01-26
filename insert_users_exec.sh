mongo <<EOF  
use pizzaria  
db.usuarios.insert( { login: "admin", senha: "2fb54875d166ab45a6a8b21f1631dec573a8cf07" } )  
db.usuarios.insert( { login: "randel", senha: "2fb54875d166ab45a6a8b21f1631dec573a8cf07" } )  
exit
EOF
