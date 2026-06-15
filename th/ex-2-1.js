/* 
ให้เขียน Function ที่ชื่อว่า organizeSeat ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 3 ตัวคือ guestList, startSeatNo และ numberOfGuest
        1. guestList เป็น Array ที่บรรจุรายชื่อแขก
        2. startSeatNo เป็น String ที่บรรจุหมายเลขที่นั่งลำดับแรกที่ต้องการลบข้อมูลออก
        3. numberOfGuest เป็น String ที่บรรจุจำนวนแขกที่ต้องการลบข้อมูลออก
    - Function นี้จะ Return ค่าออกมาเป็นรายชื่อแขกที่เหลือ หลังจากตัดรายชื่อแขกที่ระบุออกไปแล้ว
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function organizeSeat(guestList, startSeatNo, numberOfGuest){
    guestList.splice(startSeatNo, numberOfGuest);
    return guestList;
}


const guestList = [
  "John",
  "Sarah",
  "Michael",
  "Emma",
  "David",
  "Sophia",
  "Daniel",
];

console.log(organizeSeat(guestList, 0, 2)); // [ 'Michael', 'Emma', 'David', 'Sophia', 'Daniel' ]
