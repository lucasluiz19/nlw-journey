import { CircleDashed,  UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Participant {
  id:string
  name:string | null
  email:string
  is_confirmed: boolean

} 

export function Guests(){

    const {tripsId} =useParams()
    const [participants, setParticipants]= useState<Participant[]>([])

    useEffect(()=>{
      api.get(`/trips/${tripsId}/participants`).then(response => setParticipants(response.data.participants  ))
    },[tripsId])

    return(
     <div className="space-y-6" >
        <h2 className="font-semibold text-xl  ">Convidados</h2>

        
        {participants.map(participant =>{
            return(
              <div key={participant.id} className="space-y-5">
                <div  className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">{participant.name}</span>
                    <span className="block text-sm text-zinc-400  ">
                      {participant.email}
                    </span>
                  </div>                  
                  <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                </div>  
              </div> 
            )
          }
         )
        }

         


      

        <Button size="full" variant="secondary">
          Gerenciar convidados
          <UserCog className=' size-5'/>
        </Button>

      </div>  
    )
}


