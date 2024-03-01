const info = [
    "Portgas D. Ace, com o poder da Mera Mera no Mi, era um membro valioso dos Piratas do Barba Branca. Sua jornada em busca de identidade e o impacto de sua morte na Batalha de Marineford ressoam como lições profundas sobre amizade e sacrifício na vida pirata.",
    "Barba Branca, o imponente capitão dos Piratas da Barba Branca, era reverenciado como o homem mais forte do mundo. Sua barba branca e filosofia de viver sem arrependimentos marcaram uma era de pirataria. Na Batalha de Marineford, seu legado perdura, deixando um vácuo que desafia a ascensão de novos líderes nos mares.",
    "Gold Roger, o Rei dos Piratas, desencadeou a Grande Era dos Piratas ao encontrar o One Piece. Sua execução pública marcou o início da busca incessante pelo tesouro supremo. Seu legado inspirou uma nova geração de aventureiros a navegar pelos perigosos mares da Grand Line em busca de seus próprios sonhos.",
    "Barba Negra, traidor dos Piratas do Barba Branca, ascendeu rapidamente na era pós-Gol D. Roger. Com a habilidade de duas Akuma no Mi, sua busca pelo poder e ambição para se tornar o Rei dos Piratas faz dele uma figura sinistra e imprevisível nos mares, desafiando as expectativas da pirataria."
]
const names = [ "Portgas D. Ace", "Barba Branca (Edward Newgate)", "Gold Roger (Gol D. Roger)",  "Barba Negra (Marshall D. Teach)"]
const image = ["assets/ace2.jpg", "assets/bb2.png", "assets/gdr2.jpg", "assets/bn2.jpg"]
const phone = ["assets/phone-ace.jpg", "assets/phone-bb.jpg", "assets/phone-roger.jpg", "assets/phone-bn.jpg"]
let num = 0
let title = document.getElementById("title")
let desc = document.getElementById("desc")
let bg = document.body
window.addEventListener('resize', function() {
    change(num);
});
function change(no){
    title.innerText = names[no]
    desc.innerText = info[no]
    if (window.innerWidth > window.innerHeight) {
        bg.style.background = `url(${image[no]}) no-repeat`
        bg.style.backgroundSize = "100vw 100vh"  
    } else {
        bg.style.background = `url(${phone[no]}) no-repeat`
        bg.style.backgroundSize = "100vw 100vh"  
    }
    num = no
}