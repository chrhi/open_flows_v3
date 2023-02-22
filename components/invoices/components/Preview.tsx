import React from 'react'
import Row from "@/util/Row"
import Stack from "@/util/Stack"


const styleTable = {
  data:"text-start p-2 truncate"
}


export default function Preview() {
  return (
    <div className=' w-[0] lg:w-[40%] transition hidden lg:flex h-full  flex-col justify-start  p-4 items-center'>
      <div className='w-full h-[60px] flex justify-center items-center'>
      <h1 className='text-xl'>preview invoice</h1>
      </div>
       <div className='w-full xl:w-[450px] h-fit min-h-[400px] shadow-lg flex flex-col rounded-lg pb-6 bg-white'>
        {/* this is the first div */}
        <div className='w-full flex justify-between p-4 '>
        <div className='w-[50%]'>
          <p className='text-md  font-bold'>Sonatrach</p>
          <p className='text-gray-400 text-xs' >Street address</p>
          <p className='text-gray-400 text-xs'>City ST zipCode </p>
          <p className='text-gray-400 text-xs'>Phone number</p>
        </div>
        <div className='w-[50%]'>
          <p className='text-sm font-bold '>Invoice</p>
          <p className='text-gray-400 text-xs'>Date</p>
          <p className='text-gray-400  text-xs'>Invoice number:997 </p>
        </div>
        </div>

        <div className='w-[94%] mx-auto border-t border-blue-800 border-[2px]' />
        {/* this is the last chance */}
        <div className='w-full flex justify-between p-4 '>
        <div className='w-[50%]'>
          <p className='text-sm font-bold'>To</p>
          <p className='text-gray-400  text-xs ' >name</p>
          <p className='text-gray-400  text-xs '>email </p>
          <p className='text-gray-400  text-xs '>street</p>
        </div>
        <div className='w-[50%]'>
          <p className='text-md font-bold '>From</p>
          <p className='text-gray-400 text-xs'>name</p>
          <p className='text-gray-400 text-xs'>company name and street </p>
        </div>
        </div>
        <table className='w-[94%] mx-auto my-4 border-b rounded-lg border-r border-l border-gray-200'>
          <tr className='bg-gray-200 text-black'>
            <th className={`${styleTable.data}`}>description</th>
            <th className={`${styleTable.data}`}>qnty</th>
            <th className={`${styleTable.data}`}>price</th>
            <th className={`${styleTable.data}`}>total</th>
          </tr>
          <tr className=''>
            <td className={`${styleTable.data}`}>helllow my friends</td>
            <td className={`${styleTable.data}`} >1</td>
            <td className={`${styleTable.data}`} >99$</td>
            <td className={`${styleTable.data}`} >99$</td>
          </tr>
          <tr className=''>
            <td className={`${styleTable.data}`}>helllow my friends</td>
            <td className={`${styleTable.data}`} >1</td>
            <td className={`${styleTable.data}`} >99$</td>
            <td className={`${styleTable.data}`} >99$</td>
          </tr>
        
          
        </table>

             {/* this is the box in the end */}
             <Stack className='w-[94%] mx-auto bg-gray-200  rounded-lg  p-4 h-[150px]  justify-center items-center'>
             <Row className='w-full items-center justify-between '>
             <h1 className='text-lg text-black'>subtotal: </h1> <h1 className='text-lg text-black'>00.0$</h1>
             </Row>
             <Row className='w-full items-center justify-between '>
             <h1 className='text-lg  text-black '>discount:</h1> <h1 className='text-lg text-black'>3.33$</h1>
             </Row>
             <Row className='w-full items-center justify-between '>
             <h1 className='text-lg  text-black'>taxes: </h1> <h1 className='text-lg text-black' >5%</h1>
             </Row>
             <Row className='w-full items-center justify-between '>
             <h1 className='text-lg  text-black'>total due: </h1> <h1 className='text-xl text-blue-800 font-bold'>00.0$</h1>
             </Row>
             </Stack>
             <Stack className='w-full h-[100px] items-center p-4'>
              <Row className='w-full '><h1 className='text-sm font-bold'>Note</h1></Row>
              <Row className='w-full '><p className='text-gray-700 text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore totam, debitis commodi asperiores optio ea vero iusto! Quisquam explicabo iusto illo aspernatur dignissimos, laudantium eligendi aperiam voluptatem, voluptatibus, atque reiciendis?</p></Row>
             </Stack>
       </div>
    </div>
  )
}
