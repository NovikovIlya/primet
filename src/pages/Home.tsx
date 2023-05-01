import React, { useEffect, useState } from 'react'
import { Avatar, Group, Panel, PanelHeader, PanelProps, SimpleCell,Input ,Button} from '@vkontakte/vkui'
import {
  Icon28BillheadOutline,
  Icon28ChevronRightOutline,
  Icon28CheckCircleOutline,
  Icon28CancelCircleOutline,
  Icon28PawOutline,
  Icon28WarningTriangleOutline,
  Icon28ArticleOutline
} from '@vkontakte/icons'
import { UserInfo } from '@vkontakte/vk-bridge'
import { useAtomValue } from '@mntm/precoil'
import { vkUserAtom } from '../store'
import { setDoneSnackbar, setErrorSnackbar } from '../hooks'
import { push } from '@cteamdev/router'


import  './Home.css'

export const Home: React.FC<PanelProps> = ({ nav }: PanelProps) => {


  // const result = translit(`Умом — Россию не понять`)
  // console.log(result);
  const vkUser: UserInfo = useAtomValue(vkUserAtom)
  const [dataPrimeta,setDataPrimeta] = useState('')
  const [textInput,setTextInput] = useState('')

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
    }
    heh()
  }
  
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
    <div className='cont'>
    <Panel nav={nav}>
      <PanelHeader>Главная</PanelHeader>
      <Group>
        <SimpleCell
          before={
            <Avatar size={72} src={vkUser.photo_200} />
          }
          description='Это же ты!'
        >
          {vkUser.first_name} {vkUser.last_name}
        </SimpleCell>
      </Group>

      {/* <div className='InputParent'>
        <Input type='text' placeholder='Введите примету' onChange={handleInputChange} />
        <Button onClick={handleButton} >Найти</Button>
      </div> */}


      <Group>
        <SimpleCell
          before={<Icon28PawOutline />}
          after={<Icon28ChevronRightOutline />}
          onClick={() => push('/persik')}
        >
          Приметы по словам!
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28PawOutline />}
          after={<Icon28ChevronRightOutline />}
          onClick={() => push('/day')}
        >
          Приметы по дням!
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28BillheadOutline />}
          onClick={() => push('/?modal=modal')}
        >
          Покажи модальную карточку
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28WarningTriangleOutline />}
          onClick={() => push('/?popout=alert')}
        >
          Покажи алерт
        </SimpleCell>
        <SimpleCell
          id='ShowAlert'
          before={<Icon28ArticleOutline />}
          onClick={() => push('/?popout=action-sheet')}
        >
          Покажи список опций
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28CheckCircleOutline />}
          onClick={() => setDoneSnackbar('Это добрый снекбар')}
        >
          Покажи добрый снекбар
        </SimpleCell>
        <SimpleCell
          before={<Icon28CancelCircleOutline />}
          onClick={() => setErrorSnackbar('Это злой снекбар')}
        >
          Покажи злой снекбар
        </SimpleCell>
      </Group>
    </Panel>
    </div>
  )
}
