import React, { useEffect, useState } from 'react'
import { Avatar, Group, Panel, PanelHeader, PanelProps, SimpleCell,Input ,Button} from '@vkontakte/vkui'
import {
  Icon28ChevronRightOutline,
  Icon28FavoriteCircleFillYellow,
  Icon28Notifications
} from '@vkontakte/icons'
import { UserInfo } from '@vkontakte/vk-bridge'
import { useAtomValue } from '@mntm/precoil'
import { vkUserAtom } from '../store'
import { setDoneSnackbar, setErrorSnackbar } from '../hooks'
import { push } from '@cteamdev/router'
import { useRecomendation } from '../store/store1'
import bridge from '@vkontakte/vk-bridge';
import  './Home.css'

export const Home: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const vkUser: UserInfo = useAtomValue(vkUserAtom)
  const [conditionValue,setContditionValue] = useState(false)


  function izbranoe(){
    bridge.send('VKWebAppAddToFavorites')
  .then((data) => { 
    if (data.result) {
      // Мини-приложение или игра добавлены в избранное
      izbranSwitch()
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
  }

  function podiskaUvedomlenie(){
    bridge.send('VKWebAppAllowNotifications')
  .then((data) => { 
    if (data.result) {
      // Разрешение на отправку уведомлений мини-приложением или игрой получено
      uvedomlenieSwitch()
    } else {
      // Ошибка
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  let condition
  function updateOnlineStatus(event:any) {
   condition = navigator.onLine ? "online" : "offline";
  // document.body.className = condition;
  console.log(condition);
  if (condition === 'offline'){
    setContditionValue(true)
  }
  if (condition === 'online'){
    setContditionValue(false)
  }
  
}

  const izbranProverka =  useRecomendation((state:any)=>state.izbranoe)
  const izbranSwitch = useRecomendation((state:any)=>state.setIzbranoe)

  const uvedomlenieProverka = useRecomendation((state:any)=>state.uvedomlenie)
  const uvedomlenieSwitch = useRecomendation((state:any)=>state.setUvedomlenie)



  return (
    <div className='cont'>
    <Panel nav={nav}>
      <PanelHeader>Главная</PanelHeader>
      <Group>
        <SimpleCell
          before={
            <Avatar size={72} src={vkUser.photo_200} />
          }
          description=''
        >
         Приветствую, {vkUser.first_name} {vkUser.last_name}!
        </SimpleCell>
      </Group>


      <Group>
        <SimpleCell
          before={<img className='img img1' src='https://i.ibb.co/vvGHHDs/calendar-1.png' />}
          after={<Icon28ChevronRightOutline />}
          onClick={() => push('/day')}
        >
          <div className='textMen textMen1'>Приметы по <br></br> дням недели</div>
        </SimpleCell>
      </Group>

      <Group>
        <SimpleCell
          before={<img className='img' src='https://i.ibb.co/zXBdCQN/book.png'/>}
          after={<Icon28ChevronRightOutline />}
          onClick={() => push('/persik')}
        >
          <div className='textMen'>Приметы по<br></br>ключевым словам</div>
        </SimpleCell>
      </Group>

      {izbranProverka===false&&<Group onClick={izbranoe}>
        <SimpleCell
          before={<Icon28FavoriteCircleFillYellow />}
          onClick={() =>{
          }}
        >
          Добавьте приложение в избранное!
        </SimpleCell>
      </Group>}

      {uvedomlenieProverka===false&&<Group onClick={podiskaUvedomlenie}>
        <SimpleCell
          before={<Icon28Notifications />}
          onClick={() =>{
          }}
        >
          Подпишитесь на уведомления!
        </SimpleCell>
      </Group>}
      {conditionValue && <p className ='red1'>Потеряна связь с интернетом</p>}
      
    </Panel>
    </div>
  )
}
