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
      let le = 0,
        chan = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          chan++;
        } else if (arr[i] % 2 != 0) {
          le++;
        }
      }
      break;
    case 4:
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log("TBC các số trong mảng là " + parseInt(sum / arr.length));
      break;
    case 5:
      let a = +prompt("Mời bạn nhập thứ tự phần tử cần xóa");
      arr.splice(a, 1);
      console.log("Mảng sau khi xóa là : ");
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
      break;
    case 6:
      let first = 0;
      let second = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
          second = first;
          first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
          second = arr[i];
        }
        console.log(
          "Số lớn nhất là: " + first + " và số lớn thứ hai là: " + second
        );
        break;
      }
    default:
      console.log("Không khả dụng, mời bạn nhập lại");
      break;
  }
} while (choice != 7);
