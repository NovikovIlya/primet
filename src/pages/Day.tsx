import React,{useEffect, useState} from 'react'
import {
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  PanelProps,
  Input,
  Button
} from '@vkontakte/vkui'
import persikImage from '../assets/persik.png'
import { back } from '@cteamdev/router'
import { useReclama } from '../store/store'
import bridge from '@vkontakte/vk-bridge';
import  './Home.css'
import { useAtomValue } from '@mntm/precoil'
import { vkUserAtom } from '../store'

interface IdataPrimetaZavtra{
  text?:Iitem;
}


interface Iitem{
  text?:string
}

export const Day: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  bridge.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })
  .then((data) => {
    if (data.result) {
    } else {
      console.log('Рекламные материалы не найдены.');
    }
  })
  .catch((error) => { console.log(error); /* Ошибка */  });

  const vkUser: UserInfo = useAtomValue(vkUserAtom)

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
  const switchReclama = useReclama((state:any)=>state.setPokazReclami1)
  const itemReclama = useReclama((state:any)=>state.pokazReclami1)
 
  useEffect(()=>{
    if (itemReclama === false){
      setZagryzka1(true)
      setTimeout(fooButtonClick,1000)
      setTimeout(menyamZagr,3000)
    } 
    switchReclama()
  },[])

  const menyamZagr = ()=>{
    setZagryzka1(false)
  }


  const initialState = [{}]
  const [dataPrimeta,setDataPrimeta] = useState<IdataPrimetaZavtra>()
  const [dataPrimetaZavtra,setDataPrimetaZavtra] = useState<IdataPrimetaZavtra>()
  const [textInput,setTextInput] = useState('')
  const [left,setLeft] = useState(true)
  const [zagryzka1,setZagryzka1] = useState(false)
  const [error,setError] = useState(false)
 
  useEffect(()=>{
    setLeft(true)
    async function heh(){
      try {
        let date = new Date()
        const dayNedeli = date.getDay()
        console.log('sdsd',dayNedeli);
        console.log(textInput);
        if (dayNedeli === 0){
          let textCorrect = 'voskresene'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimeta(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
       }
        if (dayNedeli === 1){
          let textCorrect = 'ponedelnik'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimeta(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
      }
        if (dayNedeli === 2){
          let textCorrect = 'vtornik'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimeta(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
      }
        if (dayNedeli === 3){
          let textCorrect = 'sreda'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimeta(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
      }
        if (dayNedeli === 4){
          let textCorrect = 'chetverg'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimeta(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
       }
        if (dayNedeli === 5){
          let textCorrect = 'pyatnica'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimeta(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
       }
        if (dayNedeli === 6){
          let textCorrect = 'subbota'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimeta(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (itemReclama === true){
          setZagryzka1(false)
        }
        
        setError(false)

      } catch (error) {

        setZagryzka1(false)
        setError(true)
        
      }
    }
    heh()
  },[])

  useEffect(()=>{
    setLeft(true)
    async function heh(){
      try {
        setZagryzka1(true)
        let date = new Date()
        const dayNedeli = date.getDay() + 1;
        console.log('sdsdZavtra',dayNedeli);
        console.log(textInput);
        if (dayNedeli === 0){
          let textCorrect = 'voskresene'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimetaZavtra(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (dayNedeli === 1){
          let textCorrect = 'ponedelnik'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimetaZavtra(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (dayNedeli === 2){
          let textCorrect = 'vtornik'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimetaZavtra(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (dayNedeli === 3){
          let textCorrect = 'sreda'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimetaZavtra(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (dayNedeli === 4){
          let textCorrect = 'chetverg'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimetaZavtra(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (dayNedeli === 5){
          let textCorrect = 'pyatnica'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimetaZavtra(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (dayNedeli === 6){
          let textCorrect = 'subbota'
          const response = await fetch(`https://atoma-horoscope.onrender.com/omens_by_word/${textCorrect}/`); 
          const result = await response.json(); 
          console.log(result);
          setDataPrimetaZavtra(result)
          console.log(result);
          console.log('zzz', dataPrimeta);
        }
        if (itemReclama === true){
          setZagryzka1(false)
        }
        setError(false)
      } catch (error) {
        setZagryzka1(false)
        setError(true)
      }

    }
    heh()
  },[])

  function wallPost(){
    bridge.send('VKWebAppShowWallPostBox', {
        message: 'Я узнал приметы на сегодня! Хочешь узнать больше о народных поверьях? Тогда переходи скорее! \n'   +   'https://vk.com/app51632619_70033480' , 
        attachment: 'https://vk.com/app51632619_70033480',
        owner_id: vkUser.id
      })
      .then( (data) => {
        // Запись отправлена на стену
        console.log(`Идентификатор записи: ${data.post_id}`);
      })
      .catch( (e) => {
        console.log("Ошибка!", e);
      })
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
      if (converter[word[i]] == undefined) {
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
        Приметы на день
      </PanelHeader>
      {zagryzka1===true&&
        <div className='zagzag'>
              <p className='pZagr'>Идет загрузка...</p> 
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      }
      {zagryzka1===false&&<Group>

        <div className='dayButton'>
          <Button onClick={()=>{
            setLeft(true)
          }}  className={`dayButtonLeft ${left? 'red': ''}`} >Сегодня</Button>
          <Button onClick={()=>{
            setLeft(false)
          }} className={` dayButtonRight ${left? '': 'red'}`}>Завтра</Button>
        </div>

        <div className={`${left? '' : 'zero'}`}>
          {dataPrimeta !== undefined && 
          dataPrimeta.map((item:any)=>{
            return <p className='Ptext'>{item.text}</p>  
          })}
        </div>

        <div className={`${left? 'zero' : ''}`}>
          {dataPrimetaZavtra !== undefined && 
          dataPrimetaZavtra.map((item:any)=>{
            return <p className='Ptext'>{item.text}</p>
          })}
        </div>
        <div className='stena'>
          <Button onClick={wallPost}>Опубликовать на стене!</Button>
        </div>
      </Group>}

      {error===true&&
      <div className='errorStyle'>
        <p>Произошла ошибка. Попробуйте позднее</p>
      </div>}

      
    </Panel>
  )
}
