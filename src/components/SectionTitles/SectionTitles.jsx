

const SectionTitles = ({heading,subHeading}) => {
  return (
    <div className="text-center text-black font-bold my-6 md:w-3/12 mx-auto">
        <p>{subHeading}</p>
        <h1 className="text-2xl border-y-4 py-4 border-black" >{heading}</h1>
    </div>
  )
}

export default SectionTitles