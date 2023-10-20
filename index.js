

const inputText = document.querySelector("#inputText")
const genBtn = document.querySelector("#genBtn")
const container = document.querySelector(".wrapper")
genBtn.addEventListener("click", () => {
    const QrCode = document.createElement("img")
    QrCode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}"
    wrapper.appendChild(QrCode)
})