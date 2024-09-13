import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker} from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInputs: ()=>void
    guestsInputOpen:()=>void
    setDestination:(destination:string)=>void
    setEventStartAndEndDates:(dates: DateRange | undefined)=>void
    eventStartAndEndDates: DateRange | undefined
}

export function DestinationAndDateStep({isGuestsInputOpen, closeGuestsInputs, guestsInputOpen, setDestination, eventStartAndEndDates, setEventStartAndEndDates}: DestinationAndDateStepProps){ 
  
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  

    function openDatePiker(){
      setIsDatePickerOpen(true)
    }

    function closeDatePiker(){
      setIsDatePickerOpen(false)
    }

    const displayedDate = eventStartAndEndDates  && eventStartAndEndDates.from && eventStartAndEndDates.to 
      ? format(eventStartAndEndDates.from,"d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to,"d' de 'LLL"))
      : null

    return(
        <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-3 ">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='text-zinc-400 size-5 '/>
              <input 
                onChange={event => setDestination(event.target.value)}
                disabled={isGuestsInputOpen} 
                type="text" placeholder="Para onde você vai?" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none flex-1" 
              />
            </div>
            
            <button onClick={openDatePiker} disabled={isGuestsInputOpen} className='flex items-center text-left  w-[240px] gap-2 '>
              <Calendar className='text-zinc-400 size-5 '/>
              <span className="text-lg text-zinc-400 w-20  flex flex-1 " >
                {displayedDate || 'Data'}
              </span>
            </button>

            <div className='w-px h-6 bg-zinc-800'/>


            {
              isDatePickerOpen&&(
                <div className=' fixed inset-0 bg-black/60 flex items-center justify-center'>
                  <div className=' rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                    <div className='space-y-2 '>
                      <div className='flex items-center justify-between '>
                        <h2 className='text-lg font-semibold'>
                          Selecione a data
                        </h2>
                        <button type='button' onClick={closeDatePiker}>
                          <X  className='size-5 text-zinc-400'/>
                        </button>
                      </div>

                      <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
                    </div>
                    
                  </div>
                </div>
              )
            }


           {
            isGuestsInputOpen? (

              <Button onClick={closeGuestsInputs} variant="secondary">
                Alterar local/data
                <Settings2 className='size-5'/>
              </Button>
            ) :

            (

              <Button onClick={guestsInputOpen} variant="primary">
                Continuar 
                <ArrowRight className='size-5 '/>
              </Button>
            )
           }

        </div>
    )
}