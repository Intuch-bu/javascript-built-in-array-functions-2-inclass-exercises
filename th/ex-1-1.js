/* 
ให้เขียน Function ที่ชื่อว่า findItemLocation ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ products และ productName
        1. products เป็น Array ที่บรรจุรายการสินค้า
        2. productName เป็น String ที่ระบุชื่อสินค้าที่ต้องการค้นหา
    - Function นี้จะนำ products มาค้นหาว่ามี productName หรือไม่ 
        1. ถ้าพบจะ Return ตำแหน่งที่พบ productName ออกมา 
        2. ถ้าไม่พบจะ Return -1
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function findItemLocation(products, productionName){
    return products.indexOf(productionName);
}

const products = ["milk", "bread", "eggs", "butter", "cheese", "orange juice"];

console.log(findItemLocation(products, "cereal box")); // -1
console.log(findItemLocation(products, "eggs")); // 2
