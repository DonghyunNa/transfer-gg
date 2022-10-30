/* eslint-disable max-len */
function Navbar() {
  return (
    <nav className='sm:max-w-md max-w-full mx-auto bg-white border-gray-200 px-2 sm:px-2 py-2.5 bg-primary text-white'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='/' className='flex items-center'>
          <span className='text-xl font-bold whitespace-nowrap dark:text-white'>STOVE.gg</span>
        </a>

        <div className='hidden relative md:block'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg
              className='w-5 h-5 text-gray-500'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
            <span className='sr-only'>Search icon</span>
          </div>
          <input
            type='text'
            id='search-navbar'
            className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='선수나 팀을 검색하세요'
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
