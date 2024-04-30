import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const [fase,setFase] =useState('b1')
    const [isMouseNear, setIsMouseNear] = useState(false);
  
    function mudarButao(fase){
       
        if(fase=='b1'){
            setFase('b2')
        }else if(fase==='b2'){
            setFase('b3')
        }else if(fase==='b3'){
            setFase('b4')
        }else if(fase==='b4'){
            setFase('b1')
        }

    }
    function ir(){
        navigate("/Culto")
    }
    const handleMouseEnter = () => {
        setIsMouseNear(true);
        mudarButao(fase)
        // Adicione aqui o código que deseja executar quando o mouse estiver próximo
    };
       // Função para desativar quando o mouse sair da proximidade
    const handleMouseLeave = () => {
    setIsMouseNear(false);
    };
    return (
        <div className="body">
           
            <p>Você planeja comparecer ao culto jovem no sábado?</p>
            <div>
            <button  onClick={ir} className="b1">SIM </button>
            <button  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>mudarButao(fase)} className={fase}>NÃO </button>
            </div>
            
        </div>
     
    );
  }


  export default Home;
