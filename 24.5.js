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
      let sumAll = 0;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          sumAll += matrix[i][j];
        }
      }
      console.log("Tổng các số là " + sumAll);

      break;
    case 4:
      let sum = 0;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (i == j) {
            sum += matrix[i][j];
          }
        }
      }
      console.log(`Tổng đường chéo chính là ${sum1}`);
      break;
    case 5:
      let sum1 = 0;
      for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
          if (j == rows - i) {
            sum1 += matrix[i][j];
          }
        }
      }
      console.log(`Tổng đường chéo phụ là ${sum1}`);
      break;
    case 6:
      let sum2 = 0;
      let choose = +prompt("Mời bạn chọn nhập (hàng là 1, cột là 2)");
      if (choose == 1) {
        let choose1 = +prompt("Mời bạn nhập hàng số");
        for (i = 0; i < rows; i++) {
          sum2 += matrix[i][choose1];
        }
      } else if (choose == 2) {
        let choose1 = +prompt("Mời bạn nhập cột số");
        for (i = 0; i < cols; i++) {
          sum2 += matrix[choose1][i];
        }
      }
      console.log(`Tổng là ${sum2}`);

      break;
  }
} while (choice != 7);
