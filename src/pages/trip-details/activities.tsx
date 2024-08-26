import { CircleCheck } from "lucide-react";

export function Activities(){
    return(
      <div className="space-y-8 ">
        <div className="space-y-2.5 gap-3 ">
          <div className="flex gap-2 items-baseline">
            <span className="text-zinc-300 text-xl font-semibold" >
              Dia 17
            </span>
            <span className="text-zinc-500  text-xs ">
              sábado
            </span>
          </div>

          <p className="text-zinc-500 text-sm">
            Nenhuma atividade cadastrada nessa data.
          </p>
        </div>

        <div className="space-y-2.5 gap-3 ">
          <div className="flex gap-2 items-baseline">
            <span className="text-zinc-300 text-xl font-semibold" >
              Dia 18
            </span>
            <span className="text-zinc-500  text-xs ">
              domingo
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex  gap-3 items-center"> 
                <CircleCheck className="text-lime-300 size-5"/>
                <span className="text-zinc-100">Corrida de Kart</span>
                <span className="text-zinc-400 text-sm ml-auto">17:00h</span>
            </div>

            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex  gap-3 items-center"> 
                <CircleCheck className="text-lime-300 size-5"/>
                <span className="text-zinc-100">Academia</span>
                <span className="text-zinc-400 text-sm ml-auto">18:00h</span>
            </div>
          </div>
        </div>
      </div> 
    )
}