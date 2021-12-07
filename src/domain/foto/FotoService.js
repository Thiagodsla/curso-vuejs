export default class FotoService {
  constructor(teste){
    this._trem = teste ('v1/fotos{/id}')
  }
  lista (){
    return this._trem
    .query()
    .then(res => res.json(), err => {
        console.log(err);
        throw new Error('Não foi possível obter as fotos');
    })
    
  }
   cadastra (foto){
     if(foto._id){
       return this._trem
        .update({id: foto._id}, foto)
     }else{
       return this._trem
       .save(foto)
     }
  }
  apaga (id){
    return this._trem
      .delete({id})
      .then(null, err=> {
        console.log(err);
        throw new Error ('Não foi possível remover a foto.');
      })
  }
  busca(id){
    return this._trem
    .get({id})
    .then(res => res.json())
  }
}