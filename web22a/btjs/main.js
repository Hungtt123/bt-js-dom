class SANGPHAM {
  constructor(ten, gia, thongtin, hinh) {
    this.ten = ten;
    this.gia = gia;
    this.thongtin = thongtin;
    this.hinh = hinh;
  }
}

let arr = [
  new SANGPHAM(' ASUS', '14.900.000 đ ', 'Laptop ASUS Vivobook Flip TP470EA-EC027T 90NB0S02-M00320 (14" Full HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 10 Home 64-bit/1.5kg', 'https://lh3.googleusercontent.com/Gdy1aeN6rQp1YrQZLApFRRmcjewQ723vS6qdIx1NMtKXrzvcfBemHXOsU8Nuq7YW0tzTCn0bkfNWvIKp3IRA7hDgAuzzMeQF=w500-rw'),
  new SANGPHAM(' ACER', '24.040.000 đ ', 'Laptop ACER Nitro 5 AN515-52-51LW NH.Q3LSV.002 (15.6" Full HD/Intel Core i5-8300H/8GB/128GB SSD/1TB HDD/NVIDIA GeForce GTX 1050Ti/Linux/2.4kg)', 'https://lh3.googleusercontent.com/oUobPUzGSekGyL_BguyYTG0KyZWrBYEzqAUIxOGC27jMy1aHLZOx-a7_ctsuER1Q5_1QomtUyiCcYD2PHjk=w500-rw'),
  new SANGPHAM(' MSI', '19.990.000 đ ', 'Laptop MSI Thin GF65 10UE 286VN (15.6" Full HD/ 144Hz/Intel Core i5-10500H/16GB/512GB SSD/NVIDIA GeForce RTX 3060/Windows 10 Home SL 64-bit/1.8kg)', 'https://lh3.googleusercontent.com/CBjCnqXoK4sOkZIRV3uB7M4eONzSZJF7Q0AzxiWqqIlLX0fh6qR2tEF5TixeafK2Z8xoD3UyeZodGn7m2vZAnyi9CfMMOs2I=w500-rw'),
  new SANGPHAM(' DELL', '13.290.000 đ ', 'Laptop Doanh Nghiệp Dell Latitude 3520 70251603 ( 15.6inch HD/Intel Core i3-1115G4/4GB/256GB SSD/Fedora/1.8kg)', 'https://lh3.googleusercontent.com/1CrD2jv6oqwP6Xu_CtTtctUBKJ6b6Ddu-G7ck4cpWCRVGMtNmgjYBhcxxQ2rIh_0U25HHp9wUomPBzA3tChaoevPN_aqx6Q=w500-rw'),
  new SANGPHAM(' HP', '23.900.000 đ ', 'Laptop HP Envy 13-ba1028TU 2K0B2PA - EVO (13.3 inch/Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Windows 10)', 'https://lh3.googleusercontent.com/RprvdiHp6OCHqjzwGi-sH5h2TBmy6Wm3CrFNXNG6-qosTGv0xSC5e9pTDX7cRT8400vTbQZWshweb8khoa9Q=w500-rw'),
  new SANGPHAM(' LENOVO', '22.490.000 đ ', 'Laptop Lenovo Yoga Slim 7 14ITL05- 82A3002QVN ( 14 inch Full HD/Intel Evo Core i5-1135G7/8GB/512GB SSD/Windows 10 Home 64-bit/1.4kg)', 'https://lh3.googleusercontent.com/IeMYwjQqqm4y-TA6ssQoXSClnzB8OoHxl73WsXPuid9Sm1AdATh6kgVOgN3uq3QdKLuI9TN3UTNZyh1Ce-vUZOyEP965VMkZ5A=w500-rw'),
  new SANGPHAM(' APPLE', '41.090.000 đ ', 'Laptop Apple Macbook Pro 2018 13.3" MR9U2 (13.3"/Core i5/8GB/HD/macOS/1.4 kg)', 'https://lh3.googleusercontent.com/qgVwPKOgCXFJjAO-HB7Su5OPg7sBv4pJj9hTJxdvuz7GlWzA4gVaIC19oasGWcjIUgbqwZBpH1_OkTjyj_M=w500-rw'),



];


for (let i = 0; i < arr.length; i++) {

  document.getElementById('container').innerHTML += ` 
  
  <div class="card-wrapper">
  <div class="card">
      <div class="card-img"><img
              src="${arr[i].hinh}">
          
      </div>
      <div class="card-details"><span><i class="giasp"></i>  ${arr[i].gia}</span><span><i
      </div>
      
      <h3><a href="#" class="sp-button"><h1>${arr[i].ten}</h1></a></h3>
      <p>${arr[i].thongtin}</p>
  </div>
  
      
  </div>`
}
