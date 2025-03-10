let arr = [];
let choice;
do {
  console.log("Menu");
  console.log("1. Nhập mảng");
  console.log("2. Hiển thị mảng");
  console.log("3. Tìm các phần tử chẵn và lẻ");
  console.log("4. Tính trung bình cộng của mảng");
  console.log("5. Xóa phần tử tại vị trí chỉ định");
  console.log("6. Tìm phần tử lớn thứ hai trong mảng");
  console.log("7. Thoát chương trình");
  choice = +prompt("Mời bạn nhập lựa chọn của bạn");
  switch (choice) {
    case 1:
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
      let max = 0;
      let location = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          location = i;
        }
      }
      console.log(`Số lớn nhất là ${max} ở vị trí ${location}`);
      break;
    case 4:
      let sum = 0;
      let avg = 0;
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          sum += arr[i];
          count++;
        }
        avg = parseInt(sum / count);
        console.log(
          `Tổng các số dương là ${sum} và trung bình cộng các số đó là ${avg}`
        );
      }
      break;
    case 5:
      arr.reverse();
      break;
    case 6:
      let count1 = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - i]) {
          count1++;
        }
      }
      if (count1 > 0) {
        console.log("Mảng đối xứng");
      } else {
        console.log("Mảng không đối xứng");
      }
      break;
    default:
      console.log("Không hợp lệ");
      break;
  }
} while (choice != 7);
