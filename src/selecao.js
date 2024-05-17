import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Selecao() {
    
    const navigate = useNavigate();
    const adver =['luciano.jpeg','karol.jpeg','rr.jpeg','kamylly.jpeg','samuca.jpeg','samuel.jpeg']
    const [isMouseNear, setIsMouseNear] = useState(false);
    const [nome,setNome] =useState('')
    const [rad,setRad]=useState(0)
    const [recebido,setRecebido] =useState(0)
    const [dado,setDado] =useState(0)
    const [vida,setVida] =useState(1000)
    const [fase,setFase] =useState(0)
    const [vidaInimigo,setVidaInimigo] =useState(1000)
    const [jogo,setJogo] =useState(true)
    const [cor,setCor] =useState('inimigo2')
    const [congelado,setCongelado] =useState(false)
    const [envenenamento,setEnvenenamento]= useState(false)
    const [gen,setGen]= useState(false)
    const [contG,setContG] =useState(0)
    const [contV,setContV] =useState(0)
    const [cont,setCont] =useState(0)
    const [imgg,setImgg] =useState('')
    const [moeda,setMoeda] =useState('')
    const [animGolpe,setAnimGolpe] =useState('')
    const monitor=['recebeu :'+recebido+' de prejuízo. teste1','recebeu:'+recebido+'de prejuízo. teste2','recebeu:'+recebido+'de prejuízo. teste3']
    const [texto,setTexto] =useState('')
    const ab=['Paralisa o adversário por 3 rodadas','Envenena o adversário por 3 rodadas causando 30 de prejuízo','Joga uma moeda para cima e tem 50% de chance de curar 200 de vida sua ou 50 de vida do adversário','Fica 10 rodadas recebendo apenas a metade do prejuizo']
  
    function escolher(nome,img,tex){
       
        setNome(nome)
        setImgg(img)
        setJogo(false)
        setTexto(tex)
        if(nome=="kamylly"){
            setCor('kamyllyEspecial')
            
        }

    }
    function atacar(){
        if(rad>0){
            setRad(rad-1)
        }
        if(vida==0){
            alert('derrota')
            window.location.reload()
        }else if(vidaInimigo==0){
            if(fase ==5){
                alert('vitoria')
                window.location.reload()
            }else{
                setVidaInimigo(1000)
                setFase(fase+1)
                return
            }
            
        }
        setAnimGolpe('line')

        if(contG==0){
            setCongelado(false)
        }else if(contG<=4){
            setCongelado(false)
            setContG(contG-1)
           
        }
        if(contV==0){
            setEnvenenamento(false)
        }
        if(cont==0){
            setGen(false)
        }
        if(envenenamento==false){
            const novaVida = vidaInimigo - 50;
            setVidaInimigo(Math.max(0, novaVida))
            setDado(50)
        }else{
            const novaVida = vidaInimigo - 80;
            setVidaInimigo(Math.max(0, novaVida))
            setContV(contV-1)
            setDado(80)
        }
        if(gen){
        const numeroAleatorioEntre0e9 = Math.floor(Math.random() * 10) 
        const golpes =[10,15,17,22,25,30,35,42,45,52]
        setVida(Math.max(0,vida-golpes[numeroAleatorioEntre0e9] ))
        setRecebido(golpes[numeroAleatorioEntre0e9])
        setCont(cont-1)
        }else if(congelado==false){
        const numeroAleatorioEntre0e9 = Math.floor(Math.random() * 10) 
        const golpes =[20,30,35,45,50,60,70,85,90,105]
        setVida(Math.max(0,vida-golpes[numeroAleatorioEntre0e9] ))
        setRecebido(golpes[numeroAleatorioEntre0e9])   
        }else{
            setRecebido(0) 
            setContG(contG-1)
            
        }
        setTimeout(function() {
            setAnimGolpe('')
          }, 550);
        
    }
    function curar(){
        if(rad>0){
            setRad(rad-1)
        }
        if(vida==0){
            alert('derrota')
            window.location.reload()
        }else if(vidaInimigo==0){
            if(fase ==5){
                alert('vitoria')
                window.location.reload()
            }else{
                setVidaInimigo(1000)
                setFase(fase+1)
                return
            }
            
        }
        if(contG==0){
            setCongelado(false) 
        }else if(contG<=4){
            setCongelado(false)
            setContG(contG-1)
           
        }
        if(contV==0){
            setEnvenenamento(false)
        }
        if(cont==0){
            setGen(false)
        }
        if(envenenamento){
            const novaVida = vidaInimigo - 30;
            setVidaInimigo(Math.max(0, novaVida))
            setDado(30)
            setContV(contV-1)
        }

        if(gen){
            const novaVidaAumentada = Math.min(1000, vida + 50);
            const numeroAleatorioEntre0e9 = Math.floor(Math.random() * 10)
            const golpes =[10,12,17,20,25,27,30,37,40,47]
            const dano = golpes[numeroAleatorioEntre0e9]
            const novaVida2 =  novaVidaAumentada-dano
            setVida(Math.max(0, novaVida2))
            setRecebido(dano)
            setDado(0)
            setCont(cont-1)

        }else if(congelado==false ){
            const novaVidaAumentada = Math.min(1000, vida + 50);
            const numeroAleatorioEntre0e9 = Math.floor(Math.random() * 10)
            const golpes =[20,25,35,40,50,55,60,75,80,95]
            const dano = golpes[numeroAleatorioEntre0e9]
            const novaVida2 =  novaVidaAumentada-dano
            setVida(Math.max(0, novaVida2))
            setRecebido(dano)
            if(envenenamento ==false){
                setDado(0)
            }
            
        }else if(congelado==true){
            
            setRecebido(0) 
           
            const novaVidaAumentada = Math.min(1000, vida + 50);
            setVida(novaVidaAumentada)
            setContG(contG-1)

        }
        

    }
    function especial(nome){
        if(rad>0){
            setRad(rad-1)
        }
        if(vida==0){
            alert('derrota')
            window.location.reload()
        }else if(vidaInimigo==0){
            if(fase ==5){
                alert('vitoria')
                window.location.reload()
            }else{
                setVidaInimigo(1000)
                setFase(fase+1)
                return
            }
            
        }
        if(nome=='luciano'){
            setCor('inimigo2')
            setAnimGolpe('linel')
            setContG(6)
            setDado(0)
            setRecebido(0)
            setTimeout(function() {
                setAnimGolpe('')
                setCongelado(true)
            }, 550);
            
            

        }else if(nome=='karol'){
            setAnimGolpe('linek')
            setContV(3)
            
            const novaVida = vidaInimigo - 30;
            setVidaInimigo(Math.max(0, novaVida))
            setDado(30)
            const numeroAleatorioEntre0e9 = Math.floor(Math.random() * 10) 
            const golpes =[20,30,35,45,50,60,70,85,90,105]
            setVida(Math.max(0,vida-golpes[numeroAleatorioEntre0e9] ))
            setRecebido(golpes[numeroAleatorioEntre0e9]) 
            setTimeout(function() {
                setAnimGolpe('')
                setEnvenenamento(true)
              }, 550);

            
        }else if(nome=='kamylly'){
            setCor('kamyllyEspecial')
            setGen(true)
            setCont(10)
            const numeroAleatorioEntre0e9 = Math.floor(Math.random() * 10) 
            const golpes =[20,30,35,45,50,60,70,85,90,105]
            setVida(Math.max(0,vida-golpes[numeroAleatorioEntre0e9] ))
            setRecebido(golpes[numeroAleatorioEntre0e9]) 
            setDado(0)
           
        }else{
            setMoeda('coin')
            const sorte = Math.floor(Math.random() * 2)
            const op=['vc','ele']
            if(op[sorte]=='vc'){
                setVida(Math.min(1000, vida+200))
                setDado(0)
                setRecebido(0)
            }else{
                setVidaInimigo(Math.min(1000, vidaInimigo+50))
                setDado(0)
                setRecebido(0)
            }
            setTimeout(function() {
                setMoeda('')
              }, 1000);
        }

    }
    function sorte(){
        let sorte = Math.floor(Math.random() * 4)
     
        const atks=['luciano','karol','rr','kamylly']
       
        if(atks[sorte]==nome){
            if(nome=='luciano'){
                sorte=sorte+1         
            }else{
                sorte=sorte-1
            }
        }
        setRad(10)
        if(atks[sorte]=='kamylly'){
            setCor('kamyllyEspecial')
        }
        especial(atks[sorte])
    }
       // Função para desativar quando o mouse sair da proximidade
    
    
      // Calcula a largura da barra de progresso com base no número atual
      const largura = (vida / 1000) * 100 + '%'; // Limita a largura entre 0% e 100%
      const largura2 = (vidaInimigo / 1000) * 100 + '%'; 
    
    return (
        <div className="body">
           
            <div className={jogo ? 'selecao': 'none'}>
                <div className='caixaSel' onClick={()=>escolher('luciano','luciano2.jpeg',ab[0])}>
                    <img className='image' src="luciano2.jpeg"></img>
                    <div>
                        <p>
                            Luciano
                        </p>
                    </div>

                </div>
                <div className='caixaSel'onClick={()=>escolher('karol','karol2.jpeg',ab[1])} >
                    <img className='image' src="karol2.jpeg"></img>
                    <div>
                        <p>
                            Karoll
                        </p>
                    </div>

                </div>
                <div className='caixaSel'onClick={()=>escolher('renan','rr.jpeg',ab[2])} >
                    <img className='image' src="rr.jpeg"></img>
                    <div>
                        <p>
                            Renan
                        </p>
                    </div>

                </div>
                <div className='caixaSel'onClick={()=>escolher('kamylly','kamylly.jpeg',ab[3])} >
                    <img className='image' src="kamylly.jpeg"></img>
                    <div>
                        <p>
                        kamylly
                        </p>
                    </div>

                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','samuca.jpeg',ab[0])} >
                    <img className='image' src="samuca.jpeg"></img>
                    <div>
                        <p>
                            Samuca
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('renan','samuel.jpeg',ab[2])} >
                    <img className='image' src="samuel.jpeg"></img>
                    <div>
                        <p>
                            Samuel T
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('karol','elza.jpeg',ab[1])} >
                    <img className='image' src="elza.jpeg"></img>
                    <div>
                        <p>
                            Elza
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('karol','victor.jpeg',ab[1])} >
                    <img className='image' src="victor.jpeg"></img>
                    <div>
                        <p>
                            Victor Hugo
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('kamylly','fortnite.jpeg',ab[3])} >
                    <img className='image' src="fortnite.jpeg"></img>
                    <div>
                        <p>
                            Vectra
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('karol','Rebeca.jpeg',ab[1])} >
                    <img className='image' src="Rebeca.jpeg"></img>
                    <div>
                        <p>
                            Rebeca
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','julia.jpeg',ab[0])} >
                    <img className='image' src="julia.jpeg"></img>
                    <div>
                        <p>
                            Julia
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','livia.jpeg',ab[0])} >
                    <img className='image' src="livia.jpeg"></img>
                    <div>
                        <p>
                            Livia
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','sara.jpeg',ab[0])} >
                    <img className='image' src="sara.jpeg"></img>
                    <div>
                        <p>
                            Sara
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','Nicolas.jpeg',ab[0])} >
                    <img className='image' src="Nicolas.jpeg"></img>
                    <div>
                        <p>
                            Nicolas
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','caique.jpeg',ab[0])} >
                    <img className='image' src="caique.jpeg"></img>
                    <div>
                        <p>
                            Caique
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','calebe.jpeg',ab[0])} >
                    <img className='image' src="calebe.jpeg"></img>
                    <div>
                        <p>
                            Calebe
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','gelado.jpeg',ab[0])} >
                    <img className='image' src="gelado.jpeg"></img>
                    <div>
                        <p>
                            Gelado
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','eduarda.jpeg',ab[0])} >
                    <img className='image' src="eduarda.jpeg"></img>
                    <div>
                        <p>
                            Eduarda
                        </p>
                    </div>
                </div>
                <div className='caixaSel'onClick={()=>escolher('luciano','bernardo.jpeg',ab[0])} >
                    <img className='image' src="bernardo.jpeg"></img>
                    <div>
                        <p>
                            Bernardo
                        </p>
                    </div>
                </div>


               

            </div>
            <div className={jogo ? 'none': 'game'}>
                <div className='placar'>
                    
                    <div className='vida' >
                    <img className='image' src={imgg}></img>
                        VIDA: {vida}
                        <div className="barra">
                            <div className="progresso" style={{ width: largura }}></div>
                        </div>
                        Prejuízo : {recebido}
                    </div>
                    <div class={animGolpe}></div>

                    <div className={gen || congelado ? cor:'inimigo'}  style={ { border: envenenamento?'4px solid purple':'' }} >
                        <img className='image' src={adver[fase]}></img>
                        INIMIGO: {vidaInimigo}
                        <div className="barra">
                            <div className="progresso2" style={{ width: largura2 }}></div>
                        </div>
                        Prejuízo : {dado}
                    </div>
                </div>
                <div class={moeda}></div>
                <div className='monitor'>{recebido<=30 ? monitor[0]:recebido<=60 ? monitor[1]:monitor[2]}</div>
                <div className={moeda =="coin" || animGolpe !='' ? 'none':''}>
                    <div className='bot'>
                        <button className='botao' onClick={atacar}> Atacar</button>
                        <p>Causa 50 de prejuízo ao adversário</p>
                    </div>
                    <div className='bot'>
                        <button className='botao' onClick={curar}> curar</button>
                        <p>Cura 50 dos seus pontos de vida</p>
                    </div>
                    <div className={gen==true || envenenamento == true || contG>0 ?'none':'bot2'}>
                        <button onClick={()=>{especial(nome)}}  className={ gen==true ||envenenamento == true || contG>0 ?'none':'especial'} >Especial</button>
                        <p>{texto}</p>
                    </div>
                    <div className={rad>0 ?'none':'bot2'}>
                        <button onClick={()=>{sorte()}}  className={ rad>0 ?'none':'sorte'} >Sorte</button>
                        <p> Use uma habilidade aleatória. Depois do uso ela ficará indisponivel por 10 turnos</p>
                    </div>
                </div>
                
                
            </div>
            
        </div>
     
    );
  }


  export default Selecao;