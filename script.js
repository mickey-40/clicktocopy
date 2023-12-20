const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");


const copyText = (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(coupon.value).then(()=>{
    btn.textContent = "Copied";
    setTimeout(()=>{
      btn.textContent = "Copy"
    },3000);
  });
  // coupon.select();
  // coupon.setSelectionRange(0,9999999999);
  // document.execCommand("copy");

  
  

};

btn.addEventListener("click", copyText);
