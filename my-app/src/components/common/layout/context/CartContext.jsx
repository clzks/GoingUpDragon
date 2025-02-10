import React, { createContext, useContext, useState, useEffect } from 'react';

// Context 생성
const CartContext = createContext();

// Provider 컴포넌트
export const CartProvider = ({ children }) => {
  // 로컬 스토리지에서 장바구니 개수 불러오기
  const [itemCount, setItemCount] = useState(() => {
    return Number(localStorage.getItem("cartItemCount")) || 0;
  });

  // 장바구니에 아이템 추가 함수
  const addItemToCart = () => {
    setItemCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("cartItemCount", newCount); // 로컬 스토리지에 저장
      return newCount;
    });
  };

  // 컴포넌트가 처음 마운트될 때 로컬 스토리지에서 값 가져오기
  useEffect(() => {
    const savedCount = Number(localStorage.getItem("cartItemCount"));
    if (savedCount) {
      setItemCount(savedCount);
    }
  }, []);

  return (
    <CartContext.Provider value={{ itemCount, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Context를 사용하는 커스텀 훅
export const useCart = () => useContext(CartContext);
