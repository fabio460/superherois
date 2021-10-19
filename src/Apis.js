
const APIs = {
   herois:async(inicio=1,fim=25)=>{
    var list = [];
    for(let id=inicio;id<fim;id++){
      const r = await fetch(`https://www.superheroapi.com/api.php/4627978217268889/${id}/`)
      const j = await r.json();
      list.push(j) 
      
    } 
    return list;
   },
   search:async(nome)=>{
     let f= await fetch(`https://www.superheroapi.com/api.php/4627978217268889/search/${nome}`)
     let j =await f.json();
     return j
   },
   All:async (id)=>{
    let f= await fetch(`https://www.superheroapi.com/api.php/4627978217268889/${id}/`)
    let j =await f.json();
    return j
   },
   heroi:async(id)=>{
    const r = await fetch(`https://www.superheroapi.com/api.php/4627978217268889/${id}/`)
    const j = await r.json();
    return j; 
   },
   race:async(inicio=1,fim=25)=>{
    var list = [];
    for(let id=inicio;id<fim;id++){
      const r = await fetch(`https://www.superheroapi.com/api.php/4627978217268889/${id}/`)
      const j = await r.json();
      list.push(j) 
      
    } 
    return list;
   }
}
export default APIs;