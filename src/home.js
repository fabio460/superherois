import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import APIs from "./Apis";
import {useDispatch} from 'react-redux';
import logo from './logo.png';
import github from './github.png';
import loading2 from './loading.gif';
import fundo from './images/fundo.jpg';
function Home(){
   
   const [de,setDe]=useState(1);
   const [para,setPara]=useState(25);
   const [campo,setCampo]=useState();
   const h = useHistory();
   const dispatch = useDispatch(); 
//a função carregar cria as imagens e titulos de cada objeto e renderiza no aside limitado por 'de/ate'
      
   async function carregar(de,ate){
      let l =await APIs.herois(de,ate);
      
      document.querySelector('.heroi').innerHTML=''
      l.forEach((elem)=>{
         let divHeroi = document.querySelector('.heroi');
         let heroi = document.createElement('div');
         let img = document.createElement('img');
         img.setAttribute('src',elem.image.url);
         //montar tela detalhes
         const montarTelaDeDetalhe =async ()=>{
            dispatch({
               type:'yes',
               payload:{cond:true}
            })
            console.log(elem)
            h.push('/detalhes')
            localStorage.setItem('elem',elem);
            const s = (div,conteudo)=>document.querySelector(div).append(conteudo);
            document.querySelector('.name').innerHTML=(`<h1>${elem.name}</h1>`);
            document.querySelector('.img_detalhes').src=elem.image.url;
            s('.gender',elem.appearance.gender)
            s('.race',elem.appearance.race)
            s('.relatives',elem.connections.relatives)
            s('.occupation',elem.work.occupation)
            s('.publisher',elem.biography.publisher)
            s('.alignment',elem.biography.alignment)
         }
         
         img.onclick=montarTelaDeDetalhe;
         let nome = document.createElement('h5');
         nome.innerHTML=elem.id+' - '+elem.name
         heroi.appendChild(nome)
         heroi.appendChild(img)
         divHeroi.appendChild(heroi);
      })
      
   }
  
  async function carregarSearch(campo){
      let l =await APIs.search(campo);
      let lista= l.results;
      if(lista){
         console.log(lista)
         document.querySelector('.heroi').innerHTML=''
         lista.forEach((elem)=>{
            let divHeroi = document.querySelector('.heroi');
            let heroi = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src',elem.image.url);
            //pegar o personagem pelo id
            const montarTelaDeDetalhe =async ()=>{
               dispatch({
                  type:'yes',
                  payload:{cond:true}
               })
               console.log(elem)
               h.push('/detalhes')
               localStorage.setItem('elem',elem);
               const s = (div,conteudo)=>document.querySelector(div).append(conteudo);
               document.querySelector('.name').innerHTML=(`<h1>${elem.name}</h1>`);
               document.querySelector('.img_detalhes').src=elem.image.url;
               s('.gender',elem.appearance.gender)
               s('.race',elem.appearance.race)
               s('.relatives',elem.connections.relatives)
               s('.occupation',elem.work.occupation)
               s('.publisher',elem.biography.publisher)
            }
            img.onclick=montarTelaDeDetalhe;
            let nome = document.createElement('h5');
            nome.innerHTML=elem.id+' - '+elem.name
            heroi.appendChild(nome)
            heroi.appendChild(img)
            divHeroi.appendChild(heroi);
         })
      }
      else{
        document.querySelector('.heroi').innerHTML='<h1>personagem não encontrado</h1>'
      }
   }



   async function race(de,ate,race){
      let l =await APIs.herois(de,ate);
      console.log(race)
      document.querySelector('.heroi').innerHTML=''
      l.forEach((elem)=>{
        
         if(elem.appearance.race===race){
            console.log(elem.appearance.race)
            let divHeroi = document.querySelector('.heroi');
            let heroi = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src',elem.image.url);
            //montar tela detalhes
            const montarTelaDeDetalhe =async ()=>{
               dispatch({
                  type:'yes',
                  payload:{cond:true}
               })
               console.log(elem)
               h.push('/detalhes')
               localStorage.setItem('elem',elem);
               const s = (div,conteudo)=>document.querySelector(div).append(conteudo);
               document.querySelector('.name').innerHTML=(`<h1>${elem.name}</h1>`);
               document.querySelector('.img_detalhes').src=elem.image.url;
               s('.gender',elem.appearance.gender)
               s('.race',elem.appearance.race)
               s('.relatives',elem.connections.relatives)
               s('.occupation',elem.work.occupation)
               s('.publisher',elem.biography.publisher)
               s('.alignment',elem.biography.alignment)
            }
            img.onclick=montarTelaDeDetalhe;
            let nome = document.createElement('h5');
            nome.innerHTML=elem.id+' - '+elem.name
            heroi.appendChild(nome)
            heroi.appendChild(img)
            divHeroi.appendChild(heroi);
         }

      })
      
   }

   const testeRace =(e)=>{
      document.querySelector('.heroi').innerHTML='<h1>carregando ...</h1>';
      setTimeout(() => {
         document.querySelector('.heroi').innerHTML='<h5>Lista grande, aguarde ...</h5>';
      }, 4000);
      setTimeout(() => {
         document.querySelector('.heroi').innerHTML='<h5>So mais um pouco ...</h5>';
      }, 7000);
      race(1,150,e.target.className);
      
   }

// a função useEffect esta atualizando a lista e criando onclick no botão proximo
   useEffect(()=>{
     document.querySelector('.heroi').innerHTML=`<img className='loading' src=${loading2} />`;

     if(campo){
           carregarSearch(campo)
     }
     else{
      carregar();
     }
   })

   
   const proximo = ()=>{
   if(para<731){
         document.querySelector('.heroi').innerHTML='<h1>carregando ...</h1>'
         let d = de+24;
         let p = para+24;
         carregar(d,p)
         setDe(de + 24);
         setPara(para + 24)
      }
   }
   const anterior = ()=>{
      if(de>1){
            document.querySelector('.heroi').innerHTML='<h1>carregando ...</h1>'
            let d = de-24;
            let p = para-24;
            carregar(d,p)
            setDe(d);
            setPara(p)
         }
      }
      document.querySelector('body').style=`background-image: url(${fundo});background-position: center;background-size: cover;`;
   return <>
      <header>
         <h1>Super Herois animes</h1>
         <div className='search'>
            <input value={campo} onChange={e=> setCampo(e.target.value)} placeholder='pesquise o personagem ...'/>
      
         </div>
         <div className='logos'>
            <a href='https://fabio460.github.io/Portifolio/'><img src={logo} alt=''/></a>
            <a href='https://github.com/fabio460'><img src={github} alt=''/></a>
         </div>
      </header>
      <section >
         <nav>
         <div className='testeoNav'>Tipos de super herois </div>
            <ul>
               
               <li className='Human' onClick={testeRace}>Humano</li>
               <li className='Cyborg' onClick={testeRace}>Cyborg</li>
               <li className='Android' onClick={testeRace}>Android</li>
               <li className='Mutant' onClick={testeRace}>Mutant</li>
               <li className='Alien' onClick={testeRace}>Alien</li>
               <li className='Vampire' onClick={testeRace}>Vampire</li>
               <li className='Xenomorph XX121' onClick={testeRace}>Xenomorph XX121</li>
               <li className='God / Eternal' onClick={testeRace}>God / Eternal</li>
               <li className='Symbiote' onClick={testeRace}>Symbiote</li>
               <li className='Neyaphem' onClick={testeRace}>Neyaphem</li>
               <li className='Atlantean' onClick={testeRace}>Atlantean</li>
               <li className='New God' onClick={testeRace}>New God</li>
            </ul>
            <div className='textBottonNav'>Pesquisa de 150 personagens devido a lentidão da api</div>
         </nav>
         <aside>
            <div className='btn_prox_ant'>
               
               <div className='btn_anterior' onClick={anterior}>{'<'} anterior </div>
               <div className='btn_proximo' onClick={proximo}>proximo{'>'}</div>
            </div>
            <div className='bloco_herois'>
              <div className='heroi'></div>
            </div>
         </aside>
      </section>


   </>
}

export default Home;