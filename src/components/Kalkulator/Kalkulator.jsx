import React, { useState } from 'react'

const Kalkulator = () => {
  const [result, setResult] = useState('') // state untuk menyimpan hasil kalkulasi

  // fungsi untuk menangani klik tombol dan menggabungkan nilai tombol ke hasil
  const handleClick = (e) => setResult(result.concat(e.target.id));
  
  // fungsi untuk menghapus semua input
  const clear = () => setResult('');

  // fungsi untuk menghapus satu karakter
  const deleteEl = () => setResult(result.slice(0,-1));

  // fungsi untuk menghitung hasil ekspresi
  const calculate = () => {
    try {
      setResult(eval(result).toString()); // gunakan eval untuk menghitung, tangani kesalahan jika ada 
    } catch (error) {
      setResult('Error'); // tampilkan 'error' jika ada kesalahan pada perhitungan
    }
  };

  return (
    <section className=''>
    <div className='bg-secondary w-[350px] h-[600px] flex flex-col items-center justify-center gap-10 px-3 py-10 ml-96 mt-5 rounded-2xl'>
      <div>
        <input
        className='bg-secondary w-[320px] h-[150px] text-6xl font-semibold text-white text-right px-4 mt-4 mb-2 rounded-xl'
        type="text"
        value={result}
        placeholder='0'
        disabled
        />
        <div className='grid grid-cols-4 px-2 gap-4'>
          <button className='p-4 bg-putih text-secondary text-xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={clear}>AC</button>
          <button className='p-4 bg-putih text-secondary text-xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={deleteEl}>DEL</button>
          <button id='/' className='p-4 bg-chero text-primary text-xl font-semibold shadow-md hover:bg-light transition rounded-2xl' onClick={handleClick}>/</button>
          <button id='%' className='p-4 bg-chero text-primary text-2xl font-semibold shadow-md hover:bg-light transition rounded-2xl' onClick={handleClick}>%</button>

          <button id='7' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>7</button>
          <button id='8' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>8</button>
          <button id='9' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>9</button>
          <button id='*' className='p-4 bg-chero text-primary text-2xl font-semibold shadow-md hover:bg-light transition rounded-2xl' onClick={handleClick}>*</button>

          <button id='4' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>4</button>
          <button id='5' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>5</button>
          <button id='6' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>6</button>
          <button id='-' className='p-4 bg-chero text-primary text-2xl font-semibold shadow-md hover:bg-light transition rounded-2xl' onClick={handleClick}>-</button>
          
          <button id='1' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>1</button>
          <button id='2' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>2</button>
          <button id='3' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>3</button>
          <button id='+' className='p-4 bg-chero text-primary text-2xl font-semibold shadow-md hover:bg-light transition rounded-2xl' onClick={handleClick}>+</button>

          <button id='0' className='p-4 bg-putih text-secondary text-2xl font-semibold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>0</button>
          <button id='.' className='p-4 bg-putih text-secondary text-2xl font-bold shadow-md hover:bg-gray-200 transition rounded-2xl' onClick={handleClick}>.</button>
          <button id='=' className='p-4 bg-primary text-secondary text-2xl font-semibold shadow-md hover:bg-light transition rounded-2xl col-span-2' onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Kalkulator