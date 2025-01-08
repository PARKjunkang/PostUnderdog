import React, { useState, useEffect } from 'react';
import Order from './Order'; // Order.js import

const OrderMenu = () => {
  const [savedOrder, setSavedOrder] = useState(null);

  // 로컬 스토리지에서 발주 데이터 로드
  const loadOrderFromStorage = () => {
    const orderData = localStorage.getItem("savedOrder");
    if (orderData) {
      setSavedOrder(JSON.parse(orderData));
    }
  };

  useEffect(() => {
    loadOrderFromStorage(); // 컴포넌트가 마운트될 때 데이터 로드
  }, []);

  const openOrderPopup = () => {
    const popupFeatures = `width=${window.innerWidth},height=${window.innerHeight},top=0,left=0,resizable=yes,scrollbars=yes`;
    const popup = window.open("../order", "상품 발주", popupFeatures);

    // 팝업이 닫힐 때 로컬 스토리지 데이터를 로드
    const interval = setInterval(() => {
      if (popup.closed) {
        clearInterval(interval);
        loadOrderFromStorage();
      }
    }, 500);
  };

  return (
    <div>
      <h1>발주 관리</h1>

      <button onClick={openOrderPopup}>상품 발주</button> {/* 팝업 띄우는 버튼 */}

      <h2>저장된 발주서</h2>
      {savedOrder ? (
        <div>
          <p>발주일: {savedOrder.date}</p>
          <table>
            <thead>
              <tr>
                <th>상품코드</th>
                <th>상품명</th>
                <th>수량</th>
                <th>단가</th>
                <th>합계</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {savedOrder.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.total.toLocaleString()}원</td>
                  <td>{item.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>총 합계: {savedOrder.total.toLocaleString()}원</p>
        </div>
      ) : (
        <p>저장된 발주서가 없습니다.</p>
      )}
    </div>
  );
};

export default OrderMenu;
