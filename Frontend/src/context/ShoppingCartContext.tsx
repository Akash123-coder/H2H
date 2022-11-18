import {useContext ,useState, createContext ,ReactNode} from 'react'

const ShoppingCartContext = createContext({})

type ShoppingCartProviderProps ={
    children: ReactNode
}
type CartItem = {
    id: number
    quantity:number
}


type ShoppingCartContext ={
    CartQuantity:number
    CartItems:CartItem[]
    getItemQuantity:(id: number) => number
    increaseItemQuantity:(id: number) => void
    decreaseItemQuantity:(id: number) => void
    removeFromCart:(id: number) => void
}

export function useShoppingCart() { 
  return ( useContext(ShoppingCartContext)
  )
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
    const [cartItems ,setCartItems] = useState<CartItem>([]);
        
    const CartQuantity = cartItems.reduce(
        (quantity ,item) => item.quantity + quantity,0
    )

    function getItemQuantity(id : number){
        return cartItems.find( item => item.id === id)?.quantity || 0
    }
    function increaseItemQuantity(id : number){
         setCartItems(currItems =>{
            if(currItems.find(item => item.id === id)==null){
                return [...currItems, {id , quantity : 1}]

            } else {
                return currItems.map(item =>{
                    if(item.id === id ){
                        return {...item ,quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
         })
    }
    function decreaseItemQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }
    function removeFromCart(id : number){
        setCartItems(currItems =>{
            return currItems.filter(item =>item.id!==id)
        })
    }
    return (
      
        <ShoppingCartContext.Provider value = {{getItemQuantity,increaseItemQuantity,decreaseItemQuantity ,removeFromCart,cartItems,CartQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}