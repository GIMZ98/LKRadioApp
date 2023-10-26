import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { Howl } from 'howler';

const ChannelLIst = () => {
  const [playing, setPlaying] = useState(false)
  const [event, setEvent] = useState(undefined)
  const [sound, setSound] = useState()



  const playClick = (_event) => {
    // if(sound!=undefined){
    //     sound.pause()
    // }
    setEvent(_event);

    if($(_event.target).text()=='▶️'){
        setPlaying(true)
        console.log("start")
    }

    if($(_event.target).text()=='⏹️'){
        setPlaying(false)
        if(sound!=undefined){
          sound.pause()
        }
        // $(event.target).text('')
        $(event.target).text('▶️')
        console.log("pause")
    }
    //$(event.target).text('⏹️')
    //console.log("SLBC clicked")
    const sound_ = new Howl({
        src: [import.meta.env.VITE_SLBC_URI],
        html5: true,
    });
    //console.log('sound', sound_)
    //console.log('event', _event.target.className)
    setSound(sound_)
  }

  const stopClick = async () => {
    console.log("SLBC_P clicked")
    console.log('sound: ', sou)
    sound.pause()
  }

  useEffect(() => {
    if(sound!=undefined){
        if(playing){
            sound.play()
            console.log("start")
        }
        if(!playing){
            sound.pause()
            console.log("paused")
        }
    }

  }, [sound])

  useEffect(() => {
    if(playing && (event!=undefined)){
        $('button').text('▶️')
        //console.log('useEffect got event: ', event)
        $(event.target).text('⏹️')
    }
  }, [event])
  

  return (
    <>
      <div className='flex flex-wrap items-center justify-center max-w-screen min-h-screen bg-blue-500 m-[20px]'>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SITHA' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='HIRU' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='LAKVIRU' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='RAN' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SIRASA' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SRI' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='YFM' className='px-[2px] py-[2px] bg-slate-0 text-2xl'>▶️</button>
        </div>
        
       
      </div>


    </>
  )
}

export default ChannelLIst