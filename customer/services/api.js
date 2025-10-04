export const api = {
  // Trả về Promise giống fetch/axios để controller dùng await
  fetchProducts: () => {
    return new Promise((resolve) => {
      const products = [
        {
          id: "1",
          name: "Điện thoại Xiaomi Redmi 13 6GB/128GB",
          price: 3720000,
          category: "Xiaomi",
          img: "../view/assets/picture1.jpg",
          desc: "Redmi 13 sở hữu thiết kế hiện đại, phù hợp với xu hướng thẩm mỹ hiện nay với thiết kế nguyên khối từ khung nhựa cứng cáp. Bên cạnh đó, nhà Xiaomi còn mang đến bảng màu trẻ trung và cá tính gồm xanh, vàng, hồng và đen, đáp ứng đa dạng cho sở thích và phong cách cá nhân của người dùng.",
        },

        {
          id: "2",
          name: "Điện thoại Xiaomi Redmi 13 8GB/128GB",
          price: 4310000,
          category: "Xiaomi",
          img: "../view/assets/picture2.jpg",
          desc: "Xiaomi Redmi 13 là sự kết hợp hoàn hảo giữa thiết kế thanh lịch, hiệu năng mạnh mẽ và các công nghệ tiên tiến. Với màn hình rộng, camera ấn tượng và thời lượng pin bền bỉ, Redmi 13 hứa hẹn mang lại trải nghiệm vượt trội, đáp ứng mọi nhu cầu của người dùng từ giải trí đến công việc hằng ngày",
        },

        {
          id: "3",
          name: "Điện thoại Xiaomi Redmi 14C 6GB/128GB",
          price: 3430000,
          category: "Xiaomi",
          img: "../view/assets/picture3.jpg",
          desc: "Xiaomi Redmi 14C là lựa chọn hoàn hảo trong phân khúc tầm trung, nổi bật với màn hình sắc nét, hiệu năng mạnh mẽ, thiết kế hiện đại và hệ thống camera linh hoạt. Với dung lượng pin lớn và khả năng sạc nhanh, sản phẩm này đáp ứng tốt nhu cầu sử dụng hằng ngày, mang đến trải nghiệm vượt trội cho người dùng.",
        },

        {
          id: "4",
          name: "Điện thoại Samsung Galaxy S25 FE 5G 8GB/256GB",
          price: 17490000,
          category: "Samsung",
          img: "../view/assets/picture4.jpg",
          desc: "Samsung Galaxy S25 FE 256GB không chỉ là một chiếc điện thoại, mà còn là người bạn đồng hành hàng ngày. Với hiệu năng mạnh mẽ và Galaxy AI, máy giúp bạn chụp ảnh, làm việc và giao tiếp dễ dàng hơn. Đây cũng là mẫu FE mỏng nhẹ nhất, thiết kế gọn gàng, mang đến nhiều tiện ích trong một thiết bị dễ cầm nắm.",
        },

        {
          id: "5",
          name: "Điện thoại Samsung Galaxy A16 8GB/128GB",
          price: 5300000,
          category: "Samsung",
          img: "../view/assets/picture5.jpg",
          desc: "Samsung Galaxy A16 8GB/128GB là chiếc smartphone vừa đẹp vừa mạnh, phù hợp cho mọi nhu cầu từ giải trí đến công việc. Với thiết kế nhỏ gọn, hiện đại, màn hình lớn, camera rõ nét và pin bền, Galaxy A16 sẽ luôn bên bạn trong các hoạt động hằng ngày, đáp ứng tốt cả khi bạn cần giải trí hay làm việc.",
        },

        {
          id: "6",
          name: "Điện thoại iPhone 17 256GB ",
          price: 24990000,
          category: "Iphone",
          img: "../view/assets/picture6.jpg",
          desc: "iPhone 17 sử dụng chip A19 cùng iOS 26, tích hợp Apple Intelligence vào nhiều tính năng quen thuộc. Nhờ đó, máy xử lý nhanh, đáp ứng tốt nhu cầu làm việc, giải trí và liên lạc. Sự kết hợp chặt chẽ giữa phần cứng và phần mềm giúp mang lại trải nghiệm mượt mà, ổn định và tiện lợi cho người dùng mỗi ngày.",
        },

        {
          id: "7",
          name: "Điện thoại iPhone 17 Pro 256GB",
          price: 34990000,
          category: "Iphone",
          img: "../view/assets/picture7.jpg",
          desc: "Sản phẩm pro năm nay mượt, pin tốt",
        },

        {
          id: "8",
          name: "Điện thoại iPhone 16 128GB",
          price: 19990000,
          category: "Iphone",
          img: "../view/assets/picture8.jpg",
          desc: "Thời lượng pin tăng vọt, Chip A18 siêu nhanh, Camera sắc nét hơn, Thiết kế đầy màu sắc và bền bỉ",
        },

        {
          id: "9",
          name: "Điện thoại iPhone 15 Plus 128GB",
          price: 19590000,
          category: "Iphone",
          img: "../view/assets/picture9.jpg",
          desc: "Dynamic Island đưa thông tin quan trọng lên đầu. Thiết kế bằng kính pha màu và nhôm bền bỉ. Pin dùng cả ngày, cứ tiếp tục làm mọi việc bạn muốn.",
        },
      ];
      // mô phỏng call network
      setTimeout(() => resolve({ data: products }), 150);
    });
  },
};
