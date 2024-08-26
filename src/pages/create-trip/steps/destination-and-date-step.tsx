import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInputs: ()=>void
    guestsInputOpen:()=>void
}

export function DestinationAndDateStep({isGuestsInputOpen, closeGuestsInputs, guestsInputOpen}: DestinationAndDateStepProps){
    return(
        <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-3 ">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='text-zinc-400 size-5 '/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none flex-1" />
            </div>
            
            <div className='flex items-center gap-2'>
              <Calendar className='text-zinc-400 size-5 '/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?"  className="bg-transparent text-lg placeholder-zinc-400 w-20 outline-none border-none" />
            </div>

            <div className='w-px h-6 bg-zinc-800'/>

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