let arr = [];
let choice;
do {
  console.log("Menu");
  console.log("1. Nhập mảng");
  console.log("2. Hiển thị mảng");
  console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
  console.log("4. Tính tổng các phần tử trong mảng");
  console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
  console.log("6. Sắp xếp mảng tăng dần");
  console.log("7. Thoát chương trình");
  choice = +prompt("Mời bạn nhập lựa chọn của bạn");
  switch (choice) {
    case 1:
      let arr = [];
      let n = +prompt("Mời bạn nhập n");
      for (let i = 0; i < n; i++) {
        let a = prompt("Mời bạn nhập ký thứ " + (i + 1));
        arr.push(a);
      }
      break;
    case 2:
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
      break;
    case 3:
      let big = 0,
        small = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > big) {
          big = arr[i];
        } else if (arr[i] < small) {
          small = arr[i];
        }
      }
      console.log("Số lớn nhất là " + big);
      console.log("Số bé nhất là " + small);
      break;
    case 4:
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log("Tổng các số là" + sum);
      break;
    case 5:
      let count = 0;
      let a = +prompt("Mời bạn nhập 1 phần tử");
      for (let i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
          count++;
        }
        console.log("Số " + a + " xuất hiện " + count + " lần");
      }
      break;
    case 6:
      arr.sort();
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
    default:
      console.log("Lựa chọn không khả dụng, vui lòng chọn lại");
      break;
  }
} while (choice != 7);
