/* 
ให้เขียน Function ที่ชื่อว่า findIfItemExist ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ products และ productName
        1. products เป็น Array ที่บรรจุรายการสินค้า
        2. productName เป็น String ที่ระบุชื่อสินค้าที่ต้องการค้นหา
    - Function นี้จะนำ products มาค้นหาว่ามี productName หรือไม่ แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function findIfItemExist(products, productionName){
    if(products.includes(productionName)){
        return `พบ ${productionName} ในรายการสินค้า`
    }
    return `ไม่พบ ${productionName} ในรายการสินค้า`
}

const products = ["milk", "bread", "eggs", "butter", "cheese", "orange juice"];

console.log(findIfItemExist(products, "cereal box")); // ไม่พบ cereal box ในรายการสินค้า
console.log(findIfItemExist(products, "cheese")); // พบ cheese ในรายการสินค้า
