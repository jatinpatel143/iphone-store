import React from 'react'
import img from '../assets/pro.avif'

const About = () => {
  return (
<>
<div className='flex items-center justify-center flex-col'>
<h1 className='text-center p-9 text-[50px]'>Welcome to Iphone Users</h1>
<img src={img} alt="" className='w-3/4'/>

</div>


<div className='flex items-start justify-center flex-col text-xs pt-8 ps-5 pe-5'>
<h1 className='text-[25px]'>About</h1>
  <p className='pt-5'>The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 13.76 centimetres / 5.42″ (iPhone 13 mini, iPhone 12 mini), 14.86 centimetres / 5.85″ (iPhone 11 Pro, iPhone XS, iPhone X), 15.40 centimetres / 6.06″ (iPhone 14, iPhone 13 Pro, iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 15.54 centimetres / 6.12″ (iPhone 14 Pro, iPhone 15, iPhone 15 Pro), 16.40 centimetres / 6.46″ (iPhone 11 Pro Max, iPhone XS Max), 16.95 centimetres / 6.68″ (iPhone 14 Plus, iPhone 13 Pro Max, iPhone 12 Pro Max) or 17.00 centimetres / 6.69″ (iPhone 14 Pro Max, iPhone 15 Plus, iPhone 15 Pro Max) diagonally. Actual viewable area is less.</p>
  <p className='py-2.5'>iPhone 14, iPhone 14 Pro, iPhone 15 and iPhone 15 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi‑Fi calling.</p>
  <p className='py-2.5'>
  Battery life claim refers to larger models. All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/in/batteries and apple.com/in/iphone/battery.html for more information
  </p>
  <p className='py-2.5'>
    
All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/in/batteries and apple.com/in/iphone/battery.html for more information.
  </p>
</div>
</>


    
    
  )
}

export default About