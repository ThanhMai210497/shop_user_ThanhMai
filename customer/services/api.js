export const api = {
  // Trả về Promise giống fetch/axios để controller dùng await
  fetchProducts: () => {
    return new Promise((resolve) => {
      const products = [
        { id: "1", name: "ĐẦM CÔNG SIWR THIẾT KẾ LAVENDER HOA HỒNG", price: 530000, category: "Đầm", img: "../view/assets/picture1.jpg", desc: "Chiếc váy nhẹ nhàng, bồng bềnh, basic" },

        { id: "2", name: "ĐẦM CÔNG SỞ CỘC TAY DÁNG A CẠP CAO CHẤT TƠ XỐP NHĂN", price: 349000, category: "Đầm", img: "../view/assets/picture2.png", desc: "Đầm công sở sang trọng" },

        { id: "3", name: "ĐẦM BẦU KẺ CỔ BÈO REN THIẾT KẾ CÔNG SỞ", price: 399000, category: "Đầm", img: "../view/assets/picture3.png", desc: "Đầm bầu kẻ cổ bèo ren thiết kế công sở" },

        { id: "4", name: "ĐẦM XÒE DỰ TIỆC CAO CẤP PHỐI VIỀN BÈO THẮT NƠ", price: 199000, category: "Đầm", img: "../view/assets/picture4.png", desc: "ĐẦM XÒE DỰ TIỆC" },

    
        { id: "5", name: "Đầm maxi có túi Big size dành cho khách ngoại cỡ từ 60-90 ký", price: 135000, category: "Đầm", img: "../view/assets/picture5.png", desc: "Big size dành cho khách ngoại cỡ từ 60-90 ký" },


        { id: "6", name: "Đầm thiết kế BEMINE cổ đức dáng chữ A tay dài phối voan có cúc ", price: 599000, category: "Giày", img: "../view/assets/picture6.png", desc: "Giày thể thao đế êm." }
      ];
      // mô phỏng call network
      setTimeout(()=> resolve({ data: products }), 150);
    });
  }
};
