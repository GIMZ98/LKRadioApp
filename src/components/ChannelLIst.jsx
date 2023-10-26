import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { Howl } from 'howler';

const ChannelLIst = () => {
  const [playing, setPlaying] = useState(false)
  const [event, setEvent] = useState(undefined)



  var sound;
  const playClick = (_event) => {
    setEvent(_event);

    if($(_event.target).text()=='▶️'){
        setPlaying(true)
        console.log("start")
    }

    if($(_event.target).text()=='⏹️'){
        setPlaying(false)
        // $(event.target).text('')
        $(event.target).text('▶️')
        console.log("pause")
    }
    //$(event.target).text('⏹️')
    console.log("SLBC clicked")
    sound = new Howl({
        src: [],
        html5: true,
    });
    console.log('sound', sound)
    console.log('event', event.target.className)

   //sound.play() 
  }

  const stopClick = async () => {
    console.log("SLBC_P clicked")
    console.log('sound: ', sou)
    sound.pause()
  }

  useEffect(() => {
    if(playing && (event!=undefined)){
        $('button').text('▶️')
        console.log('useEffect got event: ', event)
        $(event.target).text('⏹️')
    }
  }, [event])
  

  return (
    <>
      <div className='flex flex-wrap items-center justify-center max-w-screen min-h-screen bg-blue-500 m-[20px]'>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
        <div className='flex items-center justify-center sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-blue-600 border-1 border-white m-[5px]'>
            <button onClick={playClick} id='SLBC' className='px-[2px] py-[2px] bg-black text-2xl'>▶️</button>
        </div>
       
      </div>


    </>
  )
}

export default ChannelLIst