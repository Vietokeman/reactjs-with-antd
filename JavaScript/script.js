// var button = document.querySelector("button");
// button.onclick = function () {
//   alert("Hello World!");
// };

// var a = 30;
// var c = 20;
// var b = a + c;
// console.log(b);
// if (a > c) {
//   console.log("Ngoan");
// } else {
//   console.log("Oc cho");
// }
// //function
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(20, 50);
// // alert la thong bao cho nguoi dung

// //Object
// // object
// var infoUser = {
//   name: "Nguyen Viet",
//   age: 18,
//   mail: "vietbmt19@gmail.com",
//   phone: "0977452762",
//   sum: function (a, b) {
//     alert(a / b);
//   },
// };
// infoUser.conheo = "Beo";
// console.log(infoUser);
// //    console.log(infoUser.mail);
// //    console.log(infoUser.name);

// // infoUser.sum(4,5);

// // array
// // var listUser = [
// //    "Nguyen Viet", "Nguyen Ktien", " Nguyen Bin"
// // ]
// // console.log(listUser);
// // console.log(listUser[2]);
// //confirm: thong bao yes, no. Yes return ve true, no return ve false
// // var c = confirm("Hehehe dung khong?");
// // alert(c);

// // // setTimeout Chi lap lai 1 lan du y nhat
// // setTimeout(function(){
// //     console.log("Ban vua doi trong 5 giay");
// // },5000);

// // var count = 0;

// // //setInterval lap lai nhieu lan khac voi setTimeout
// // setInterval(function(){
// //     console.log(count);
// //     count ++;

// // },1000);

// // //typeof
// // var a ;
// // var c = true;
// // console.log(typeof c);

// // Leng of String
// // var fname = 'Nguyen viet ';
// // console.log(fname.length);

// // Do with String
// // var myString = '    Viet iu     Ktien     ma Ktien iu nyc cua Ktien        ';
// // // console.log(myString.indexOf("Ktien"));

// // // // lastIndexOf()
// // // // lastIndexOf("String", Start) vi tri tinh tu trai sang phai va tim kiem nguoc lai.
// // // console.log(myString.lastIndexOf("Ktien", myString.length));
// // // console.log(myString.indexOf("n"));
// // // //slice la cat slice(,)

// // // console.log(myString.slice(0,13));
// // // console.log(myString.slice(-1));// lay ki tu cuoi cung
// // console.log(myString.replace("Viet","Bin"));
// // console.log(myString.replace(/Ktien/g,"Xiu"));// Regular Expression
// // console.log(myString.toUpperCase().trim());

// // console.log(myString.trim());
// // //charAt() lay ki tu o vi tri thu

// //split()
// // var myString = `HTML5, CSS3, Javascript`;
// // 	console.log(myString.split()); // Cả string là 1 phần tử
// // 	console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// // 	console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// // 	console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

// // var list = ["HTML5", "CSS3", "Javascript"];
// // 	console.log(list.toString());
// // var list = ["HTML5", "CSS3", "Javascript"];
// // 	console.log(list); // Trả về: ["HTML5", "CSS3"]
// //     console.log(list.push("Boostrap 5", "Heo con"));
// //     console.log(list); // Trả về: ["HTML5", "CSS3"]

// // shift xoa phan tu dau tien cua mang

// // unshift them phan tu vao dau bang
// // push them phan tu vao cuoi bang

// // var result = (5<6)? "Bin" : " Xiu";
// // console.log(result);

// //for in
// // var infoUser = {
// //   age: 18,
// //   fname: "NViet",
// //   nyName: "Ktien",
// //   email: "vietbmt19@gmail.com",
// //   phone: "0977452762",
// // };
// // console.log(infoUser);
// // for (key in infoUser) {
// //   // duyet tung phan tu trong object
// //   console.log(key);
// //   console.log(infoUser[key]);
// // }
// // // object la ngoac nhon, array la ngoac vuong
// // //for of
// // var inforCus = [
// //   { fname: "nguyen viet", age: 20 },
// //   { fname: "nguyen xiu", age: 19 },
// //   { fname: "nguyen bin", age: 20 },
// //   { fname: "nguyen xiu", age: 19 },
// // ];
// // for (element of inforCus) {
// //   console.log(element.fname);
// // }

// //variables
// // var a;
// // var b;
// // a = prompt();
// // b = prompt();
// // c = Number(a) + Number(b);
// // console.log(c);

// // //function

// // declaration function: ham dinh nghia

// // Có tính hoisting (tức là gọi được hàm trước lúc khai báo hàm đó).
// // Cú pháp:
// // 	function tenHam(thamSo1, thamSo2,...) {
// // 	    // Code
// // 	}

// // console.log(tinhTong(10, 15, 20, 25, 30));

// // function tinhTong() {
// //   console.log(arguments);
// //   var tong = 0;
// //   for (element of arguments) {
// //     tong += element;
// //   }
// //   return tong;
// // }
// // console.log(tinhTong(10, 15, 20, 25, 30));

// //

// // console.log(tinhTong(10, 15, 20, 25, 30));

// // expression function: ham bieu thuc
// // var tinhTong = function () {
// //   console.log(arguments);
// //   var tong = 0;
// //   for (element of arguments) {
// //     tong += element;
// //   }
// //   return tong;
// // };
// // console.log(tinhTong(10, 15, 20, 25, 30));

// // var tinhTong = (a, b) => {
// //   return a + b;
// // };

// // console.log(tinhTong(20, 30));

// // var list = {
// //   Toi: "Bin",
// //   Ny: "Xiu",
// //   Con: "Teo",
// //   Bau: "True",
// // };
// // console.log(list);
// // list["Trinh"] = "Da Mat";
// // console.log(list);
// // delete list.Trinh;
// // console.log(list);

// // const arr = ["Apple", "Banana", "Orange"];

// // arr.forEach(function (currentValue, index, array) {
// //   console.log(`Phần tử ở vị trí ${index} là: ${currentValue}`);
// // });
// //for in lay ra key
// // for of lay ra phan tu
// // const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // var sum = 0;
// // const tong = (array) => {
// //   for (const element of array) {
// //     if (element % 2 == 0) {
// //       sum += element;
// //     }
// //   }
// //   return sum;
// // };
// // console.log(tong(mang));
// // var n;
// // n = prompt("Nhap n di m");
// // var sum = 0;
// // for (let index = 0; index < n; index++) {
// //   sum += (index + 1) / n;
// // }
// // console.log(sum);

// //for each
// // let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let tong = 0;
// // number.forEach(function (item, index, array) {
// //   number[index] = 5;
// //   tong += number[index];
// //   console.log(item, index, array);
// // });
// // console.log(tong);
// // khong dung return

// //every

// // const subject = [
// //   {
// //     sname: "toan",
// //     diem: 8.5,
// //   },
// //   {
// //     sname: "van",
// //     diem: 8,
// //   },
// //   {
// //     sname: "anh",
// //     diem: 8.7,
// //   },
// //   {
// //     sname: "li",
// //     diem: 8.2,
// //   },
// //   {
// //     sname: "sinh",
// //     diem: 8.5,
// //   },
// // ];
// // const hocSinhGioi = subject.every(function (item) {
// //   return item.diem > 8;
// // });
// // console.log(hocSinhGioi);
// // if (hocSinhGioi) {
// //   console.log("Hoc sinh gioi");
// // } else {
// //   console.log("Deo phai hoc sinh gioi");
// // }
// // some la nguoc lai voi every chi can 1 trong nhung
// // every la tat ca

// // const hocNgu = subject.some(function (item) {
// //   return item.diem < 4;
// // });
// // console.log(hocNgu);
// // if (hocNgu) {
// //   console.log("Hoc ngu");
// // } else {
// //   console.log("Deo phai hocNgu");
// // } tra ve true false.

// //find ()
// // tra ve subject
// // const test = subject.filter(function (item) {
// //   return item.diem > 4;
// // });
// // console.log(test);

// // var check = test.forEach(function (item, index, array) {
// //   console.log(item.sname);
// // });

// // map()Hàm map() sẽ lặp qua từng phần tử của mảng. Giá trị trả về của hàm map là một mảng mới, với số lượng phần tử bằng với mảng cũ, nhưng giá trị của các phần tử thì được quyết định bởi lệnh return của hàm map.

// // let beoPhi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // var kq = beoPhi.map((item, index, array) => {
// //   return item;
// // });

// // console.log(kq);
// const subject = [
//   {
//     sname: "toan",
//     diem: 3,
//   },
//   {
//     sname: "van",
//     diem: 8,
//   },
//   {
//     sname: "anh",
//     diem: 8.7,
//   },
//   {
//     sname: "li",
//     diem: 8.2,
//   },
//   {
//     sname: "sinh",
//     diem: 8.5,
//   },
// ];
// // var arr = subject.map((item, index, array) => {
// //   let hocLuc = "";
// //   if (item.diem >= 8) {
// //     hocLuc = "Hoc luc Gioi";
// //   } else if (item.diem < 8 && item.diem >= 6.5) {
// //     hocLuc = "Hoc luc Kha";
// //   } else if (item.diem < 6.5) {
// //     hocLuc = "Hoc luc yeu qua huhu";
// //   }
// //   return {
// //     ten: item.sname,
// //     hocLuc: hocLuc,
// //   };
// // });
// // console.log(subject);
// // console.log(arr);

// // reduce
