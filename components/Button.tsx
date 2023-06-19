import React from 'react'


interface Props {
    section: string

  }

function Button({ section })  {



  return (
<div className="text-white m-8 flex items-center justify-center">
  <a
    href={`#${section.toLowerCase()}`}
    className="rounded-xl [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#031463] w-[px] sm:w-[125px]  flex flex-row py-2 px-[35px] box-border hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-black text-sm sm:text-lg"
  >
    <p className="self-stretch flex-1 font-semibold flex items-center justify-center">
      {section}
    </p>
  </a>
</div>
  )
}

export default Button