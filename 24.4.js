let matrix = [];
let choice;
do {
  console.log("1. Nhập mảng 2 chiều");
  console.log(" Hiển thị mảng 2 chiều");
  console.log("3. Tính tổng các phần tử trong mảng");
  console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
  console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
  console.log("6. Đảo ngược các hàng trong mảng");
  console.log("7. Thoát chương trình");
  switch (choice) {
    case 1:
      let rows = +prompt("Mời nhập số cột");
      let cols = +prompt("Mời bạn nhập số hàng");
      for (let i = 0; i < rows; i++) {
        let temp = [];
        for (let j = 0; j < cols; j++) {
          temp.push(+prompt("Mời bạn nhập số thứ " + j + " của " + i));
        }
        matrix.push(temp);
      }
      break;
    case 2:
      console.log(matrix);
      break;
    case 3:
      let sum = 0;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          sum += matrix[i][j];
        }
      }
      break;
    case 4:
      let big = 0;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (matrix[i][j] > big) {
            big = matrix[i][j];
          }
        }
      }
      console.log("Số lớn nhất là " + big);

      break;
    case 5:
      let count = 0;
      let sum1 = 0;
      let ans = +prompt("Mời bạn nhập số hàng cụ thể để tính trung bình cộng");
      for (let i = 0; i < cols; i++) {
        sum1 += matrix[ans][i];
        count++;
      }
      console.log(`TBC hàng ${ans} là ${sum1 / count}`);

      break;
    case 6:
      matrix.reverse();
      break;
    default:
      break;
  }
} while (choice != 7);
