import { motion as m } from 'framer-motion'

const contact = () => {
    return (
        <m.main
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-white absolute top-0 left-0 w-full h-full bg-red-400 px-16">
            <div className='my-40 p-1 overflow-hidden'>
                <m.h1
                    animate={{ y: 0 }}
                    initial={{ y: "100%" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-6xl text-center lg:text-9xl'>Lets talk</m.h1>
            </div>

            <div className="flex gap-10">
                <div>
                    <h4>Find me:</h4>
                </div>
                <div className='underline'>
                    <ul>
                        <li className='pb-2'>Twitter</li>
                        <li className='pb-2'>Twitter</li>
                        <li className='pb-2'>Twitter</li>
                    </ul>
                </div>
            </div>
        </m.main>
    )
}
export default contact