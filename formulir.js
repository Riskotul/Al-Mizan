function sendMessage() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;
    const description = document.getElementById("description").value;
    const condition = document.getElementById("condition").value;
    const notes = document.getElementById("notes").value;
    
    const url = "https://api.whatsapp.com/send?phone=6281387725578&text=Permisi%20pak%2C%20saya%20ingin%20meminta%20bantuan%20ambulans%20dengan%20nama%20*"+ name +"*%20dengan%20no.%20Telp%20*"+ number +"*%20saya%20sekarang%20berada%20di%20*"+ address +"*%20dengan%20keterangan%20pasien*"+ description +"*%20dan%20kondisinya%20pasien*"+ condition +"*%20serta%20catatan%20tambahannya%20yaitu%20*"+ notes* +""
    window.open(url);
}