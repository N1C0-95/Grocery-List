import { useNavigate } from "react-router-dom";
import { Grocery } from "../../../models/grocery";
interface HomeListProps {
  grocery: Grocery | null;
}
export function HomeList(props: HomeListProps) {
  const navigate = useNavigate();

  return (
    <>
      {!props.grocery ? (
        <div className="flex items-center justify-center ">
           ⚠️ NESSUNA LISTA CREATA 
        </div>
      ) : (
        <div className="flex flex-col justify-around h-96 text-center border border-solid border-[#f8f9fa] shadow-soft-xl rounded-2xl bg-white sm:w-[36rem] w-full">
          <h3>LISTA DELLA SPESA</h3>
          <div className="flex justify-around pr-5 pl-5">
            <div>              
              <p className="font-semibold">Created</p>
              <p>{new Date(props.grocery.created).toLocaleDateString('it-IT')}</p>
            </div>
            <div>
              <p className="font-semibold">Udated</p>
              <p>{new Date(props.grocery.updated).toLocaleDateString('it-IT')}</p>
            </div>
            
          </div>
          <table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {props.grocery.products &&
                props.grocery.products.reverse().slice(0,5).map((item) => {
                  return (
                    <tr key={item.id} className="border-b-2 border-slate-100">
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="flex flex-wrap justify-around">
            <p> TOTALE:  {props.grocery.products ? props.grocery.products.length: 0}</p>
            <button
              className="btn secondary w-48 "
              onClick={() => {
                navigate("/grocery");
              }}
            >
              view all products
            </button>
          </div>
        </div>
      )}
    </>
  );
}
