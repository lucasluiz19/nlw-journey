import { Calendar, Tag, X } from "lucide-react"
import { Button } from "../../components/button"

interface createActivityModalProps{
    toggleCreateActivityModal:(openOrFalse:boolean)=>void
}

export function CreateActivityModal({toggleCreateActivityModal}:createActivityModalProps){
    return(
        <div className=' fixed inset-0 bg-black/60 flex items-center justify-center'>
              <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2 '>
                  <div className='flex items-center justify-between '>
                    <h2 className='text-lg font-semibold'>
                      Cadastrar atividade
                    </h2>
                    <button type='button' onClick={()=>toggleCreateActivityModal(false)}>
                      <X  className='size-5 text-zinc-400'/>
                    </button>
                  </div>
      
                  <p className='text-sm text-start  text-zinc-400 '>
                    Todos convidados podem visualizar as atividades.
                  </p>
                </div>
      
                <form  className='space-y-3' >
                  <div className='flex items-center h-14 px-4 gap-2 bg-zinc-950  border border-zinc-800 rounded-lg'>
                    <Tag className='size-5 text-zinc-400'/>
                    <input 
                      className='flex flex-1 bg-transparent outline-none placeholder-zinc-400 bg-transparent  ' 
                      name='title'
                      placeholder='Qual a atividade?'
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className='flex flex-1 items-center h-14 px-4 gap-2 bg-zinc-950  border border-zinc-800 rounded-lg'>
                      <Calendar className='size-5 text-zinc-400'/>
                      <input 
                        className='flex-1  bg-transparent outline-none placeholder-zinc-400 bg-transparent  ' 
                        type="datetime-local" 
                        name='occurs_at'
                        placeholder='data e hora da atividade'
                      />
                    </div>
                  </div>

                  <Button size="full" variant="primary">
                    Salvar atividades
                    
                  </Button>  
                </form>
              </div>
            </div>
    )
}