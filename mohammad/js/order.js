const orderBtn = document.getElementById("orderBtn");

if (orderBtn) {

    orderBtn.addEventListener("click", function () {

        const product = document.getElementById("productName").innerText;
        const price = document.getElementById("finalPrice").innerText;
        const size = document.getElementById("size").value;
        const count = document.getElementById("count").value;
        const name = document.getElementById("customerName").value;
        const phone = document.getElementById("customerPhone").value;
        const desc = document.getElementById("description").value;

        const color = document.querySelector(".color.active")?.dataset.color || "سفید";

        const app = document.querySelector('input[name="app"]:checked').value;

        const message = `سلام

سفارش جدید دارم

👕 محصول: ${product}

🎨 رنگ: ${color}

📏 سایز: ${size}

🔢 تعداد: ${count}

💰 قیمت: ${price}

👤 نام: ${name}

📱 شماره: ${phone}

📝 توضیحات:
${desc}`;

        if (app === "whatsapp") {

            window.open(
                "https://wa.me/989196753590?text=" + encodeURIComponent(message),
                "_blank"
            );

        } else {

            window.open(
                "https://rubika.ir/chapkater_mohammad",
                "_blank"
            );

        }

    });

}