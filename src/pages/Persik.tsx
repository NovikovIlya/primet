import React,{useEffect, useState} from 'react'
import {Icon28ErrorCircleOutline,Icon28ChevronRightOutline} from '@vkontakte/icons'
import {
  Snackbar,
  SimpleCell,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  PanelProps,
  Input,
  Button,
  Title
} from '@vkontakte/vkui'
import { back } from '@cteamdev/router'
import  './Home.css'
import { useReclama } from '../store/store'
import bridge from '@vkontakte/vk-bridge';

interface Idata{
  id:number;
  name:string;
  text:string;
}

export const Persik: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  bridge.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })
  .then((data) => {
    if (data.result) {
    } else {
      console.log('Рекламные материалы не найдены.');
    }
  })
  .catch((error) => { console.log(error); /* Ошибка */  });

  function fooButtonClick(){
  // Показать рекламу
  bridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
    .then((data) => {
      if (data.result) // Успех
        console.log('Реклама показана');
      else // Ошибка 
        console.log('Ошибка при показе');
    })
    .catch((error) => { console.log(error); /* Ошибка */ });
  }
  const switchReclama = useReclama((state:any)=>state.setPokazReclami)
  const itemReclama = useReclama((state:any)=>state.pokazReclami)
  useEffect(()=>{

    if (itemReclama === false){
      setZagryzka(true)
      setTimeout(fooButtonClick,1000)
      setTimeout(menyamZagr,3000)
    }
    
    
    switchReclama()

  },[])
  const menyamZagr = ()=>{
    setZagryzka(false)
  }
  const initialState = [{
    // id:123,
    // name:'assa',
    // text:'asdas'
  }]
  const [dataPrimeta,setDataPrimeta] = useState<Idata[]>('')
  const [textInput,setTextInput] = useState('')
  const [neNaiden,setNenaider] = useState('')
  const [dataAlphabit,setDataAlphabit] = useState('')
  const [left,setLeft] = useState(true)
  const [zagryzka,setZagryzka] = useState(false)
  const [error,setError] = useState(false)
  const [text, setText] = React.useState('');
  const [snackbar, setSnackbar] = React.useState(null);
 

  const handleInputChange = (event:any)=>{
    const text = event.target.value
    const textCorrect = text.trim()
    setTextInput(textCorrect)
  }

  const handleButton = ()=>{
    async function heh(){
      try {
        setZagryzka(true)
        console.log(translit('privet'));
        console.log(textInput);
        const textCorrect = translit(textInput)
        const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
        const result = await response.json(); 
        setNenaider(result)
        console.log('resres',neNaiden);
        
        console.log('res',result);
        setDataPrimeta(result)
        console.log(result);
        console.log('zzz', dataPrimeta);
        setZagryzka(false)
        setError(false)
      } catch (error) {
        setZagryzka(false)
        setError(true)
      } 
    }
    heh()
  }
  const openError = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        before={<Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />}
      >
        Введен неккоректный текст - спецсимвол. Ввод только на кириллице.
      </Snackbar>,
    );
  };

  const handleAlphabit = (event:any)=>{
    async function mde(){
      try {
        setZagryzka(true)
        const text3 = event.target.dataset.id
        const text2 = event.id
        console.log('text222',text2);
        console.log('text222',text3);
        
        const text = event.target.innerText
        console.log('text',text);
        const textTranslit = translit(text).toLowerCase()
        console.log('trans',textTranslit);
        const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_letter/${textTranslit}/`)
        const result = await response.json();
        console.log('result',result);
        setDataAlphabit(result)
        console.log(result);
        setZagryzka(false)
        setError(false)
      } catch (error) {
        setZagryzka(false)
        setError(true)
      }
    }
    mde()
  }

  const handleClick = (event:any) =>{
    const clickPrimeta = event.target.innerText
    const clickPrimetaTranslite = translit(clickPrimeta)
    async function hehe(){
      try {
        setZagryzka(true)
        const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${clickPrimetaTranslite}/`); 
        const result = await response.json(); 
  
        setNenaider(result)
        console.log('res',result);
        setDataPrimeta(result)
        setLeft(false)
        setTextInput('')
        console.log('ss',textInput);
        setZagryzka(false)
        setError(false)
      } catch (error) {
        setZagryzka(false)
        setError(true)
      }
    }
    hehe()
    
  }
  
  function translit(word:string){
    var answer = '';
    var converter = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
      'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
      'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
      'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
      'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
      'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
      'э': 'e',    'ю': 'yu',   'я': 'ya',
   
      'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
      'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
      'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
      'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
      'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
      'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
      'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };
   
    for (var i = 0; i < word.length; ++i ) {
      if (converter[word[i]] == undefined){
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }
   
    return answer;
  }

  return (
    <Panel nav={nav}>
      <PanelHeader
        left={<PanelHeaderBack onClick={back} />}
      >
        Приметы по словам
      </PanelHeader>
      {zagryzka===true&&
        <div className='zagzag'>
              <p className='pZagr'>Идет загрузка...</p> 
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      }
      <button onClick={()=>{
        openError()
        alert('тыык')
      }}>тыкни</button>
            <button onClick={openError}>Тяк</button>

      {zagryzka===false&&<Group>
        <div className='dayButton'>
          <Button onClick={()=>{
            setLeft(true)
          }}  className={` dayButtonLeft ${left? 'red': ''}`} >Алфавит</Button>
          <Button onClick={()=>{
            setLeft(false)
          }} className={` dayButtonRight ${left? '': 'red'}`}>Приметы</Button>
        </div>
        <div className={` InputParentParent ${left? 'zero' : ''}`}> 

          <div className='InputParent'>
            <Input className='poiskInput' value={textInput} type='text' placeholder='Введите примету' onChange={handleInputChange} />
            <Button className='poiskButton' onClick={handleButton} >Найти</Button>
          </div>
          <div>
            {neNaiden.detail !== 'Not found'&&
            dataPrimeta.length > 0 && 
            dataPrimeta.map((item)=>{
              console.log(item);
              return <p className='Ptext'>{item.text}</p> 
            })}
          </div>
          <div>
            {neNaiden.detail === 'Not found'&&
            <div className='Pparent'>
              <p>Введеной приметы не найдено</p>
            </div>
            }
          </div>
        </div>


        <div className={` InputParentParent ${left? '' : 'zero'}`}>
          <div className='titleStyle'>
            <Title weight='bold'  level="1">Приметы по алфавиту</Title>
          </div>
          <div className='alphabitParent'>
            <div onClick={handleAlphabit} className='alphabit'>А</div>
            <div onClick={handleAlphabit}  className='alphabit'>Б</div>
            <div onClick={handleAlphabit}  className='alphabit'>В</div>
            <div onClick={handleAlphabit}  className='alphabit'>Г</div>
            <div onClick={handleAlphabit}  className='alphabit'>Д</div>
            <div onClick={handleAlphabit}  className='alphabit'>Е</div>
            <div onClick={handleAlphabit}  className='alphabit'>Ж</div>
            <div onClick={handleAlphabit}  className='alphabit'>З</div>
            <div onClick={handleAlphabit}  className='alphabit'>И</div>
            <div onClick={handleAlphabit}  className='alphabit'>К</div>
            <div onClick={handleAlphabit}  className='alphabit'>Л</div>
            <div onClick={handleAlphabit}  className='alphabit'>М</div>
            <div onClick={handleAlphabit}  className='alphabit'>Н</div>
            <div onClick={handleAlphabit}  className='alphabit'>О</div>
            <div onClick={handleAlphabit}  className='alphabit'>П</div>
            <div onClick={handleAlphabit}  className='alphabit'>Р</div>
            <div onClick={handleAlphabit}  className='alphabit'>С</div>
            <div onClick={handleAlphabit}  className='alphabit'>Т</div>
            <div onClick={handleAlphabit}  className='alphabit'>У</div>
            <div onClick={handleAlphabit}  className='alphabit'>Ф</div>
            <div onClick={handleAlphabit}  className='alphabit'>Х</div>
            <div onClick={handleAlphabit}  className='alphabit'>Ч</div>
            <div onClick={handleAlphabit}  className='alphabit'>Ш</div>
            <div onClick={handleAlphabit}  className='alphabit'>Щ</div>
            <div onClick={handleAlphabit}  className='alphabit'>Я</div>
          </div>
          <div>
            {dataAlphabit.length > 0 && 
            dataAlphabit.map((item:any)=>{
              console.log(item);
              if (item.name !== 'в дороге')
              if (item.name !== 'денежное дерево')
              if (item.name !== 'день рождения')
              if (item.name !== 'дни недели')
              if (item.name !== 'одежда и обувь')
              if (item.name !== 'офисный работник')
              if (item.name !== 'охота и рыбалка')
              if (item.name !== 'животные')
              if (item.name !== 'любовь')
              if (item.name !== 'насекомые')
              if (item.name !== 'о себе')
              if (item.name !== 'птицы')
              if (item.name !== 'синица')
              if (item.name !== 'стол и посуда')
              // <p className=''>{item.link}</p>
              
              return(
                // after={<Icon28ChevronRightOutline />}
              <SimpleCell data-id={item.link} onClick={handleClick} className='simpleStyle'  
                >{item.name} 
              </SimpleCell>
            )})}
          </div>
        </div>
      </Group>}

      {error===true&& neNaiden.detail !== 'Not found'&&
      <div className='errorStyle'>
        <p>Произошла ошибка. Попробуйте позднее</p>
      </div>}

      {text && (
          <Group>
            <Div>{text}</Div>
          </Group>
        )}

        {snackbar}

    </Panel>
  )
}
