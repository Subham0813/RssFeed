/* eslint-disable react/prop-types */

import cateories from "../assets/test.js"

const NewsCategories = ({ setId, setLoading }) => {
  
  return (
    <>
    {cateories.map((item, i) => (
        <button key={i} id ={i} className={`text-white focus:outline-none border-2 rounded-xl p-2 hover:bg-blue-600 transition-colors duration-200 font-mono font-semibold`}
        onClick={(e) => {
          setId(e.target.id)
          setLoading(true)
        }}
        >{item}</button>
      ))
    }
    </>
  )
}

export default NewsCategories