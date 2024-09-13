import { Mail, User, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"
import { DateRange } from "react-day-picker"

interface confirmTripModalProps {
    closedConfirmTripModal:()=> void
    createTrip:(event: FormEvent<HTMLFormElement>)=>void
    setOwnerName:(name:string)=>void
    setOwnerEmail:(email:string)=>void
    destination: string
 
}

export function ConfirmTripModal({closedConfirmTripModal, createTrip, setOwnerName, setOwnerEmail, destination}: confirmTripModalProps){
    return(
      <div className=' fixed inset-0 bg-black/60 flex items-center justify-center'>
        <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
          <div className='space-y-2 '>
            <div className='flex items-center justify-between '>
              <h2 className='text-lg font-semibold'>
                Confirmar criação da viagem
              </h2>
              <button type='button' onClick={closedConfirmTripModal}>
                <X  className='size-5 text-zinc-400'/>
              </button>
            </div>

            <p className='text-sm text-start  text-zinc-400 '>
              Para concluir a criação da viagem para <span className='text-zinc-100 font-semibold'>{destination}</span> nas datas de <span className='text-zinc-100 font-semibold'> 16 a 27 de Agosto de 2024 </span> preencha seus dados abaixo:
            </p>
          </div>

          <form onSubmit={createTrip} className='space-y-3' >
            <div className='flex items-center h-14 px-4 gap-2 bg-zinc-950  border border-zinc-800 rounded-lg'>
              <User className='size-5 text-zinc-400'/>
              <input 
                onChange={event => setOwnerName(event.target.value)}
                className='flex flex-1 bg-transparent outline-none placeholder-zinc-400 bg-transparent  ' 
                name='name'
                placeholder='Seu nome completo'
              />
            </div>

            <div className='flex items-center h-14 px-4 gap-2 bg-zinc-950  border border-zinc-800 rounded-lg'>
              <Mail className='size-5 text-zinc-400'/>
              <input 
                onChange={event => setOwnerEmail(event.target.value)}
                className='flex flex-1 bg-transparent outline-none placeholder-zinc-400 bg-transparent  ' 
                type="email" 
                name='email'
                placeholder='Seu e-mail pessoal'
              />
            </div>
            
            <Button type="submit" size="full" variant="primary">
              Confirmar criação da viagem
            </Button>
          </form>
        </div>
      </div>
    )
}