// Liste 5 objetos nativos
Object
String
Array
Function
Boolean


// Liste 5 objetos do browser
NodeList
HTMLCollection
Element
Document
Window


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

//Abri o console dos dois navegadores e usar objeto "window" (objeto pai de tudo do browser) ou "document"
if(typeof window.onafterprint !== "undefined") {   //existe nos dois navegadore
    console.log('Existe');
}

if(typeof document.webkitHidden !== "undefined") {  //Só existe no chrome
    console.log('Existe');
}
