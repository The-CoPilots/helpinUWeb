import Search from './Search'
export default function Home() {
  return (
    
   <div className="container mx-auto mt-12">
    <aside id="sidebar-multi-level-sidebar" className="bg-gray-300 fixed top-50 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        </aside>
        <div className=" px-4 py-3 pt-60 border border-red-600  bg-red-600 ">
      <Search/>
            
      </div>
        <div className="p-4 sm:ml-64">
          
        </div>
      
      
    </div>
  )
}

