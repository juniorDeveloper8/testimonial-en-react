import './App.css'
import { useState } from 'react';
import { Testimonial } from './pages/Testimonial';
import { Button } from './components/Button';
import kage from './img/kage.png';
import isekai from './img/isekai.png';
import shinka from './img/shinka.png';

function App() {

  const [theme, setTheme] = useState('light');
  
  function onClickFn(){
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  return (
    <div className={'main_container ' + theme} >

    <Button  
    onClickFn={onClickFn}
    /* OPERADOR TERNARIO */
    value={theme == 'dark' ? 'light' : 'dark'}
    />

      <Testimonial
        image={kage}
        name="kage no jirutsha"
        starts="⭐⭐⭐⭐⭐"
        text="Grandes héroes y diabólicos villanos son el tipo de personajes que la gente anhela ser,
      pero este no es el caso de Cid Kagenou. Él aspira a convertirse en la mente maestra detrás de todo,
      moviendo los hilos y haciendo que sus maquinaciones impulsen toda la historia."
      />
      <Testimonial
        image={isekai}
        name="isekai nombiri"
        starts="⭐⭐⭐⭐⭐"
        text="Habiendo muerto por una enfermedad a los 39 años, Machio Hiraku tiene la oportunidad 
      de renacer en otro mundo. Cuando Dios le pregunta cuál es su deseo con la intención de darle 
      fuerzas, solicita tener un cuerpo sano esta vez."
      />
      <Testimonial
        image={shinka}
        name="shiranai"
        starts="⭐⭐⭐⭐⭐"
        text="Hiiragi Seiichi es un feo, repugnante, sucio y maloliente gordo; o al menos estos
         son los insultos que ha escuchado durante toda su vida. Así era su vida diaria escolar 
         de acoso, y luego, por alguna razón, un día cuando terminaron las clases, una voz que 
         decía ser un Dios "
      />

    </div>
  )
}

export default App;

