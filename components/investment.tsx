import Image from 'next/image'

import Timeline from '@/public/images/timeline.svg'

export default function Investment() {
  return (
    <section>
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Participate in early seed</div>
        <h1 className="h2 mb-4">Current phase: pre-seed</h1>
        <p className="text-xl text-gray-400">Looking for investment opportunities? We are looking for PARTNERSHIPS!</p>
        <a href="https://forms.gle/gYmuEWoA3MJ8UmPz8">Fill our contact form</a>
        
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{}}>
         <div>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <Image
                src={Timeline}
                width={1024}
                alt="Timeline"
                priority
              />
            </div>
          </div>
      </div>
      
    </section>
  )
}
