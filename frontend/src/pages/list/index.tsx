import Card from './components/Card';
import { Pagination } from "baseui/pagination";
import { useState } from 'react';


function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const calculatedHeight = window.innerHeight * 0.86;
  return (
    <>
    <div className='mx-4 my-4 overflow-y-auto' style={{
      height:calculatedHeight
    }}>
      <Card />
      <div className='my-2' />
      <Card />
      <div className='my-2' />
      <Card />
      <div className='my-2' />
      <Card />
      <div className='my-2' />
      <Card />
      <div className='my-2' />
      <Card />
      <div className='my-2' />
    </div>
        <div className='w-full flex justify-center'>
        <Pagination
          numPages={20}
          currentPage={currentPage}
          onPageChange={({ nextPage }) => {
            setCurrentPage(
              Math.min(Math.max(nextPage, 1), 20)
            );
          }}
        />
      </div>
    </>
  )
}

export default Index