// import React, { useState } from 'react'
// import Cards from '../components/HOME/Cards';
// import { IoIosAddCircle } from "react-icons/io";
// import InputData from '../components/HOME/InputData';



// const Alltask = () => {
//   useState {input , setInput }= useState("hidden")

//   return (
//    <>
//        <div>
//       <div className="w-full flex justify-end py-2">

//         <button> 
//           <IoIosAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300' />
//         </button>
//       </div>
//       <Cards home= {"true"} />
//     </div>
//     <InputData />
//    </>
//   )
// }

// export default Alltask
import React, { useState } from 'react'
import Cards from '../components/HOME/Cards';
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../components/HOME/InputData';

const Alltask = () => {
  // State to control the visibility of InputData component
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div>
        <div className="w-full flex justify-end py-2">
          <button onClick={() => setIsVisible(true)}>
            <IoIosAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300' />
          </button>
        </div>
        <Cards home={"true"} />
      </div>
      {isVisible && <InputData closeModal={() => setIsVisible(false)} />}
    </>
  )
}

export default Alltask;