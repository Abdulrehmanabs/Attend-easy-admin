
const Header = () => {
  return (
    <div className="flex flex-wrap px-6 py-2 bg-white rounded-[20px]">
        <div className="py-4 lg:w-1/4 w-2/4">
            <h3 className="mb-8 text-xl font-semibold">Applications Today</h3>
            <span className="text-lg font-semibold">12</span>
        </div>
        <div className="py-4 lg:w-1/4 w-2/4">
            <h3 className="mb-8 text-xl font-semibold">Present Today</h3>
            <span className="text-lg font-semibold">40</span>
        </div>
        <div className="py-4 lg:w-1/4 w-2/4">
            <h3 className="mb-8 text-xl font-semibold">Accepted Leaves</h3>
            <span className="text-lg font-semibold">4</span>
        </div>
        <div className="py-4 lg:w-1/4 w-2/4">
            <h3 className="mb-8 text-xl font-semibold">Rejected Leaves</h3>
            <span className="text-lg font-semibold">2</span>
        </div>
    </div>
  )
}

export default Header