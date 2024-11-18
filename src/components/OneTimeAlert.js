import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const OneTimeAlert = ({
  id,
  title,
  text,
  actionText,
  closeText,
  peremptionDate,
  to,
  startDate,
  endDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user has visited before
    const hasVisited = localStorage.getItem('hasSeen' + id);
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    console.log(hasVisited);

    if (!hasVisited && now >= start && now <= end) {
      setIsOpen(true);
      localStorage.setItem('hasSeen' + id, 'true');
    }
  }, [id, startDate, endDate]);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex px-16 items-center justify-center z-50'>
          <div className='bg-dark rounded-lg shadow-lg p-6 max-w-md mx-auto text-center'>
            <h3 className='pb-h3'>{title}</h3>
            <p className=' mb-6'>{text}</p>
            <div className='flex justify-around flex-col-reverse gap-y-2 sm:flex-row'>
              <button
                onClick={() => setIsOpen(false)}
                className='opacity-60 py-2 px-4 rounded'
              >
                {closeText}
              </button>
              <HashLink to={to}>
                <button>
                  <div className='bg-primary hover:text-base py-2 px-4 rounded'>
                    {actionText}
                  </div>
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OneTimeAlert;
