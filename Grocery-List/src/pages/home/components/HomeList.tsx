export function HomeList(){
    return(
        <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
  <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
    <h6>History Shopping List</h6>
  </div>
  <div className="flex-auto px-0 pt-0 pb-2">
    <div className="p-0 overflow-x-auto">
      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
        <thead className="align-bottom">
          <tr>
            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Name</th>
            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Total Cost</th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div className="flex flex-col justify-center">
                  <h5 className="mb-0 leading-normal text-sm">Lista 1</h5>                  
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="mb-0 font-semibold leading-tight text-xs">10€</p>
              
            </td>
            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    )
}