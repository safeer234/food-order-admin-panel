import React from 'react'

function AddItems() {
  return (
    <div className='py-5 px-15'>

      <form action="">
        <div >
            <h3 className='text-[#78716c]'>Upload Image</h3>
            <div className='py-3 px-4 '>
                <label htmlFor="image">
               <i className='bxr text-5xl w-15 text-center items-center h-15  border text-[#a8a29e]  bx-arrow-out-up-square-half'></i> 
            </label>
            <input type="file" id='image' hidden required />

            </div>
            <div>
                 <p className='text-[#78716c]'>Item Name:</p>
            <input className='border border-[#a8a29e] w-70 placeholder:text-sm placeholder:px-3 rounded-sm' type="text" placeholder='Type here ' />

            </div>

            <div className='py-4'>
                <p className='text-[#78716c]'>Item description:</p>
            <input className='border border-[#a8a29e] flex  w-80 h-30 placeholder:text-sm placeholder:px-2 rounded-sm' type="text" />
            </div>
            <div className='flex gap-18'>
                <div>
                     <div>
                     <p className='text-[#78716c]'>Item category:</p>

                </div>
               <div >
                <select className='border text-[#78716c] border-[#a8a29e]' name="" id="">
                    <option value="">Burger</option>
                       <option value="">Momos</option>
                        <option value="">Pizza</option>
                         <option value="">Nuggets</option>
                          <option value="">Chicken pops</option>
                           <option value="">Cool Drinks</option>
                           <option value="">Shawarma</option>
                           <option value="">Alfaham</option>
                           <option value="">Fries</option>
                           <option value="">Chips</option>
                           <option value="">Alfaham</option>
                </select>

               </div>

                </div>

               <div>

                

                <div>
                    <p className='text-[#78716c]'>Item Price:</p>
                    

                </div>
                

                <div>
                    <input className='border text-[#78716c] border-[#a8a29e]' type="number" />

                </div>

               </div>
                
            </div>

            <div className='py-8'>
                <button className='border-2 w-20 h-9 bg-[#ef4444] rounded-sm hover:border-2 hover:bg-white hover:text-[#ef4444] text-[white]'>Add</button>
            </div>
           
            

        </div>
        
      </form>
    </div>
  )
}

export default AddItems
