
let lenguajes = ['C','Java','Python','PHP','SQL','Ruby','VisualBasicNET','R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']
let lenguajesNav = ['Lenguaje de programación C, C++ y C#','Java','Python','PHP','SQL','Ruby','Visual Basic. NET','Lenguaje de programación R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']

module.exports = {
    register: (req,res) => {
        res.render('register',{lenguajes,lenguajesNav})
    },
    login: (req,res) => {
        res.render('login',{lenguajes,lenguajesNav})
    }
}