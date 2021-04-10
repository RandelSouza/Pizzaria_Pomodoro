module.exports = (app) => {
    var controller = app.controllers.bebida;
       
    app.post('/adicionar_bebida', controller.adicionar_bebida);
   
    app.get('/listar_bebidas', controller.listar_bebidas);
    app.get('/bebidas', controller.bebidas);   
    
    app.put('/bebida/atualizar', controller.atualizar_bebida);
    app.delete('/bebida/:id', controller.deletar_bebida);   
    
}
