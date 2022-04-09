var kullanicilar= [
    {email:"turanerdar@outlook.com.tr",sifre:"123456"},
    {email:"ziya@gmail.com", sifre:"123456"}
    
    ]
    
    var tivitler = [
    
    {email:"turanserdar@outlook.com.tr",tivit:"Bugun hava cok guzel"},
    {email:"ziya@gmail.com",tivit:"Bugun hava cok guzel"},
    {email:"turanserdar@outlook.com.tr",tivit:"Kapiyi ben acacagim"},
    
    ]
    
    var email= prompt("email?")
    var sifre= prompt("sifre?")
    
    function giris(){
        if((email==kullanicilar[0].email&&sifre==kullanicilar[0].sifre)||
        (email==kullanicilar[1].email&&sifre==kullanicilar[1].sifre)){
            console.log(tivitler)
        }else{
            console.log("Kullanici adi ve sifresi hatali")
        }
        
    }

    giris(email,sifre);