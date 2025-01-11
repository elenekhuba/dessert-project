import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //ვაიმპორტებთ fontawesome რომ გამოვიყენოთ მისი აიცონები
import { faXmark } from '@fortawesome/free-solid-svg-icons'; //ვაიმპორტებს x აიქონს  რო მერე წასაშლელ ღილაკად გამოვიყენთ
import React from "react"; //რეაქთს ვაიმპორტებთ


// კარტ კომპონენტი იღებს "cart"  და " removeFromCart" როგორც პროპებს მშობელი კომპონენტიდან 
const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);    // იანგარიშებს საბოლოო თანხას კალათაში არსებული ნივთების 

  return (
    <div className="cart">
      
      <h2>Your Cart ({cart.length}) </h2>      
      {cart.length === 0 ? (  //თუ კალათა ცარიელია აჩვენოს ტექსტი რომ ცარიელია     // ამის ზემოთა გვიჩვენებს რიცხვს თუ რამდენი ნივთია კალათაში
        <p>Your cart is empty</p>
      ) : ( // თუ კალათა არაა ცარიელი
        <div >
          {cart.map((item) => ( //თითოეული ნივთიერებისთვის გააკეთოს
            <div key={item.name} className="cart-item">
            <p className="item-name">{item.name}</p>
            <div className="item-details">
              
              <span /* გამოაქვს თითოეული ნივთის რაოდენობა*/> {item.quantity}</span> 
               
              <span /* გამოაქვს ამ ნივთის ფასი 1 ცალის*/ > ${item.price.toFixed(2)}</span>
              <span /* გამოაქვს ამ ნივთის რაოდენობის სრული ფასი*/> ${(item.price * item.quantity).toFixed(2)}</span>
              
            </div>
            {/* ღილაკი რომ მოვაშოროთ ნივთი კალათიდან*/ }
            <button onClick={() => removeFromCart(item.name)}> <FontAwesomeIcon icon={faXmark} /></button>
          </div>
          
          
          ))}
        </div>
      )}
      
      <h3>Total: ${total.toFixed(2)}</h3> {/* გამოაქვს ყველაფრის საბოლოო ფასი*/}
      {cart.length > 0 && <button>Confirm Order</button>}  {/* confirme order-ის ღილაკი*/}
    </div>
  );
};

export default Cart;


