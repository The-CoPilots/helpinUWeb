import Listings from './Listings'
import Search from './Search'
export default function Home() {
  return (
    
   <div className="container mx-auto mt-12">
    <aside id="sidebar-multi-level-sidebar" className="bg-gray-100 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="px-7 py-4  mx-auto w-full text-xl font-semibold ">Filters</div>
        <div>
        <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                </div>

        </aside>
        <div className=" px-4 py-3 pt-60 border border-red-600  bg-red-600 ">
      <Search/>
            
      </div>
        <div className="p-4 sm:ml-64">
          <Listings />
        </div>
      
      
    </div>
  )
}

