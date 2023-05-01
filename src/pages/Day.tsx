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

import  './Home.css'

export const Day: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const initialState = [{}]
  const [dataPrimeta,setDataPrimeta] = useState(initialState)
  const [textInput,setTextInput] = useState('')
  const [left,setLeft] = useState(true)
 
  useEffect(()=>{
    setLeft(true)
    async function heh(){
      let date = new Date()
      const dayNedeli = date.getDay()
      console.log('sdsd',dayNedeli);
      console.log(textInput);
      if (dayNedeli === 1){
        let textCorrect = 'ponedelnik'
        const response = await fetch(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/omens/word/${textCorrect}/`); 
        const result = await response.json(); 
        console.log(result);
        setDataPrimeta(result.content.inner_blocks[0].omens_list.omens)
        console.log(result.content.inner_blocks[0].omens_list.omens);
        console.log('zzz', dataPrimeta);
      }
      if (dayNedeli === 2){
        let textCorrect = 'vtornik'
        const response = await fetch(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/omens/word/${textCorrect}/`); 
        const result = await response.json(); 
        console.log(result);
        setDataPrimeta(result.content.inner_blocks[0].omens_list.omens)
        console.log(result.content.inner_blocks[0].omens_list.omens);
        console.log('zzz', dataPrimeta);
      }
         

    
    }
    heh()
  },[])

  const handleInputChange = (event)=>{
    const text = event.target.value
    const textCorrect = text.trim()
    setTextInput(textCorrect)
  }

  const handleButton = ()=>{
    async function heh(){
      console.log(translit('privet'));
      console.log(textInput);
      const textCorrect = translit(textInput)
      const response = await fetch(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/omens/word/${textCorrect}/`); 
      const result = await response.json(); 
      console.log(result);
      setDataPrimeta(result.content.inner_blocks[0].omens_list.omens)
      console.log(result.content.inner_blocks[0].omens_list.omens);
      
      console.log('zzz', dataPrimeta);
      
    }
    heh()
  }
  console.log('zzz',dataPrimeta);
  
  function translit(word){
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
        Приметы на день
      </PanelHeader>
      <Group>

        <div>
          <Button onClick={()=>{
            setLeft(true)
          }} appearance='overlay' className={`${left? 'red': ''}`} >Сегодня</Button>
          <Button onClick={()=>{
            setLeft(false)
          }} className={`${left? '': 'red'}`}>Завтра</Button>
        </div>
        <div>
          {dataPrimeta !== undefined && 
          dataPrimeta.map((item)=>{
        
             console.log(item);
            return <p>{item.text}</p>
             
          })}
        </div>
      </Group>
    </Panel>
  )
}
