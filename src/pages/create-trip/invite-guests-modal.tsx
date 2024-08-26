import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"

interface InviteGuestsModalProps {
    toggleGuestModal: (openOrClosed:boolean)=> void
    emailToInvite: string[]
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>)=>void
    removeEmailFromInvites: (email: string)=> void
}


export function InviteGuestsModal({toggleGuestModal, emailToInvite, addNewEmailToInvite, removeEmailFromInvites}: InviteGuestsModalProps){
    return(
      <div className=' fixed inset-0 bg-black/60 flex items-center justify-center'>
        <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
          <div className='space-y-2 '>
            <div className='flex items-center justify-between '>
              <h2 className='text-lg font-semibold'>
                Selecionar convidados
              </h2>

              <button type='button' onClick={()=>toggleGuestModal(false)}>
                <X  className='size-5 text-zinc-400'/>
              </button>
            </div>

            <p className='text-sm text-start  text-zinc-400 '>
              Os convidados irão receber e-mails para confirmar a participação na viagem.
            </p>
          </div>

          <div className='flex gap-2 flex-wrap'>
            {emailToInvite.map(email =>{
              return(
                <div key={email} className='py-1.5 px-2.5 bg-zinc-800 rounded-md flex items-center gap-2 '>
                  <span className='text-zinc-300'>{email}</span>
                  <button onClick={()=> removeEmailFromInvites(email)} type='button' className=''>
                    <X  className='size-4 text-zinc-400'/>
                  </button>
                </div>
              )
            })}              
          </div>

          <div className='w-full h-px bg-zinc-800 '/>

          <form onSubmit={addNewEmailToInvite} className='py-2.5 px-4 flex items-center gap-2 bg-zinc-950  border border-zinc-800 rounded-lg'>
            <AtSign className='size-5 text-zinc-400'/>
            <input 
              className='flex flex-1 bg-transparent outline-none placeholder-zinc-400 bg-transparent  ' 
              type="email" 
              name='email'
              placeholder='Digite o e-mail do convidado'
            />
           

            <Button type="submit" variant="primary">
              Convidar
              <Plus className='size-5 '/>
            </Button>
          </form>
        </div>
      </div>
    )
}