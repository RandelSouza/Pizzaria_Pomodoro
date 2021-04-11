module.exports = (app) => {
    var controllerBebida = app.controllers.bebida;
       
    app.post('/adicionar_bebida', controllerBebida.adicionar_bebida);
   
    app.get('/listar_bebidas', controllerBebida.listar_bebidas);
    app.get('/bebidas', controllerBebida.bebidas);   
    
    app.put('/bebida/atualizar', controllerBebida.atualizar_bebida);
    app.delete('/bebida/:id', controllerBebida.deletar_bebida);   
    
}
