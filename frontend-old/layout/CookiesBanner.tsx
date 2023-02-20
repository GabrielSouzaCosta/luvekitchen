import React, { useEffect, useState } from 'react'

const CookiesBanner = () => {
  const [consented, setConsented] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function consentCookiesPolicy() {
    if (typeof window !== "undefined") {
        setConsented(true);
        sessionStorage.setItem('consentedCookiesPolicy', 'consented');
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
        if (sessionStorage.getItem('consentedCookiesPolicy') === 'consented') {
            setConsented(true)
        }
        setLoaded(true)
    }
  }, [])

  if (consented || !loaded) return <div className='hidden'></div>;
  return (
    <div className='fixed inset-x-0 bottom-0 z-50 bg-light dark:bg-dark text-dark dark:text-light rounded-t-3xl py-3 -drop-shadow-2xl w-full lg:w-1/2 mx-auto transitiona-all duration-300'>
        <div className="container px-4 text-center">
            <p className='text-sm lg:text-md'>
                This website does not use cookies. We respect your privacy and do not store any information about your visit on our servers.
            </p>
            <button onClick={consentCookiesPolicy} className='lg:text-xl bg-dark dark:bg-light rounded-3xl text-light dark:text-dark px-5 py-1 mt-2 font-bold hover:text-primary hover:drop-shadow-2xl dark:hover:bg-primary dark:hover:text-light transition-all duration-500'>
                I understand
            </button>
        </div>
    </div>
  )
}

export default CookiesBanner