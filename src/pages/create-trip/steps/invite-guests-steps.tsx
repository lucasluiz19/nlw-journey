import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps{
    toggleGuestModal:(openOrClosed:boolean)=> void
    openConfirmTripModal:()=>void
    emailToInvite:string[]
}

export function InviteGuestsStep({toggleGuestModal, emailToInvite, openConfirmTripModal}:InviteGuestsStepProps){
    return(
      <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-3 ">
        <button type='button' onClick={()=>toggleGuestModal(true)}  className='flex items-center gap-2 flex-1'>
          <UserRoundPlus className='text-zinc-400 size-5 '/>

          {emailToInvite.length > 0 ? (
            <span className='text-zinc-100 text-lg '> 
              {emailToInvite.length} pessoa(s) convidada(s)
            </span>
          ) :(
            <span className='text-zinc-400 text-lg'>
              Quem estará na viagem?
            </span>
          )}
        </button>
      
        <Button onClick={openConfirmTripModal} variant="primary">
          Confirmar viagem 
          <ArrowRight className='size-5 '/>
        </Button>
      </div>
    )
}