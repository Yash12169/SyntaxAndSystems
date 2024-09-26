import { Roboto,Bebas_Neue } from 'next/font/google'
const bebas_neue_init = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas_neue'
  })  
const roboto_init = Roboto({
    subsets:['latin'],
    weight: ['400','500','700'],
    variable: '--font-roboto'
  })
  
export const roboto = roboto_init.className
export const bebas_neue = bebas_neue_init.className