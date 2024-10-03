import { Roboto,Bebas_Neue, Chakra_Petch, Inter, Playfair_Display, Rum_Raisin } from 'next/font/google'
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
const inter_init = Inter({
  subsets: ['latin'],
  weight: ['700','600','500','400'],
  variable: '--font-inter'
})
const chakra_petch_init = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400','500','700'],
  variable: '--font-chakra_petch'
})
const playfair_display_init = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500','700'],
  variable: '--font-playfair_display'
})
const rum_raisin_init = Rum_Raisin({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rum_raisin',
})

  
export const roboto = roboto_init.className
export const bebas_neue = bebas_neue_init.className
export const chakra_petch = chakra_petch_init.className
export const inter = inter_init.className
export const playfair_display = playfair_display_init.className;
export const rum_raisin = rum_raisin_init.className
