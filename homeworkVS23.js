var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];
//var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//var filtered = arr.filter(function(item) {
    /return (
        emailRegex.test(item.email) && 
          !item.email.endsWith("@mail.ru"))}
console.log(filtered);
