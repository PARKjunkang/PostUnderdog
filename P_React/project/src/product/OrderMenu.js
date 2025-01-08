import React, { useState } from 'react';
import Order from './Order'; // Order.js import

const OrderMenu = () => {
  const [savedOrder, setSavedOrder] = useState(null);

  // 발주 저장된 데이터를 부모로 전달받기
  const handleSaveOrder = (orderData) => {
    setSavedOrder(orderData);
  };

  // 팝업을 여는 함수
  const openOrderPopup = () => {
    // 전체 화면 크기와 위치 설정
    const popupFeatures = `width=${window.innerWidth},height=${window.innerHeight},top=0,left=0,resizable=yes,scrollbars=yes`;

    // 팝업 창 열기
    window.open(
      "../order", // 팝업으로 열 URL (현재 'order' 페이지)
      "상품 발주", // 팝업 창 이름
      popupFeatures
    );
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
